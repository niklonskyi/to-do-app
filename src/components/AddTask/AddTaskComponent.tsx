import {FormEvent, useState} from "react";
import Task from "../Main/Task/Task";
import Day from "../Main/Day/Day";

export default function AddTaskComponent() {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());

    return(
        <div id='addTask' className={'container'}>
            <form action="" onSubmit = {submitForm}>
                <input type="text" required onChange={(e) => {
                    setDescription(e.target.value)
                }}/>
                <input type="date" required onChange={(e) => {
                    setDate(new Date(e.target.value))
                }}/>
                <input type="submit"/>
            </form>
        </div>
    )

    function submitForm(e: FormEvent) {
        e.preventDefault();
        const listDays = JSON.parse(localStorage.getItem('days') || '[]');

        const result = listDays.filter((day: Day) => day.date === date)
        const task = new Task(description);

        if (result.length === 0) {
            const day = new Day(date, [task])

            listDays.push(day);
            localStorage.setItem('days', JSON.stringify(listDays));
        }

        else {
            result.tasks.push(task);
            listDays.push(result);
            localStorage.setItem('days', JSON.stringify(listDays));
        }

    }
}