import React, { useState } from 'react';
import ITask from "../../../interfaces/ITask";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

interface ICompleteButton {
    isCompleted: boolean;
    changeStatus(): void;
}

interface IDescriptionForm {
    isCompleted: boolean;
    description: string;
}

function CompleteButton(props: ICompleteButton) {
    if (!props.isCompleted) {
        // @ts-ignore
        return <FontAwesomeIcon onClick={props.changeStatus} icon={faCircle} />
    }
    else {
        // @ts-ignore
        return <FontAwesomeIcon onClick={props.changeStatus} icon={faCircleSolid}/>
    }
}

function DescriptionForm(props: IDescriptionForm) {

    let [description, setDescription] = useState(props.description);
    let [isActive, setIsActive] = useState(false);

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        changeStatus();
    }

    function changeStatus() {
        setIsActive(!isActive);
    }

    if (!isActive && !props.isCompleted) {
        return (
            <h3 className="task_description" onClick={changeStatus}>{description}</h3>
        )
    }
    else if (isActive && !props.isCompleted) {
        return (
            <form onSubmit={handleSubmit}>
                <input name='description' type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                <button type="submit">Submit form</button>
            </form>
        )
    }
    else {
        return (
            <h3 className="task_description">{description}</h3>
        )
    }
}

export default function TaskComponent(props: ITask) {
    const [isCompleted, setCompleted] = useState(props.isCompleted)

    function changeStatus() {
        setCompleted(!isCompleted);
        console.log(isCompleted)
    }

    return (
        <div className="task">
            <div>
                <DescriptionForm isCompleted={isCompleted} description={props.description}/>
            </div>
            <div>
                <CompleteButton  isCompleted={isCompleted} changeStatus={changeStatus}/>
            </div>
        </div>
    );
}