import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='border' style={{backgroundColor: 'rgb(158 178 198)'}}>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <hr className="margin hr" ></hr> 
      {/* Here we are calling the renderPage method which will return a component  */}
      <main >{renderPage()}</main>
      <footer class="logo">
        <a href="https://github.com/Caliza">
        <FaGithub size={50}/>
      </a>
      <a href="https://www.linkedin.com/in/rances-rodriguez/">
        <FaLinkedin size={50}/>
      </a>
      </footer>
      <hr className="margin hr" ></hr> 
      <div ></div>
    </div>
  );
}
