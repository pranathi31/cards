import React from 'react';

function Header() {
    return (
        <React.Fragment>
            <header className='header'>
                <a href='/' className='heading'>YourChallenge</a>
                <ul>
                    <li><a href='/'><u style={underlinecolor}>Product</u></a></li>
                    <li><a href='/'>Download</a></li>
                    <li><a href='/'>Pricing</a></li>
                </ul>
            </header>
        </React.Fragment>
    )
}

export default Header

//header styles in app.css

const underlinecolor = {
    textDecorationColor: 'red',
}