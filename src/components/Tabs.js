import React from 'react'

function Tabs() {
    return (
        <div className='container mx-auto mt-[100px] '>

            <div className='grid-cols-2 '>
                <div className='bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 border-b-2 border-gray w-full z-20 sticky top-0 drop-shadow-md  '>
                    <button>Why Help Scout?</button>
                    <button>What makes Help Scout different?</button>
                </div>
            </div>
        </div>
    )
}

export default Tabs