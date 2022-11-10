import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../UserContext/UserContext';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const MyReview = () => {
    const { userData, pageTitle } = useContext(AuthProvider);
    const navigate = useNavigate();
    const location = useLocation();

    //review state
    pageTitle('My Review')
    const [myReview, setMyReview] = useState([])
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch(`https://assignment-11-server-46ra20.vercel.app/review/?uid=${userData?.uid}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [userData?.uid, refresh])

    //handle delete
    const handleDelete = id => {
        fetch(`https://assignment-11-server-46ra20.vercel.app/delete-review/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                navigate(location)
                console.log(data)
                if (data.deletedCount > 0) {
                    setRefresh(!refresh)
                    toast.success('Review delete successfully!')
                }
            })
    }

    return (
        <div className='container mx-auto my-3'>
            {
                myReview.length < 1 ?
                    <h2 className='text-center font-semibold'>No reviews were added</h2>:
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Food Name
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Review
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myReview.map(review =>
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={review._id}>
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {review?.serviceName}
                                            </th>
                                            <td className="py-4 px-6">
                                                {review?.review}
                                            </td>
                                            <td className="py-4 px-6 flex">
                                                <AiFillDelete className='text-3xl text-red-400 bg-red-100 rounded-full p-2 hover:bg-red-300' data-tip="Delete your Review" onClick={() => handleDelete(review._id)}></AiFillDelete>
                                                <AiFillEdit className='text-3xl text-green-400 bg-green-100 rounded-full p-2 ml-3 hover:bg-green-300' data-tip="Edit your review"></AiFillEdit>
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                }
            {/* outer source */}
            <ReactTooltip />
            <Toaster />

        </div>
    );
};

export default MyReview;