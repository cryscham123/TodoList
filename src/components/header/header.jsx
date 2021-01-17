import React from 'react';
import './header.scss';

const Header = ({count}) => {
    return (
        <header className="header">
            <i className="fas fa-leaf header__icon"></i>
            <h2 className="header__title">Habit Tracker</h2>
            <div className="header__count">{count}</div>
        </header>
    );
};

export default Header;