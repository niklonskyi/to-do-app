import {FormEvent, useState} from "react";
import Task from "../Main/Task/Task";
import Day from "../Main/Day/Day";
import {useNavigate} from "react-router-dom";

export default function AddTaskComponent() {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

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

        const result = listDays.filter((day: Day) => {return new Date(day.date).getTime() === date.getTime()})
        const task = new Task(description);

        if (result.length === 0) {
            const day = new Day(date, [task])
            listDays.push(day);
            localStorage.setItem('days', JSON.stringify(listDays));
        }

        else {
            listDays[listDays.indexOf(result[0])].tasks.push(task);
            localStorage.setItem('days', JSON.stringify(listDays));
        }

        navigate('/');
    }
}