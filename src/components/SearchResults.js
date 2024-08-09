import { useNavigate, useParams } from "react-router-dom";
import SearchResultRow from "./SearchResultRow";

const SearchResults = (props) => { // HOC - Higher Order Component
    let navigate = useNavigate();
    let paramsObj = useParams();
    let housesArray = props.housesData;
    let filteredHouses = housesArray.filter((elem) => elem.county === paramsObj.county);
    console.log(filteredHouses);

    return (  
        <div className="row">
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredHouses.map((elem) => (
                            <SearchResultRow
                                key={elem._id}  // Add a unique key here
                                house={elem}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
 
export default SearchResults;
