import { useState } from 'react';
import "./DropDown.scss";

function DropDown({onSelect,data,currentType}) {
  const [selectedOption, setSelectedOption] = useState(currentType);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value)
  };

  return (
    <div className="dropdown">
      <select value={selectedOption} onChange={handleOptionChange}>
        {data && data.map((item,index)=><option value={item} key={index}>{item}</option>)}
      </select>
    </div>
  );
}

export default DropDown;