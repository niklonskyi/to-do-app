import ITask from "../../../interfaces/ITask";

export default class Task implements ITask {
    description: string;
    isCompleted: boolean;

    constructor(description: string, isCompleted: boolean = false) {
        this.description = description;
        this.isCompleted = isCompleted;
    }

    setComplete() {
        this.isCompleted = !this.isCompleted;
    }

    setDescription(value: string) {
        this.description = value;
    }
}