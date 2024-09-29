import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()

    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                Github Follower : {data.followers}
                <img src={data.avatar_url} alt="Git Picture" width={300} />
            </div>
        </>

    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/krotrn`)
        .then(response => response.json())
    return response
}