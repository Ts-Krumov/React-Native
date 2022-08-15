import React from "react";
import { ToDoStatus } from "./todo.model";
import { FilterChangeListener, FilterType } from "./TodoApp";
import "./TodoFilter.css"

interface TodoFilterProps {
    filter: FilterType;
    onFilterChange:FilterChangeListener;
}



export default function TodoFilter({filter, onFilterChange}: TodoFilterProps) {

    function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
        onFilterChange(event.target.value === '0' ? undefined : parseInt(event.target.value))
    }
    return (
        <select id="TodoSelectBar" value={filter} onChange={handleFilterChange}>
            <option value='0'>ALL</option>
            <option value={ToDoStatus.Active}>Active</option>
            <option value={ToDoStatus.Completed}>Completed</option>
            <option value={ToDoStatus.Canceled}>Canceled</option>            
        </select>
    );
}