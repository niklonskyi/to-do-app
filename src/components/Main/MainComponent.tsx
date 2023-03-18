import React, {useState} from 'react';
import '../../styles/Main.sass';
import DayComponent from "./Day/DayComponent";
import Day from "./Day/Day";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";

function MainComponent() {
    const [days, setDays] = useState<Day[]>(() => {
        const storedValues = localStorage.getItem("days");
        return storedValues ? JSON.parse(storedValues) : [];
    });

    let listDays: JSX.Element[] = [];
    listDays = days.map((day: Day) => <DayComponent tasks={day.tasks} date={day.date}/>);

    return (
        <div id="main" className={'container'}>
            {listDays}
            <Link id='add-task-link' to={'/add'}><FontAwesomeIcon icon={faCirclePlus} size={'3x'} /></Link>
        </div>
    );
}

export default MainComponent;