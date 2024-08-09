import { useState } from "react";
import axios from "axios";


const SignUp = () => {




    let [frmObj,setFrmObj] = useState({"name":"","email":"","password":"","gender":""});
    let [signupStatus, setSignupStatus]=useState('');


    let changeHandler = (e) => {
        //    setFrmName(e.target.value);
        setFrmObj({...frmObj,[e.target.name]:e.target.value});
        console.log(frmObj);
        //send the details to middleware/express and check to see if user with this info..
        // .....exists..if exists display..user already exists, if not,
        // congratulations...ask user to login by providing login page link
    }


    let onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(frmObj);
        const handleSignUp=async()=>{
            try{
                const response=await axios.post(process.env.REACT_APP_BACKEND_URL+"user/signup/",frmObj)
                let data=response.data;
                console.log(data);
                setSignupStatus('Thanks for signing up!')
            }catch(err){
                console.error("Signup Failed:", err)
            }
        };
        handleSignUp();
        //send the details to middleware/express and check to see if user with this info..
        // .....exists..if exists display..user already exists, if not,
        // congratulations...ask user to login by providing login page link
    }
    if(signupStatus=== ''){
    return (
        <>
        <form onSubmit={onSubmitHandler}>
       <div className="row d-flex justify-content-center">
       <div className="col-sm-3">
                <label htmlFor="" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={changeHandler}
                />              
               </div>
        </div>
        <div className="row d-flex justify-content-center">
        <div className="col-sm-3">
                <label htmlFor="" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                    onChange={changeHandler}
                />
               
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
                <label htmlFor="" className="form-label">Password</label>
                <input
                    type="text"
                    name="password"
                    id=""
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
               
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
                <label htmlFor="" className="form-label">Gender</label>
                <div>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
                <label htmlFor="male" className="form-check-label">Male</label>
                </div>
                <div>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
                <label htmlFor="female" className="form-check-label">Female</label>
                </div>
                <div>
                <input
                    type="radio"
                    name="gender"
                    value="others"
                    id="others"
                    aria-describedby="helpId"
                    onChange={changeHandler}
                />
                <label htmlFor="others" className="form-check-label">Others</label>
                </div>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-3 form-check">
                <input
                    type="checkbox"
                    id="check"
                    className="form-check-input"
                />
               <label htmlFor="" className="form-check-label">I agree with all the terms and conditions</label>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-2">        
                <button type="submit" className="btn btn-primary" >  Submit </button>          
            </div>
        </div>
        </form>
        </>
     );
    } else{
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-3">
                    <h4 className='text-primary'>{signupStatus}</h4>
                    </div>
                </div>
            </>
        );
    }
}
 
export default SignUp;


