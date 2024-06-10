import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className='w-[100%] aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='py-6 text-lg w-1/4'>{overview}</p>
                <div>
                    <button className='p-2 px-5 bg-white text-black text-lg rounded-md hover:bg-opacity-50'>Play</button>
                    <button className='mx-4 p-2 px-5 bg-gray-400 text-white text-lg rounded-md'>More Info</button>
                </div>
            </div>
        </>
    )
}

export default VideoTitle