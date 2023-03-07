import React from 'react';
import '../../styles/Main.sass';
import DayComponent from "./Day/DayComponent";
import Day from "./Day/Day";
import {Link} from "react-router-dom";

interface IMainProps {
    days: Day[];
}

function Main(props: IMainProps) {
    const listDays: JSX.Element[] = props.days.map(day => <DayComponent tasks={day.tasks} date={day.date}/>);
    return (
        <div id="Main">
            {listDays}
            <Link id='add-task-link' to={'/add'}>Add a task</Link>
        </div>
    );
}

export default Main;