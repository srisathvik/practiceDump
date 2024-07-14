import React from "react";
import Album from "./Album";
export default function Albums(props){
    // async function fetchAlbumsData(){
    //     let res = await fetch('https://jsonplaceholder.typicode.com/albums');
    //     setAlbums(await res.json());
    //     setPosts();
    //     setUsers();
    // }
    // function displayAlbums(){
    //     if(albums){
    //         return(
    //             <ul>
    //                 {albums.map(album =>(
    //                     <li key={album.id}>
    //                         <h3 className="album">{album.title}</h3>
    //                     </li>
    //                 ))}
    //             </ul>
    //         )
    //     }
    // }
//     return (
//         <p>displayAlbums</p>
//     )
// }
    // const[albums, setAlbums] = useState();
    
    // useEffect( () => {
    //     const getDataForAlbums = async () =>{
    //         let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    //         let data = await res.json();
    //         setAlbums(data);
    //     };
    //     getDataForAlbums();
    // }, []);
    let albums = props.albums;
    if(albums){
                return(
                    <ul>
                        {albums.map(album =>(
                            // <li key={album.id}>
                            //     <h3 className="album album-title" id = {album.id}>{album.title}</h3>
                            // </li>
                            <Album key={album.id} album = {album} filterData={props.filterData}/>
                        ))}
                    </ul>
                )
            }

}