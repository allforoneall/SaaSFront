import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h2>MOVIECRITIC</h2>
            </div>
            <div className="header-right">
                <button className="header-btn">Add New Movie</button>
                <button className="header-btn">Add New Review</button>
            </div>
        </header>
    );
};

export default Header;
