import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import TaskComponent from "../components/Main/Task/TaskComponent";
import Task from "../components/Main/Task/Task";

test('displays description and status of task', () => {
    const newTask = new Task('Make a breakfast', false);
    render(TaskComponent(newTask));

    expect(screen.getByText('Make a breakfast'));
    expect(screen.getByText('false'));
})