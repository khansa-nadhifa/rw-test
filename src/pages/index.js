import { NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';
import style from './index.module.css';
import React, { useState } from 'react';

import { routes } from './router';

import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function Index() {
  const [showNav, setShowNav] = useState(true);

  const toggleSidebar = () => {
    setShowNav(!showNav);
  };

  return (
    
  // return (
    <div className={`${style.bodyArea} ${showNav ? style.bodyPd : ''}`}>
      <header className={`${style.header}${showNav ? style.bodyPd : ''}`}>
        <div onClick={() => setShowNav(!showNav)}>
          <img src='./hamburger.png' className={style.hamburgericon} alt='hamburger-icon' />
        </div>
        <div className={style.pageTitle}>
          <p>
            <b>Loan Market </b>
          </p>
        </div>
      </header>
      <div className={`${style.collapsedNavbar} ${showNav ? style.show : ''}`}>
        <nav className={style.nav}>
          {/* profile */}
          <div className={style.profile}>
            <img src='./loanmarket.png' className={style.profpic} alt='profile' />
            <p className={style.name}>Yoseph Duna</p>
            <p className={style.role}>Author</p>
          </div>
          {/* links */}
          <div className={style.pages}>
            <a href='/' className={style.navLink}>
            <img src='/home.png' alt='' className={style.navImage}/>
              <p>Dashboard</p>
            </a>
            <a href='/user' className={style.navLink}>
              <img src='/user2.png' alt='' className="h-8 w-8"/> 
              <p>User Management</p>
            </a>
            <a href='/news' className={style.navLink}>
              <img src='/news.png' alt='' className="h-8 w-8"/> 
              News
            </a>
          </div>
        </nav>
      </div>
      <div className={style.content}>
        <RouterProvider router={routes} />
      </div>
      <Footer />
    </div>
  );
    // <div className='h-screen'>
    //   <div className='grid grid-cols-12 h-full'>
    //     <div className={showNav ? 'col-span-3 h-full' : 'col-span-1 h-full'}>
    //       <Sidebar isShowSidebar={showNav} />
    //     </div>

    //     <div className={showNav ? 'sm:block hidden col-span-9 h-full ' : 'col-span-11 h-full '}>
    //       <div className='flex'>
    //         <Header toggleSidebar={toggleSidebar} />
    //       </div>

    //       <div>
    //         <RouterProvider router={routes} />
    //       </div>

    //       <Footer />
    //     </div>
    //   </div>
    // </div>
   //<RouterProvider router={routes} />;

}

export default Index;
