import { useNavigate } from "react-router-dom";


const SearchFilter = (props) => {


    let navigate = useNavigate();
    // 1. Get housesArray from props
    // 2. Get all counties from each house
    // 3. get unique counties , store in array
    // 4. use map , iterate and create one option per county , in select field


    let allCountiesArray = props.housesData.map((elem) => elem.county);
    let uniqueCountiesArray = Array.from(new Set(allCountiesArray));
    console.log(uniqueCountiesArray);


    //5. get the selected county
    //6. navigate to the SearchResults component. send  county name
    let changeHandler = (e) => { // Synthetic event
        let county = e.target.value;
        console.log(county);
        navigate("/searchresults/"+county);
    }


    return (  
        <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
                <div className="mb-3">                    
                    <select
                        className="form-select form-select-sm"
                        name=""
                        id=""
                        onChange={changeHandler}
                    >
                        <option value="">Select County</option>
                       {
                        uniqueCountiesArray.map( (elem) => {
                            return <option key ={elem} value={elem}> {elem} </option>
                        }


                        )
                       }
                       
                    </select>
                </div>
               
            </div>


        </div>
    );
}
 
export default SearchFilter;