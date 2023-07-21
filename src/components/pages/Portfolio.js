import React from 'react';
import img1 from '../images/movieMaker.jpg';
import img2 from '../images/booze.jpg'
import img3 from '../images/yardsale2.jpg'
import img4 from '../images/techBlog.jpg'

export default function Portfolio() {
  return (
    <div className='container'>
      <h1>Portfolio</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}>
        <div className='shrink'
          style={{
            margin: "15px"
          }}>
          <a href={`https://github.com/JordyMarquez/Binary-Trio-Movie-Reviewer`} target="_blank" rel="noopener noreferrer"><img className='image imgBorder' src={img1} /></a>
          <div className='shrink'
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <a style={{ textDecoration: 'none', color: 'black' }} href={`https://github.com/JordyMarquez/Binary-Trio-Movie-Reviewer`} target="_blank" rel="noopener noreferrer"><h3>Movie Reviewer</h3></a>
          </div>

        </div>
        <div className='shrink'
          style={{
            margin: "15px"
          }}>
          <a href={`https://github.com/mariahw4/yardsale-2.0`} target="_blank" rel="noopener noreferrer"><img className='image' src={img2} /></a>
          <div className='shrink'
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <a style={{ textDecoration: 'none', color: 'black' }} href={`https://github.com/mariahw4/yardsale-2.0`} target="_blank" rel="noopener noreferrer"><h3>Yard Sale 2.0</h3></a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
        }}>
        <div className='shrink'
          style={{
            margin: "15px"
          }}>
          <a href={`https://caliza.github.io/weatherDashboard/`} target="_blank" rel="noopener noreferrer"><img className='image' src={img3} /></a>
          <div className='shrink'
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <a style={{ textDecoration: 'none', color: 'black' }} href={`https://caliza.github.io/weatherDashboard/`} target="_blank" rel="noopener noreferrer"><h3>Weather Dashboard</h3></a>
          </div>
        </div>
        <div className='shrink'
          style={{
            margin: "15px"
          }}>
          <a href={`https://frozen-sea-60329.herokuapp.com/`} target="_blank" rel="noopener noreferrer"><img className='image' src={img4} /></a>
          <div className='shrink'
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <a style={{ textDecoration: 'none', color: 'black' }}
              href={`https://frozen-sea-60329.herokuapp.com/`} target="_blank" rel="noopener noreferrer"><h3>Google Book Search</h3></a>
          </div>
        </div>
      </div>

      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
