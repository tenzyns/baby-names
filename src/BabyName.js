import React, { useState } from "react";
import FavoriteList from "./FavoriteList";

const BabyNames = (prop) => {
const [searchTerm, setSearchTerm] = useState("");
const [favList, setFavList] = useState([]);
const [nameList, setNameList] = useState(prop.namesOfBaby);

   return <div className="baby-names-container" >
        <input
        className="search" placeholder="Search baby names.."
        onChange={(e)=> setSearchTerm(e.target.value)}
        type="text" />
        <FavoriteList setFavList={setFavList} names={nameList} setNames={setNameList} list={favList}/>
        {
        nameList.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            .filter((babyName) => {
                if (searchTerm === "") {
                    return babyName;
                } else if (babyName.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return babyName;
                }
                return false;
            }).map((babyName) => {
            return <span className={`all-names ${babyName.sex === "m" ? "male" : "female"}`}
            key= {babyName.id}
            onClick={() => {
                if (favList.indexOf(babyName) === -1) {
                setFavList([...favList, babyName]);
                console.log("Hi " + babyName);
                const newList = nameList.filter((elem) => elem.id !== babyName.id);
                setNameList(newList);
            }
            }} >{babyName.name} </span>;
        })
        }<hr/>
    </div>;
};

export default BabyNames;