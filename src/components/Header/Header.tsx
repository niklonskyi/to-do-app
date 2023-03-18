import React from 'react';
import '../../styles/Header.sass';
import CurrentUser from "./CurrentUser";
import {Link} from "react-router-dom";

interface IHeaderProps {
    isLoggedIn: boolean;
}

function Header(props: IHeaderProps) {
    const isLoggedIn = props.isLoggedIn;
    return (
        <div className="Header">
            <div className="logo">
                <Link id='to-do-list-link' to={'/'}>
                    <h1>
                        To-Do-List
                    </h1>
                </Link>
            </div>
            <CurrentUser isLoggedIn={isLoggedIn}/>
        </div>
);
}

export default Header;