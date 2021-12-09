import React, { useState } from "react";


const BabyNames = (prop) => {
const [searchTerm, setSearchTerm] = useState("");

   return <div className="baby-names-container" >
        <input
        className="search" placeholder="Search baby names.."
        onChange={(e)=> setSearchTerm(e.target.value)}
        type="text" />
        {
        prop.namesOfBaby.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        .filter((babyName) => {
            if (searchTerm === "") {
                return babyName;
            } else if (babyName.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return babyName;
            }
            return false;
        })
        .map((babyName) => {
            return <span className={`all-names ${babyName.sex === "m" ? "male" : "female"}`}
            key= {babyName.id}
            onClick={favourite} >{babyName.name} </span>;
        })
        }<hr/>
    </div>;
};

export default BabyNames;