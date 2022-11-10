import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../UserContext/UserContext';
import { FaRegUserCircle } from 'react-icons/fa'

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { img, name, price, ratting, description,_id } = serviceDetails;
    const {userData, pageTitle} = useContext(AuthProvider);
    const navigate = useNavigate();
    
    //page title
    pageTitle('Service Details')

    //state
    const [refresh, setRefresh] = useState(false);
    const [review, setReview] = useState([]);

    //handle review 
    const handleReview = (event) =>{
        event.preventDefault();
        const customerReview = event.target.customer_review.value;
        if(userData?.uid){
            const serviceReview = { "serviceId":_id,"serviceName":name,"review": customerReview, "userUid": userData?.uid, "userName": userData?.displayName, "userPhoto": userData?.photoURL}
            fetch('https://assignment-11-server-46ra20.vercel.app/review',{
                method:'POST',
                headers:{
                    'content-type' :'application/json'
                },
                body:JSON.stringify(serviceReview)
            })
            .then(res => res.json())
            .then(data => {
                setRefresh(!refresh)
                event.target.reset();
            })
        }
        else{
                navigate('/login');
            }
    }

    //get review
    useEffect(()=>{
        fetch(`https://assignment-11-server-46ra20.vercel.app/review/${_id}`)
        .then(res=> res.json())
        .then(data=> setReview(data))
    },[refresh,_id])
    return (
        <div className='my-4'>
            <div className='sm:w-full md:w-2/4 mx-auto border rounded p-5 bg-white'>
                <img src={img} alt='' className='shadow-lg rounded'></img>
                <div>
                    <h2 className='text-center text-3xl my-2'><span className='font-semibold'>Product Name:- </span> {name}</h2>
                    <p className='text-center'><span className='font-semibold'>Description:-</span> {description}</p>
                    <div className='flex justify-between my-3 font-semibold text-2xl'>
                        <p>Price:- {price}$</p>
                        <p>Ratting:- {ratting}stars</p>
                    </div>
                </div>
            </div>

            {/* customer review secession */}
            <div className='sm:w-full md:w-2/4 mx-auto p-4 border bg-white rounded mt-5'>
                <h2>Customer Review:-</h2>
                {
                    review.map(r => <div className=' bg-gray-300 my-2 px-3 py-2 rounded-lg' key={r._id}>
                        <div className='flex align-middle'>
                            {
                                r.userPhoto?
                                <img src={r?.userPhoto} alt='' className='w-6 h-6 rounded-full'></img>
                                :
                                    <FaRegUserCircle className='w-6 h-6 rounded-full'></FaRegUserCircle>
                            }
                            <h2 className='text-blue-700 ml-2'>{r.userName|| <span>user name not found</span>}</h2>
                        </div>
                        <h2 className='ml-5 px-3 py-1 bg-gray-100 rounded-3xl inline-block'>{r.review}</h2>
                    </div>)
                }
                {
                    userData?.uid?'':<p className='text-red-600 '>Please Login for review..<Link to={'/login'} className='text-blue-600'>Login</Link></p>
                }

                <form onSubmit={handleReview} className='mt-5'>
                    <label htmlFor="chat" className="sr-only">Your Review</label>
                    <div className="flex items-center bg-gray-50 rounded-lg dark:bg-gray-700">
                        <textarea id="chat" rows="2" name='customer_review' className="block w-full text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please enter your Review..." required></textarea>
                        <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                            <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ServiceDetails;