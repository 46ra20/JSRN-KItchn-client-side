import React from 'react';
import { Link } from 'react-router-dom';
import myTeam from '../../Assist/my-team.jpg'

const MyTeam = () => {
    return (
        <div className='my-3'>
            <h2 className='text-center font-semibold text-3xl mb-5'>My Team</h2>

            <Link className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={myTeam} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About My Team</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Whether you live on your own or are a busy parent, finding the time and energy to prepare home-cooked meals can seem like a daunting task. At the end of a hectic day, eating out or ordering in might feel like the quickest, easiest option. But convenience and processed food can take a significant toll on your mood and health.

                        Convenience food is typically high in chemical additives, hormones, sugar, salt, unhealthy fat, and calories, all of which can adversely affect your brain and outlook. It can leave you feeling tired, bloated, and irritable, and exacerbate symptoms of depression, stress, and anxiety.

                    </p>
                </div>
            </Link>


        </div>
    );
};

export default MyTeam;