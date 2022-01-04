import React from 'react';
import style from '../Filter.module.scss';

function Gender({ setGender }) {
  const gender = ['female', 'male', 'genderless', 'unknown'];
  const [activeItem, setActiveItem] = React.useState("");
  const updateGender = (e) => {
    setGender(e.target.textContent);
    setActiveItem(e.target.textContent);
    console.log(e.target.textContent);
  };
  return (
    <div className={style.filterBtn}>
      <h2>Gender</h2>
      <ul onClick={(e) => updateGender(e)}>
        {gender.map((item, index) => (
          <li key={(item, index)} className={activeItem === item ? style.active : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gender;
