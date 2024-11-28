import React, { useContext, useState } from 'react';
import LatestCollection from './hero/LatestCollection.jsx'

const Collection = () => {
    const { product } = useContext(LatestCollection); // Assuming ProductProvider is correctly set up
    const [showFilter, setshowFilter] = useState(false);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter Options */}
            <div className='min-w-60'>
                <p
                    className='my-2 text-xl flex items-center cursor-pointer gap-2'
                    onClick={() => setshowFilter(!showFilter)}
                >
                    FILTERS
                </p>
                {/* Category filter */}
                <div
                    className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
                >
                    <p className='mb-2 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col'>
                        <label>
                            <input type="checkbox" value="Category 1" /> Category 1
                        </label>
                        <label>
                            <input type="checkbox" value="Category 2" /> Category 2
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;

