import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Enquiry = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        query: ''
    });

    const [enquiryStatus, setEnquiryStatus] = useState('');

    useEffect(() => {
        // Initialize contactInfo from localStorage
        const storedName = localStorage.getItem('name') || '';
        const storedEmail = localStorage.getItem('email') || '';
        setContactInfo({
            name: storedName,
            email: storedEmail,
            query: ''
        });
    }, []);

    const onChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.id]: e.target.value
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("submitted enquiry");

        try {
            console.log({...contactInfo});
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}enquiry`, {...contactInfo});
            console.log(response);
            let data = response.data;
            console.log(data);
            setEnquiryStatus("Thanks for enquiring!");
        } catch (error) {
            console.error('Updating Enquiry failed:', error);
            setEnquiryStatus("An error occurred, please try again.");
        }
    };

    return (
        enquiryStatus === '' ? (
            <form className="mt-2" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={contactInfo.name}
                        onChange={onChange}
                        className="form-control"
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={contactInfo.email}
                        onChange={onChange}
                        className="form-control"
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="query">Remarks</label>
                    <input
                        id="query"
                        type="text"
                        placeholder="Remarks"
                        value={contactInfo.query}
                        onChange={onChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                    Submit
                </button>
            </form>
        ) : (
            <h4 className='text-primary'>{enquiryStatus}</h4>
        )
    );
};

export default Enquiry;
