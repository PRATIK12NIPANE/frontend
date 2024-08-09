import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const  Login= () => {
    let navigate = useNavigate();


    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
   
    let onEmailChangeHandler =  (e) => { //synthetic event
        setEmail(e.target.value);
        // console.log(email);
    }


    let onPswdChangeHandler =  (e) => { //synthetic event
        setPassword(e.target.value);
        // console.log(password);
    }


    let clickHandler = (e) =>{
        e.preventDefault();
        let frmObj = {email,password}
        console.log(frmObj);
        const handleLogin=async()=>{
            try{
                const response=await axios.post(process.env.REACT_APP_BACKEND_URL+"user/login/",frmObj)
                let data=response.data;
                console.log(data);
                if(data.email){
                    localStorage.setItem('name',data.name);
                    localStorage.setItem('email',data.email);
                    localStorage.setItem('loginStatus',true)
			   if(data.role==="customer")
                        navigate('/');
                    else if(data.role==="realtor")
                        navigate('/enquiries');


                }
                else{
                    localStorage.clear();
                    localStorage.setItem('loginStatus',false)
                }
            }catch(err){
                console.error("Login Failed:", err)
                localStorage.clear();
                localStorage.setItem('loginStatus',false)
            }
        };
        handleLogin();


    }




    return (
        <>
       
       <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={onEmailChangeHandler}
                    />          
                </div>
            </div>
        </div>




        <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Password</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder=""
                            aria-describedby="helpId"
                            onChange={onPswdChangeHandler}
                        />
                </div>
            </div>
        </div>




        <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
                    <div className="mb-3">
                        <button onClick={clickHandler} className="btn btn-success" type="submit"> Submit</button>
                    </div>
            </div>
        </div>
       
        </>
       
      );
}
 
export default Login;