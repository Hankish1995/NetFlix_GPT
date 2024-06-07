import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className='pt-36 px-12'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='py-6 text-lg w-1/4'>{overview}</p>
                <div>
                    <button className='p-2 px-5 bg-gray-400 text-white text-lg rounded-md'>Play</button>
                    <button className='mx-4 p-2 px-5 bg-gray-400 text-white text-lg rounded-md'>More Info</button>
                </div>
            </div>
        </>
    )
}

export default VideoTitle