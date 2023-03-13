import React, { useRef, useEffect } from 'react';
import './Live_compiler.css';

const LiveCodeEditor = () => {
  return (
    <iframe
    className='editor'
      src="https://codesandbox.io/s/react-new"
      frameborder="0"
      allowFullScreen
    ></iframe>
  );
};

export default LiveCodeEditor;





