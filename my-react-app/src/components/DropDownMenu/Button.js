import { useState } from "react";

function DropDownMenu() {
    const [dropdown, setDropDown] = useState('Please Select')

    return (
        <form>
            <h1> You have selected your hillwalking experience at {dropdown} </h1>
            <select value={dropdown} onChange={(e)=>{setDropDown(e.target.value)}}>
                <option value="Please select">Please Select</option>
                <option value="Beginner">Beginner</option>
                <option value="Advanced Beginner">Advanced Beginner</option>
                <option value="Proficient">Proficient</option>
                <option value="Expert">Expert</option>
            </select>
        </form>
    )
}

export {DropDownMenu}