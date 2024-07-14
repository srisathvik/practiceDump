import React,{useState, useEffect} from "react";
import Users from "./components/users/UsersList";
import Albums from "./components/albums/AlbumsList";
import Posts from "./components/posts/PostsList";
import Comments from "./components/comments/CommentsList";
import Photos from "./components/photos/AlbumPhotos";
export default function Content(props){

    const[albums, setAlbums] = useState();
    const[posts, setPosts] = useState();
    const [users, setUsers] = useState();
    
    useEffect( () => {
        const getDataForAlbums = async () =>{
            let res = await fetch("https://jsonplaceholder.typicode.com/albums");
            let data = await res.json();
            setAlbums(data);
        };


        const getDataForPosts = async () =>{
            let res = await fetch("https://jsonplaceholder.typicode.com/posts");
            let data = await res.json();
            setPosts(data);
        };


        const getDataForUsers = async () =>{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = await res.json();
            setUsers(data);
        };
        getDataForAlbums();
        getDataForPosts();
        getDataForUsers();
    }, []);
    function handleAlbumsClick(e){
        if(e.target.id){
            props.setData(e.target.id);
        }
    }

    function handlePostsClick(e){
        if(e.target.id){
            props.setData(e.target.id);

        }
        
    }
    if(props.value === "users"){
        return(
            <div onClick = {(e) => {
               }}>
                <Users users={users} filterData={props.filterData}/>
            </div>
        )
    }
    else if(props.value === "albums"){
        if(props.data){
            return(
                <div>
                    <Photos album = {albums[props.data - 1]} />
                </div>
            )
        }
        return(
            <div onClick={(e) =>{handleAlbumsClick(e)}}>
                <Albums albums={albums} filterData={props.filterData} />
            </div>
        )
    }
    else if(props.value === "posts"){
        if(props.data){
            return(
                <div>
                    <Comments post = {posts[props.data - 1]} />
                </div>
            )
        }
        return(
            <div onClick={(e) =>{handlePostsClick(e)}}>
                <Posts posts={posts} filterData={props.filterData} />
            </div>
        )
    }
}