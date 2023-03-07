import IDay from "../../../interfaces/IDay";
import Task from "../Task/Task";

export default class Day implements IDay {
    date: Date;
    tasks: Task[];

    constructor(date: Date, tasks: Task[]) {
        this.date = date;
        this.tasks = tasks;
    }
}