import React from "react";

const BabyNames = (prop) => (
    <div className="baby-names-container" >{
        prop.namesOfBaby.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())).map((babyName) => {
            return <span className={`all-names ${babyName.sex === "m" ? "male" : "female"}`} key= {babyName.id} >{babyName.name} </span>;
        })
        }<hr/> </div>
);

export default BabyNames;