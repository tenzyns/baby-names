import React from "react";

const FavoriteList = (prop) => {
    return <div className="favorites">
        Favorite names : {prop.list.map((babyName, index) =>
        <span key={index}
        className={`all-names ${babyName.sex === "m" ? "male" : "female"}`}
        onClick={() => {
            prop.setNames([...prop.names, babyName]);

        prop.setFavList(prop.list.filter((item) => {
            console.log(item.id);
            return item.id !== babyName.id;
        }));
        }} >
            {babyName.name}
        </span>)}
        <hr/>
    </div>;
};

export default FavoriteList;