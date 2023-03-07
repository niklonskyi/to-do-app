import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import DayComponent from "../components/Main/Day/DayComponent";
import Task from "../components/Main/Task/Task";
import Day from "../components/Main/Day/Day";

test('displays tasks and date', () => {

    const tasks: Task[] = [new Task('Make a breakfast'), new Task('Do groceries')]
    const date: Date = new Date();

    const newDay = new Day(date, tasks);

    render(DayComponent(newDay));

    expect(screen.getByText('Make a breakfast'));
    expect(screen.getByText('Do groceries'));
})