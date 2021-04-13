import React from 'react';
function Subscribe(){
    return(
        <div style={{
            width:"100%",
            height:"70px",
            backgroundColor:"#35424a",
            paddingTop:"8px"
            }}>
                <div className="container pt-sm-3 pt-md-3 pt-lg-3">
                    <div className="row">
                        <div className="col-sm-6" style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                            <h6 className="text-light">Subscribe To Our Newsletter</h6>

                        </div>               
                        <div className="col-sm-6">
                            
                            <div  style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                                <input style={{width:"200px"}} type="email" placeholder="Enter Email" ></input>
                        
                                <button style={{
                                    border:"none",
                                    width:"90px",
                                    height:"26px",
                                    borderRadius:"0 4px 4px 0",
                                    backgroundColor:"#e8491d "

                            }} type="submit" className="text-white">subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Subscribe