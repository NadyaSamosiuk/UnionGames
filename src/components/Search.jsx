import React, { useContext } from "react";
import Context from "./Context";

function Search(){

    const {setSearchValue}=useContext(Context)

    function getInputValue(event){
        setSearchValue(event.target.value)
    }

    return(
        <div className="catalog__widget">
            <input type='text' id="catalog__widget__value" placeholder="Поиск" onChange={(event)=>{getInputValue(event)}}/>
        </div>
    )
}

export default Search