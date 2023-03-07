import {ReactElement} from "react";
import TaskComponent from "../Task/TaskComponent";
import IDay from "../../../interfaces/IDay";

export default function DayComponent(props: IDay) {
    const tasks: ReactElement[] = props.tasks.map((task) => <TaskComponent description={task.description}
                                                                         isCompleted={task.isCompleted}/>)

    if (tasks.length !== 0) {
        return (
            <div>
                <h2>{props.date.toDateString()}</h2>
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