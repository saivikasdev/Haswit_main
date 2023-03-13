import React from 'react'
import Percentage_block from './Percentage_block/Percentage_block'
import Projects_block from './Projects_block/Projects_block'
import './Right_blocks.css';
import { Link } from "react-router-dom";
const Right_blocks = () => {
  return (
    <div className="Right_blocks">
        <Percentage_block/>
        <Link to = '/Projects'>
        <Projects_block/>
        </Link>
    </div>
  )
}

export default Right_blocks