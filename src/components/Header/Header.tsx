import React from 'react';
import '../../styles/Header.sass';
import CurrentUser from "./CurrentUser";

interface IHeaderProps {
    isLoggedIn: boolean;
}

function Header(props: IHeaderProps) {
    const isLoggedIn = props.isLoggedIn;
    return (
        <div className="Header">
            <div className="logo">
                <h1>
                    To-Do-List
                </h1>
            </div>
            <CurrentUser isLoggedIn={isLoggedIn}/>
        </div>
);
}

export default Header;