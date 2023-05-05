import React, { useState } from 'react';
import PDF from '../../assets/RancesRodriguez.pdf'

export default function Resume() {
  const [showPDF, setShowPDF] = useState(false);
  const handleClick = () => setShowPDF(!showPDF)
  return (
    <div className='height'>
      <h1>Resume</h1>
      <p>
        To view or Download my {" "}
        <a href="#resumePDF" onClick={handleClick}>Resume</a>
      </p>
      {showPDF?(<object aria-label="pdf resume" width="100%" height="600" data={PDF} type="application/pdf" />):(<div>
        <ul>
            <h3>Front-end Proficiencies</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>HandlebarsJS</li>
            <li>Responsive Design</li>
            <li>jQuery</li> 
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul>
          <ul>
            <h3>Back-end Proficiencies</h3>
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
