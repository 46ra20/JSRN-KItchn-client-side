import React, { useContext } from 'react';
import { AuthProvider } from '../../UserContext/UserContext';
import Loading from '../../Components/Loading/Loading';

const Blog = () => {
    const {pageTitle, pageLoading} = useContext(AuthProvider)
    pageTitle('Blog')
    const questions = [
        { "id": "01", "question": "Difference between SQL and NoSQL?", "answer": "SQL is a structured data base system but NoSQL is not a structured. You can save as your wish in NoSQL data system but not in SQL data base" },

        { "id": "02", "question": "What is JWT, and how does it work ?", "answer":"JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA."},

        { "id": "03", "question": "What is the difference between javascript and NodeJS?", "answer":"JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language"},
        { "id": "04", "question": "How does NodeJS handle multiple requests at the same time?", "answer": "We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded." }
    ]
            
    return (
        <>
            <div className={`${pageLoading?'':'hidden'}`}>
                <Loading/>
            </div>
            <div className={`sm:w-full md:w-3/4 lg:w-2/4 mx-auto ${pageLoading?'hidden':''}`}>

            {
                questions.map(que =>
                    <div key={que.id} className="p-6 my-2 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{que.question}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{que.answer}</p>
                    </div>
                    )
            }

        </div>
        </>
    );
};

export default Blog;