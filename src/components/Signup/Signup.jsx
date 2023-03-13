import React from "react";
import { useState } from "react";
import "./Signup.css";
import { authentication } from "../../firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { doc, setDoc, Timestamp ,getDoc} from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { redirect } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { getAuth, updateProfile } from "firebase/auth";
import Cookies from 'universal-cookie';
const Signup = () => {
  const cookies = new Cookies();
  const [otp_block, setotp_block] = useState(false);
  const [Phone, setPhone] = useState("+91");
  const [OTP, setOTP] = useState("");
  const [Loader, setLoader] = useState(false)

  window.name = Phone;
  const Recaptcha = (e) => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "Recaptcha",
      {
        size: "invisible",
        callback: (response) => {},
      },
      authentication
    );
  };

  
  const navigate = useNavigate();
  async function handleClick() {
    const docRef = doc(db, "Students",Phone );
    const docSnap = await getDoc(docRef);
if(docSnap.exists()){
  console.log(doc)
  
  navigate("/");
}
else{
  console.log('//////////')
  
  navigate("/Complete_details");
}
  }

  const verifyotp = async (e) => {

    e.preventDefault();
    let Otp = e.target.value;
    setOTP(Otp);

    const docRef = doc(db, "Students",Phone );
    const docSnap = await getDoc(docRef);
    if (e.target.value.length === 6) {
      let conformationresult = window.conformationResult;
      conformationresult
        .confirm(e.target.value)
        .then(async (result) => {
          
          cookies.set('user', result.user, { path: '/' });
          if(docSnap.exists()){
            console.log(doc)
            console.log(authentication.currentUser.phoneNumber)
            navigate("/");
          }
          else{
            console.log(result)
            console.log(result.user)
            authentication.currentUser.phoneNumber=result.user.phoneNumber
            await setDoc(doc(db, "Students", Phone), {
              Phone: Phone,
              Points : 0,
              UID : result.user.uid
            }).then({
              

            });



            navigate("/Complete_details");
          }

          
          // console.log(result.user.me)
          // console.log(result.user)
          // handleClick()
            

        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const requestOTP = (e) => {
    e.preventDefault();
    if (Phone.length >= 12) {
      
    setLoader(true)
      Recaptcha();
      let appverifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, Phone, appverifier)
        .then((conformationResult) => {
          window.conformationResult = conformationResult;
          
    setotp_block(true);
        })
        .catch((error) => {
          console.log(error);
        });
        
    }
  };

  const set_phone = (e) => {
    let phone = e.target.value;
    setPhone(phone);
  };

  return (
    <div className="Signup">
      <div className="">
        <form onSubmit={requestOTP} className='Phone_otp_block'>
          
        <div className="Phone_text">Enter Phone Number</div>
          <input
            type="tel"
            className="Phone_input"
            placeholder="Enter Your Phone number"
            onChange={set_phone}
          />
          <button type="submit" className="send_otp">
            Send OTP
          </button>
          {otp_block === true ? (
          <>
            <div className="OTP_field">
              <input
                type="telephone"
                className="OTP_input"
                placeholder="OTP"
                onChange={verifyotp}
              />
            </div>
          </>
        ) : null}
        </form>
       
      </div>
      {Loader === true ? (
          <>
            <div className="Loader">
      </div>
          </>
        ) : null}
      <div id="Recaptcha"></div>
    </div>
  );
};

export default Signup;
