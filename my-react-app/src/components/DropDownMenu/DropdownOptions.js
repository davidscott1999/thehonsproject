import { useState } from 'react';

function DropDownMenu({ options }) {
  const [dropdown, setDropDown] = useState("Please Select");

  return (
    <select
      role="menu"
      value={dropdown}
      onChange={(e) => {
        setDropDown(e.target.value);
      }}
    >
      <option value="Please select">Please Select</option>

      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}

export { DropDownMenu };
