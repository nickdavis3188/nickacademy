import React from 'react';
import BigImage from './MyBigImage';
import htmlImg from "../image/logo_html.png"
import cssImg from "../image/logo_css.png"
import nodeImg from "../image/nodejs_logo.png"
import Footer from "../component/Footer"
import "../styles/BodyStyle.css"
import Subscribe from '../component/Subscribe';

function MyBody(){
    return(
        <div >
            <BigImage/>
            <Subscribe/>
            <div className="container">
                <div className="myRow">
                    <div className="myCol">
                       
                            <div className="div2">
                                <img src={htmlImg} alt="logo" /> 
                                <h6 style={{textAlign:"center"}}>HTML5 MAKEUP</h6>    
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestias harum optio praesentium repellat maiores, accusamus vel impedit atque voluptatum at id similique magnam numquam enim odio quasi nostrum minima.</p>
                            </div>
                    
                    </div>
                    <div className="myCol">
                       
                            <div className="div2">
                                <img src={cssImg} alt="logo" /> 
                                <h6  style={{textAlign:"center"}}>CSS STYLING</h6>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestias harum optio praesentium repellat maiores, accusamus vel impedit atque voluptatum at id similique magnam numquam enim odio quasi nostrum minima.</p>
                            </div>
                      
                    </div>
                    <div className="myCol">
                     
                            <div className="div2">
                                <img width="200px" src={nodeImg} alt="logo"  />
                                <h6  style={{textAlign:"center"}}>NODE BACKEND</h6>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est molestias harum optio praesentium repellat maiores, accusamus vel impedit atque voluptatum at id similique magnam numquam enim odio quasi nostrum minima.</p>
                            </div>
                           
                       
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MyBody;