import React, {useState, useEffect} from "react"
import Photo from "./Photo";
export default function Photos({album}){
    const [photos, setPhotos] = useState();
    useEffect( () => {
        const getDataForPhotos = async(id) =>{
            let res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
            let photosData = await res.json();
            setPhotos(photosData);
        };
        getDataForPhotos(album.id);
    }, [album.id]);
   if(photos){
        return(
            <div>
                <h3>{`${album.title}: `}</h3>
                {photos.map(photo =>(
                            <Photo key ={photo.id} photo = {photo} />
                        ))}
            </div>
        )
   }
}