import React from 'react';
import img1 from '../images/movieMaker.jpg';
import img2 from '../images/booze.jpg'
import img3 from '../images/javascript.jpg'
import img4 from '../images/techBlog.jpg'

export default function Portfolio() {
  return (
    <div className=''>
      <h1>Portfolio</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}>
        <div
        style={{
          margin: "15px"
        }}>
          <a href={`https://jsrra.github.io/Booze-Hound/`}><img src={img1} width="400" height="400" /></a>         
        </div>
        <div
        style={{
          margin: "15px"
        }}>
          <a href={`https://jsrra.github.io/Booze-Hound/`}><img src={img2} width="400" height="400" /></a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
        }}>
        <div
        style={{
          margin: "15px"
        }}>
          <a href={`https://caliza.github.io/javascriptQuiz/`}><img src={img3} width="400" height="400" /></a>
        </div>
        <div
        style={{
          margin: "15px"
        }}>
          <a href={`https://arcane-stream-71577.herokuapp.com/`}><img src={img4} width="400" height="400" /></a>
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
