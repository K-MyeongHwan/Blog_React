/* esLint-disable */
//Lint 끄는 기능임 => 'post' is assigned a value but never used

import React, { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [logo, setLogo] = useState('ReactBlog');
  let [good, setGood] = useState(0);
  let [modal, setModal] = useState(false);
  let [titleNum, setTitleNum] = useState(0);
  let [inputVal, setInputVal] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={() => {
        //array, object 를 다룰 때, 원본을 보존하는게 좋음
        //따라서 카피본을 만드는 것이당
        let keyWord = [...title];
        keyWord[0] = '여자 코트 추천';
        setTitle(keyWord);
      }}>글 수정</button>
      {/* 
      <div className="list">
        <h4>{title[0]} <span onClick={() => { setGood(good + 1) }}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]} <span onClick={() => { setGood(good + 1) }}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          setModal(true);
        }}>{title[2]} <span onClick={() => { setGood(good + 1) }}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map(function (a, i) { //a : 반복문의 데이터, i : 반복문의 증가하는 정수
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setTitleNum(i); setModal(true); }}>{a} <span onClick={(e) => { setGood(good + 1); e.stopPropagation() }}>👍</span> {good} </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{ 
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy)}}>글 삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => { setInputVal(e.target.value); }}></input>
      <button onClick={()=>{
        let copy = [...title];
        copy.unshift(inputVal); //unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
        setTitle(copy)}}>글 추가</button>

      {
        modal ? <Modal titleNum={titleNum} setTitle={setTitle} title={title} /> : null
      }

    </div>
  );
}

function Modal(props) { //이걸 컴포넌트라고 함, props 선언
  return ( //의미없는 div 대신 <></> 사용가능
    <>
      <div className="modal">
        <h4>{props.title[props.titleNum]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => { props.setTitle(['여자 코트 추천', '강남 우동 맛집', '파이썬독학']) }}>글수정</button>
      </div>
    </>
  )
}

/*
class Modal2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return (
      <div>안녕 {this.state.name}
        <button onClick={()=>{
          this.setState({
            age : 21
          })
        }}
      </div>
    )
  }
}
*/
export default App;
