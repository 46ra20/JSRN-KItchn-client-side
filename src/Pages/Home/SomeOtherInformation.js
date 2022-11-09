import React from 'react';

const SomeOtherInformation = () => {
    return (
        <div>

            <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
                <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                        <dl className="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8">
                            <div className="flex flex-col justify-center items-center">
                                <dt className="mb-2 text-3xl font-extrabold">100+</dt>
                                <dd className="font-light text-gray-500 dark:text-gray-400">Chef</dd>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <dt className="mb-2 text-3xl font-extrabold">50+</dt>
                                <dd className="font-light text-gray-500 dark:text-gray-400">Branches</dd>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <dt className="mb-2 text-3xl font-extrabold">500+</dt>
                                <dd className="font-light text-gray-500 dark:text-gray-400">Food Items</dd>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <dt className="mb-2 text-3xl font-extrabold">10k+</dt>
                                <dd className="font-light text-gray-500 dark:text-gray-400">Orders</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SomeOtherInformation;