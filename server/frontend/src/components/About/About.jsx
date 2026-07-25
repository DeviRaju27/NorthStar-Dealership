import React from 'react';
import "../assets/style.css";
import Header from '../Header/Header';

const About = () => {
    return (
        <>
       
        <div className="card" style={{width: '80%', margin: 'auto', marginTop:'5%'}}>
      <div className="banner" name="about-header">
        <h1>About Us</h1>
            Welcome to Best Cars dealership, home to the best cars in North America. 
            We deal in selling domestic and imported cars at reasonable prices.
      </div>
      <div style={{display: 'flex',flexDirection: 'row', margin:'auto'}}>
      <div className="card" style={{width: '30%'}}>
        <img className="card-img-top" src="/static/person.png" alt="person 1"/>
        <div className="card-body">
          <p className="title">Person1</p>
          <p>Person1 Title</p>
          <p className="card-text">Some text that explains the person1 in about 2 short sentences</p>
          <p>person1@example.com</p>
        </div>
      </div>

      <div className="card" style={{width: '30%'}}>
        <img className="card-img-top" src="/static/person.png" alt="person 2"/>
        <div className="card-body">
          <p className="title">Person2</p>
          <p>Person2 Title</p>
          <p className="card-text">Some text that explains the person2 in about 2 short sentences</p>
          <p>person2@example.com</p>
        </div>
      </div>

      <div className="card" style={{width: '30%'}}>
        <img className="card-img-top" src="/static/person.png" alt="person 3"/>
        <div className="card-body">
          <p className="title">Person3</p>
          <p>Person3 Title</p>
          <p className="card-text">Some text that explains the person3 in about 2 short sentences</p>
          <p>person3@example.com</p>
        </div>
      </div>
    </div>
    </div>
        </>

    )
}
export default About