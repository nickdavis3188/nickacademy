import React from 'react';
import "../styles/Nav.css"
function Nav(){
  
      
    return(
        <div>
             <header className="large">
            <div className="container">
                <div className="brand"><h1><span>Nick</span>Academy</h1></div>
                <nav>
                    <ul>
                        <li><a className="s1 active2" href="/">Home</a></li>
                        <li><a className="ss" href="/service">Service</a></li>
                        <li><a className="s3" href="#">Blog</a></li>
                        <li><a className="s4" href="#">About</a></li>
                        <li><a className="s5" href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <header className="small">
            <div className="container">
                <div className="brand"><h1><span>Nick</span>Academy</h1></div>
                <nav>
                    <ul>
                        <li><a className="s1 active2" href="/">Home</a></li>
                        <li><a className="ss" href="/service">Service</a></li>
                        <li><a className="s3" href="#">Blog</a></li>
                        <li><a className="s4" href="#">About</a></li>
                        <li><a className="s5" href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </div>
       
    )
}


export default Nav;