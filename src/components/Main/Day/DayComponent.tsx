import {ReactElement} from "react";
import TaskComponent from "../Task/TaskComponent";
import IDay from "../../../interfaces/IDay";

export default function DayComponent(props: IDay) {
    const tasks: ReactElement[] = props.tasks.map((task, index) => <TaskComponent description={task.description}
                                                                         isCompleted={task.isCompleted}
                                                                            index={index}/>)
    if (tasks.length !== 0) {
        return (
            <div>
                <CurrentDate date={props.date.toString()}></CurrentDate>
                {tasks}
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

function CurrentDate(props: {date: string}) {
    const date = new Date(props.date);
    return (
        <div className={'currentDate'}>
            <div className={'left'}>
                <div className={'numericDay'}>
                    <h1>{date.getDate()}</h1>
                </div>
            </div>
            <div className={'right'}>
                <div className={'textDay'}>
                    {new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date)}
                </div>
                <div className={'month'}>
                    {new Intl.DateTimeFormat("en-US", {month: "short"}).format(date)}, {date.getFullYear()}
                </div>
            </div>
        </div>
    )
}