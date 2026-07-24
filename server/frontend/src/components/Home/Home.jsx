import React from 'react';
import "../assets/style.css";
import Header from '../Header/Header';

const Home = () => {

    return (
        <>
        <Header/>
        <div className='home-main-div'>
            <div class="home-inner-div">
                <div className='image-wrapper'>
                    <img src="/static/car_dealership.jpg" className=" hero-img" alt="..."/>
                    <div className='overlay'>
                        <h3>Welcome to NorthStar Auto Center!</h3>
                        <h6>Quality cars. Honest deals. Happy customers.</h6>
                        <a href="/dealers" class="btn">View Dealerships</a>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default Home