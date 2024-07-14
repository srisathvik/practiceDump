export default function List({user, filterData}){
    if(filterData && !user.name.toLowerCase().includes(filterData.toLowerCase())){
        return null;
    }
    return(
        <li >
            <div>
                {/* {console.log(filterData)} */}
                <h3 className="name">{user.name}:</h3>
                <p><strong>userName: </strong>{user.username}.</p>
                <p><strong>phone:</strong>{user.phone}.</p>
                <p><strong>EMail:</strong>{user.email}.</p>
                <p><strong>address:</strong>{user.address.suite},{user.address.street},{user.address.city},{user.address.zipcode}.</p>
                <a href={`${user.website}`}>website</a>
            </div>
        </li>
    )
}