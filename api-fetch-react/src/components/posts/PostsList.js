import React from "react";
import Post from "./Post";
export default function Posts(props){
    // const [posts, setPosts] = useState();
    // useEffect(() =>{
    //     const getDataForPosts = async () =>{
    //         let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //         let data = await res.json();
    //         setPosts(data);
    //     };
    //     getDataForPosts();
    // }, []);
    let posts = props.posts
    if(posts){
        return(
            <ul>
                {posts.map(post=>(
                  <Post post = { post } key={post.id} filterData={props.filterData}/>  
                ))}
            </ul>
        )
    }
    
}