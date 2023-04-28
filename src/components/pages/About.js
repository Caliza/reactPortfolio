import React from 'react';
import img1 from '../images/passwordGenerator.jpg';

export default function About() {
  return (
    <div>
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
          <a href={`https://github.com/Caliza/reactPortfolio`}><img src={img1} width="400" height="400" /></a>         
        </div>
        <div
        style={{
          margin: "15px"
        }}>
          <a href={`https://github.com/Caliza/reactPortfolio`}><img src={img1} width="400" height="400" /></a>
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
          <a href={`https://github.com/Caliza/reactPortfolio`}><img src={img1} width="400" height="400" /></a>
        </div>
        <div
        style={{
          margin: "15px"
        }}>
          <a href={`https://github.com/Caliza/reactPortfolio`}><img src={img1} width="400" height="400" /></a>
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
