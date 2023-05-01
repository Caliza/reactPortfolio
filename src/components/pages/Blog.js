import React, { useState } from 'react';
import PDF from '../../assets/RancesRodriguez.pdf'

export default function Blog() {
  const [showPDF, setShowPDF] = useState(true);
  const handleClick = () => setShowPDF(!showPDF)
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Print or Download my {" "}
        <a href="#resumePDF" onClick={handleClick}>Resume</a>
      </p>
      {showPDF?(<object aria-label="pdf resume" width="100%" height="600" data={PDF} type="application/pdf" />):(<div>
        <ul>
            Front-end Proficiencies
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
          </ul>
          <ul>
            Back-end Proficiencies
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
          </ul>
      </div>)}
      
    </div>
  );
}
