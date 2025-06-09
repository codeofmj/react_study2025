import React, { useState } from 'react'

const LikeCount = () => {
    const [num, setNum] = useState(0);
    const [emoji, setEmoji] = useState("🤍");

    const handleClick = () => {
        if(emoji === "🤍"){
            setEmoji("💖");
            setNum(1);
        }else{
            setEmoji("🤍");
            setNum(0);
        }
    }
    return (
        <div>
            <img
                style={{ width: 180, height: 150 }}
                src={"src/assets/img/cat.jpg"} 
                alt={"고양이 이미지"} />
            <p><span onClick={handleClick}>{emoji}</span>좋아요 {num}개</p>
        </div>
    )
}

export default LikeCount