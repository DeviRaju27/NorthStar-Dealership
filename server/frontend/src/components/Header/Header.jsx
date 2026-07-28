import React, { useEffect, useState }from 'react';
import "../assets/style.css";
import "../assets/bootstrap.min.css";
import { NavLink } from "react-router-dom";



const Header = () => {
    const [username, setUsername] = useState("");
     
    useEffect(() => {
      const currUser = sessionStorage.getItem('username');
      setUsername( currUser || '')
    }, []);

    const logout = async (e) => {
      e.preventDefault();

      let logout_url = `${window.location.origin}/djangoapp/logout`;
      try 
      {
        const res = await fetch(logout_url, {
          method: 'GET'
        })
      const json = await res.json();
      
      if (json) {
        const currentUser = sessionStorage.getItem('username');
        sessionStorage.removeItem('username');
        alert(`logging out user ${currentUser}`);
        window.location.href = '/';

      }else {
          alert("The user could not be logged out.");
        }
      }catch (error) {
        console.error(error);
        alert("The user could not be logged out.");
      }
    };


    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light flex-column p-0">
            <div className='navbar-top w-100 d-flex justify-content-between align-items-center px-5 pt-2'>
              <div className='flex-fill'></div>
              <div className='d-flex flex-fill text-center align-items-center' >
                <img src='/static/northstar_logo_long.png' className='header-logo' alt= 'northstar logo'/>
                {/* <h5>NorthStar Auto Center</h5> */}
              </div>
              <div className='d-flex gap-2'>
                <div className='dropdown'>
                <button type='button' className='btn dropdown-toggle' id='emailDropDown' data-bs-toggle='dropdown' aria-expanded='false'>
                  <i className='bi bi-envelope-fill'></i>
                </button>
                <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='emailDropDown'>
                  <li>
                    <a className='dropdown-item' href="">Sales: sales@northstar.com</a>
                  </li>
                  <li>
                    <a className='dropdown-item' href="">Parts: parts@northstar.com</a>
                  </li>
                  <li>
                    <a className='dropdown-item' href="">Service: service@northstar.com</a>
                  </li>
                </ul>
                </div>
                <div className='dropdown'>
                <button type='button' className='btn dropdown-toggle' id='phoneDropDown' data-bs-toggle='dropdown' aria-expanded='false'>
                  <i className='bi bi-telephone-fill'></i>
                </button>
                <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='phoneDropDown'>
                  <li>
                    <a className='dropdown-item' href="">Sales: +1 234- 567- 4567</a>
                  </li>
                  <li>
                    <a className='dropdown-item' href="">Parts: +1 234- 567- 4567</a>
                  </li>
                  <li>
                    <a className='dropdown-item' href="">Service: +1 234- 567- 4567</a>
                  </li>
                </ul>
                </div>
              </div>
            </div>


            <div className="navbar-btm w-100 d-flex justify-content-between align-items-center px-5">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <div className='flex-fill'>
                  <ul className="navbar-nav flex-row gap-3">
                    <li className="nav-item">
                      <NavLink to ='/' className={({ isActive }) => isActive ? 'nav-link active fw-bold nav-color' : 'nav-link nav-color'}> Home </NavLink>
                      {/* <a className="nav-link active" style={{fontSize: "larger"}} aria-current="page" href="/">Home</a> */}
                    </li>
                    <li className="nav-item">
                      <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-link active fw-bold nav-color' : 'nav-link nav-color'}>About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to='/Contact' className={({ isActive }) => isActive ? 'nav-link active  fw-bold nav-color' : 'nav-link nav-color'}>Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="loginlink" id="loginlogout">
                    { username ? (
                      <>
                      <span className='mx-3'>{username}</span>
                      <a href='/' onClick={logout}>Log out</a>
                      </>
                    ) : (
                      <>
                      <a className='homepage_links mx-3' href='/login'>Login</a>
                      <a className='homepage_links mx-3' href='/register'>Sign up</a>
                      </>
                    )}
                </div>
              
            </div>
          </nav>
        </div>
    )
}

export default Header
