import React from "react"
export default function Comment({comment}){
    return(
        <li>
            <div>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
            </div>
        </li>
    )
}