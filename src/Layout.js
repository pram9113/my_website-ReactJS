import React from 'react';
import Header from './Header';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'

class Layout extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <span>
                    <Header />
                    <Main />
                </span>    
            </BrowserRouter>
        ) 
    }
}

export default Layout;

