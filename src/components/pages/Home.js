import React from 'react';
import img1 from '../images/selfimg.jpg';


export default function Home() {
  return (
    <div className='container'>
      <h1>Rances Rodriguez</h1>
      
      <div>
        <img src={img1} className="selfImg"/>
      </div>
      <p>
      Former HVAC Technician with more than 8 years of experience in pursuit of a career change into Software Engineering after completing UC Berkeley Extension Full Stack/Web Development Bootcamp. Enthusiastic, dependable, and detail-oriented person motivated to keep growing in web development and programming. A team player with a proven ability to analyze and implement system requirements.
      </p>
    </div>
  );
}
