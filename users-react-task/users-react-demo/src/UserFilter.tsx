import React from "react";
import { UserStatus } from "./user.models";
import { FilterChangeListener, FilterType } from "./App";

interface UserFilterProps {
    filter: FilterType;
    onFilterChange:FilterChangeListener;
}



export default function UserFilter({filter, onFilterChange}: UserFilterProps) {

    function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
        onFilterChange(event.target.value === '0' ? undefined : parseInt(event.target.value))
    }
    return (
        <select id="TodoSelectBar" value={filter} onChange={handleFilterChange}>
            <option value='0'>ALL</option>
            <option value={UserStatus.Active}>Active</option>
            <option value={UserStatus.Suspended}>Completed</option>
            <option value={UserStatus.Deactivated}>Canceled</option>            
        </select>
    );
}