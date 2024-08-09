import { useEffect, useState } from "react";
import axios from 'axios';
const EnquiriesList = () => {


    let [enquiries,setEnquiries] = useState([]);


    //get list of enquiries from DB
    useEffect( () =>{
        async function getEnquiries(){
            try {
              const response = await axios.get(process.env.REACT_APP_BACKEND_URL+'enquiry');
              //console.log('called and waiting');
             // console.log(response);
              let data = await response.data;
              setEnquiries(data);
              console.log("*******************");
              console.log(data);
             
            } catch (error) {
              console.error(error);
            }
          }
          getEnquiries();
    },[]);


    return (
        <div>
            <h4 className="mt-4"> List of Enquiries </h4>
                  <div>
           
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Enquiry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        enquiries.map((elem) => {
                          return <tr key={elem._id}>
                                <td> {elem.name}</td>
                                <td> {elem.email}</td>
                                <td> {elem.query}</td>
                            </tr>
                        })
                        }                      
                       
                    </tbody>
                </table>
            </div>


        </div>
        </div>
     );
}
export default EnquiriesList;
