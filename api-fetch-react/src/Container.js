import React,{useState} from "react";
import Content from "./Content.js";

export default function Container(){
    const[tab, setTab] = useState();
    const[data, setData] = useState();
    const[filterData, setFilterData] = useState();
    let timeOut;

    return(
        <div className="container">
            <div className="buttons data">
                <button className="buttons" onClick={()=>{
                    setData();
                    setTab("users")}}>Users</button>
                <button className="buttons" onClick={()=>{
                    setData();
                    setTab("albums")}}>Albums</button>
                <button className="buttons" onClick={()=>{
                    setData();
                    setTab("posts")}}>Posts</button>
            </div>
            <div className="search-bar data">
                    <input placeholder="search" onKeyUp={(e)=>{
                        clearTimeout(timeOut);
                        timeOut = setTimeout(()=>{setFilterData(e.target.value)}, 1000)}} />
            </div>
            <div className="content data">
                <Content value={tab} setData={setData} data={data} filterData={filterData} />
            </div>
        </div>
    )
}