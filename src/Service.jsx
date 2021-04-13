import React from 'react';
import Nav from './component/Nav';
import Subscribe from './component/Subscribe';
import Footer from "./component/Footer"
import "./styles/BodyStyle.css"
import "./styles/Service.css"
function Service(){
    return(
        <React.Fragment>
            <Nav/>
            <Subscribe/>
            <section>
                <div className="container">
                    <div className="myRow">

                        <div className="myCol">
                        <h6 className="title">Service</h6>

                            <ul>
                                <li>
                                    <div className="container">
                                        <h6>Website Design</h6>
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa repellat quia nobis soluta, ea quas molestiae officia commodi animi vitae quasi, fugiat, deserunt atque</p>
                                       <p>pricing $1,00 - $3,00</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="container">
                                        <h6>Website Maintenance</h6>
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa repellat quia nobis soluta, ea quas molestiae officia commodi animi vitae quasi, fugiat, deserunt atque</p>
                                       <p>pricing $1,00 - $3,00</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="container">
                                        <h6>Website Hosting</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore culpa repellat quia nobis soluta, ea quas molestiae officia commodi animi vitae quasi, fugiat, deserunt atque</p>
                                        <p>pricing $1,00 - $3,00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="myCol ttt">
                            <div className="container tt">
                                <div className="sForm">
                                    <div className="container">
                                    <div className="cont">
                                        <div className="myCont55">
                                            <h5 className="text-light">Get A Qote</h5>
                                            <label className="text-white" htmlFor="name">Name</label>
                                            <input type="text" id="name" placeholder="Name"/>

                                            <label className="text-white" htmlFor="email">Email</label>
                                            <input id="email" type="email" placeholder="Email"/>

                                            <label className="text-white" htmlFor="massege">Massege</label>
                                            <textarea id="massage" cols="30" rows="2" placeholder="Message"></textarea>
                                        </div>
                                     
                                    </div>                          
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Service