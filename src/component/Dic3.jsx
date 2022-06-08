import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { createDic,dic} from "../redux/modules/dic";

function Dic3(props) {
  const text1 = React.useRef(null);
  const text2 = React.useRef(null);
  const text3 = React.useRef(null);
  const dispatch = useDispatch();
  let history = useNavigate();
  const update = () => {
    
    dispatch(createDic({list:text1.current.value,
      explanation:text2.current.value,
      example:text3.current.value}))
   
    
  }
    
  return(
    
    <div className="input">
      <h1>단어 수정하기</h1>
      <ul>
        <li>
          <span>단어</span>
          <input type="text" ref={text1}></input>
        </li>
        <li>
          <span>설명</span>
          <input type="text" ref={text2}></input>
        </li>
        <li>
          <span>예시</span>
          <input type="text" ref={text3}></input>
        </li>
      </ul>
      <Link to="/">
        <button onClick={update}>수정하기</button>
      </Link>
    </div>
  
  )

}


export default Dic3;