export default function Post({post, filterData}){
    if(filterData &&  ! post.title.toLowerCase().includes(filterData.toLowerCase())){
        return null;
    }
    return(
        <li>
            <div className="posts">
                <h3 className="title">{post.title}: </h3>
                <p>{post.body}</p>
                <button id = {post.id}>Comments</button>
            </div>
        </li>
    )
}