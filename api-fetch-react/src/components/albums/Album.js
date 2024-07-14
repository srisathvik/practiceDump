export default function Album({album, filterData}){
    if(filterData && ! album.title.toLowerCase().includes(filterData.toLowerCase())){
        return null;
    }
    return(
        <li>
            <h3 className="album album-title" id = {album.id}>{album.title}</h3>
        </li>
    )
}