import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name:"박상현",
        comment:"안녕하시오, 내가 박상현이오"
    },
    {
        name:"우재석",
        comment:"안녕하삼, 국민mc삼"
    },
    {
        name:"강후동",
        comment:"반갑소이"
    }
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
            );
            })}
        </div>
    );
}

export default CommentList;