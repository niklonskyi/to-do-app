import Task from "../components/Main/Task/Task";

export default interface IDay {
    tasks: Task[];
    date: Date;
    // addTask(newTask: Task): void;
    // deleteTask(task: Task): void;
}