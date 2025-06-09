import React from 'react'
import { useRef } from 'react'

const ImgChangeExam = () => {

  let keywordRef = useRef();
  let imgRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();

    if(keywordRef.current.value === "강아지"){
        console.log(imgRef);        
        imgRef.current.src = 'https://www.newstree.kr/data/ntr/image/2021/07/13/ntr202107130005.680x.0.jpg';
    }else{
        imgRef.current.src = 'https://images.mypetlife.co.kr/content/uploads/2019/05/09153922/adorable-animal-animal-photography-225406-scaled.jpg';
    }

    //입력창의 내용을 초기화하고 해당 요소를 선택(focus)하는 기능
    keywordRef.current.value = '';
    keywordRef.current.focus();

  }

  return (
    <div>
        <p>희망하는 사진이 있으신가요?</p>
        <form>
            <input type="text" ref={keywordRef}/>
            <input type="submit" value="변경" onClick={handleClick}/>
        </form>
        <p>
            <img 
                style={{width:150, height:150}}
                ref={imgRef}
                src="https://images.mypetlife.co.kr/content/uploads/2019/05/09153922/adorable-animal-animal-photography-225406-scaled.jpg" />
        </p>
    </div>
  )
}

export default ImgChangeExam