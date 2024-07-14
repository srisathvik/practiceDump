import React from "react";
import List from "./User.js"
// import { NavLink } from 'react-router-dom';
export default function Users(props){
        // const [users, setUsers] = useState();
        // // const [loading, setLoading] = useState(true);
        // // const [error, setError] = useState(null);
      
        // useEffect(() => {
        //   const fetchDataForUsers = async () => {
        //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
        //     let usersData = await res.json();
        //     setUsers(usersData);
        //   };
      
        //   fetchDataForUsers();
        // }, []);
    let users = props.users;
    
    if (users){
                return(
                    <ol>
                        {users.map(user =>
                            (
                                <List user={user} key={user.id} filterData={props.filterData}/>
                            )
                        )}
                    </ol>
                )
            }
      };
