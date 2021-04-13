import React from 'react';
import "../styles/FooterStyle.css"
import fb from "../image/facebook-f.svg"
import twt from "../image/twitter.svg"
function Footer(){
    return(
        <footer>
            <div className="mainy">
                <div className="container yy">
                    <div className="footerRow">
                        <div className="footerCol">
                            <div>
                                <h3>ABOUT</h3>
                                <p>NickAcademy.netlyfy.app WANTS TO BE SIMPLE it an initiative to help the upcoming programmers with the code. NickAcademy focuses on providing the most efficient code or snippets as the code wants to be simple. we will help programmers build concept in diffrent programming languages that include Python, C#, HTML, CSS, Bootstrap,JavaScript, Visual Besic, SQL </p>
                            </div>
                        </div>
                        <div className="footerCol">
                            <div>
                                <h3>CATEGORIES</h3>
                                <h6>c#</h6>
                                <h6>Ui Degsign</h6>
                                <h6>SQL</h6>
                                <h6>Node-js</h6>
                            </div>
                        </div>
                        <div className="footerCol">
                            <div>
                                <h3>QICK LINK</h3>
                                <p><a href="#">ABOUT</a></p>
                                <p><a href="#">BLOG</a></p>
                                <p><a href="/service">SERVICE</a></p>
                                <p><a href="#">CONTACT</a></p>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="container">
                    <div className="inn">
                        <div className="colR">
                            <div>
                                <p>Copyright &copy;2021 All Rights Reserved By NickAcademy</p>
                            </div>
                        </div>
                        <div className="colR">
                            <div>
                                <span>
                                    <p className="text-white fb"> @Nick davis <img width="30px" src={fb} alt="facebook"/> </p>
                                    <p className="text-white fb"> @Nick davis <img width="30px" src={twt} alt="facebook"/> </p>

                                </span>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer