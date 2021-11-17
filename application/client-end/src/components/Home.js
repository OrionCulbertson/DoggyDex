import React from 'react'
import Logo from './Logo'
import UploadDog from './UploadDog'

const Home = () => {
    return (
        <>

            <Logo />
            <div className="contentContainer">
                <UploadDog />
            </div>
        </>
    )
}

export default Home
