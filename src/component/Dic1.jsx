import React, { Component,useCallback, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import "../Dic1.css";
import axios from "axios";
import {setDic,dic} from "../redux/modules/dic";

function Dic1(props) {
  const [words, setWords] = useState(false);
  let history = useNavigate();
  const dispatch = useDispatch();
  const getWord = useCallback((a)=>dispatch(setDic(a)),[dispatch])
  const getDic = async () => {
    
    const res = await axios.get("http://localhost:5003/dic")
    
      
   
    
    dispatch(setDic(res.data));
    
    
  };
  const new_dic_list = useSelector((state) => state.dic.dic);
  
 

  React.useEffect(() => {
    if(new_dic_list.length <= 1)
      getDic();
    //new_dic_list.length 값이 1개 이하일때만 getdic초기화
    
  }, []); //의존성 배열
    
  return(
    
    <div className="dic-list">
      <h1 style={{color:"white"}}>My Dictionary</h1>
      
       {new_dic_list.map((e,i) => {
         
        return (
      <div className="list" key={i}>
        <span>단어</span>
        
        <p>{e.list}</p>
        <span>설명</span>
        <p>{e.explanation}</p>
        <span>예시</span>
        <p style={{color:"blue"}}>{e.example}</p>       
      </div>
        )
      })} 
      <Link to="/Dic2">
        <button></button>
      </Link>
    </div>
  
  )

}


export default Dic1;