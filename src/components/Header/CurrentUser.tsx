import React from 'react';

interface IUserProps {
    isLoggedIn: boolean;
    userName?: String;
    userSurname?: String;
}

function CurrentUser(props: IUserProps) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (
            <div className="current_user">
                <h2>Welcome, {props.userSurname} {props.userName?.charAt(0)}.</h2>
            </div>
        )
    }
    else {
        return (
            <div className="current_user">
                <h2><a href="">Log in</a></h2>
            </div>
        )
    }
}

export default CurrentUser;