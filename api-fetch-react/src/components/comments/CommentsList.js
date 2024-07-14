import React, {useState, useEffect} from "react";
import Comment from "./Comment.js";
export default function CommentsList({post}){
    const [comments, setComments] = useState();
    useEffect(()=>{
        const getDataForComments = async (id)=>{
            let res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            let commentsData = await res.json();
            setComments(commentsData);
        };
        getDataForComments(post.id)
    }
        ,[post.id]);
    if(comments){
        return(
            <div>
                <div className="posts">
                    <h3 className="title">{post.title}: </h3>
                    <p>{post.body}</p>
                </div>
                <ul>
                    {comments.map(comment =>(
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </ul>
            </div>
        )
    }
    
}