import React from 'react';
import MyBody from './component/MyBody';
import Nav from './component/Nav';
function Home(){
    return(
        <React.Fragment>
            <Nav/>
            <MyBody/>
        </React.Fragment>
    )
}

export default Home