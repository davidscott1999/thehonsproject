import { useState } from "react";

function DropDownMenu() {
    const [dropdown, setDropDown] = useState('Beginner')

    return (
        <form>
            <h1> You have selected your hillwalking experience at {dropdown} </h1>
            <select value={dropdown} onChange={(e)=>{setDropDown(e.target.value)}}>
                <option value="Beginner">Beginner</option>
                <option value="Advanced Beginner">Advanced Beginner</option>
                <option value="Proficient">Proficient</option>
                <option value="Expert">Expert</option>
            </select>
        </form>
    )
}

export default DropDownMenu