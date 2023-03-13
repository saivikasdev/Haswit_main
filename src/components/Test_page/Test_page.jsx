import React from "react";
import "./Test_page.css";
const Test_page = () => {
  return (
    <div className="Test_page">
      <div className="Test_page_title">Python datatypes Test</div>
      <div className="Test_body">
        <div className="Test_options">
          <div class="container">
            <div className="Test_question">
              <h5>Mention any One of the python datatype.</h5>
              <div className="time">
                28 s
              </div>
            </div>

            <ul>
              <li>
                <input type="radio" id="f-option" name="selector" />
                <label for="f-option">Pizza</label>

                <div class="check"></div>
              </li>

              <li>
                <input type="radio" id="s-option" name="selector" />
                <label for="s-option">Bacon</label>

                <div class="check">
                  <div class="inside"></div>
                </div>
              </li>

              <li>
                <input type="radio" id="t-option" name="selector" />
                <label for="t-option">Cats</label>

                <div class="check">
                  <div class="inside"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="Test_bottom">
        <div className="next_button">
          Next
        </div>
        </div>
      </div>
    </div>
  );
};

export default Test_page;
