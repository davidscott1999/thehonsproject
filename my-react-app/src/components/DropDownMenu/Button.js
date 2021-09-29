import { useState } from "react";

function DropDownMenu() {
    const [dropdown, setDropDown] = useState('Beginner')

    return (
        <form>
            <h1> This is the value of the useState {dropdown} </h1>
            <select value={dropdown} onChange={(e)=>{setDropDown(e.target.value)}}>
                <option value="Beginner">Beginner</option>
                <option value="Advanced Beginner">Advanced Beginner</option>
                <option value="Proficient">Proficient</option>
                <option value="Expert">Expert</option>
            </select>
        </form>
    )
}