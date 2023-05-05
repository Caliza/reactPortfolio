import React from 'react';
import img1 from '../images/movieMaker.jpg';
import img2 from '../images/booze.jpg'
import img3 from '../images/javascript.jpg'
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
          <a href={`https://binary-trio-movie-reviewer.herokuapp.com/`}><img className='hover image' src={img1}/></a>
        </div>
        <div className='shrink'
          style={{
            margin: "15px"
          }}>
          <a href={`https://jsrra.github.io/Booze-Hound/`}><img className='hover image' src={img2}/></a>
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
          <a href={`https://caliza.github.io/javascriptQuiz/`}><img className='hover image' src={img3}/></a>
        </div>
        <div className='shrink'
          style={{
            margin: "15px"
          }}>
          <a href={`https://arcane-stream-71577.herokuapp.com/`}><img className='image' src={img4}/></a>
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
