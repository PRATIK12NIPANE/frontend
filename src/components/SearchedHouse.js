import { useLocation } from "react-router-dom";
import House from "./House";
import { useState,useEffect } from "react";
import axios from "axios";


const SearchedHouse = (props) => {
    let [searchedHouse,setSearchedHouse] =  useState({});


    let loca = useLocation();
    console.log(loca.state.id);
    useEffect( () =>{
        let fetchData = async () => {
            let result = await axios.get(process.env.REACT_APP_BACKEND_URL+"house/houseById/"+loca.state._id);
          // console.log(housesData);
          setSearchedHouse(result.data[0])
        }
        fetchData();
      },[]);
   
    console.log(searchedHouse);




    if(!props.housesData) {
        return "...loading data";
    }








    return (
        <>
        <h1> Searched House</h1>
        <House houseInfo = {searchedHouse}/>
        </>
       
     );
}
 
export default SearchedHouse;
