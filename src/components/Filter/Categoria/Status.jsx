import React from 'react';
import style from '../Filter.module.scss';

function Status({ setStatus }) {
  const status = ['Alive', 'Dead', 'Unknown'];
  const [activeItem, setActiveItem] = React.useState('');
  const updateStatus = (e) => {
    setStatus(e.target.textContent);
    setActiveItem(e.target.textContent);
    console.log(e.target.textContent);
  };
  return (
    <div className={style.filterBtn}>
      <h2>Status</h2>
      <ul onClick={(e) => updateStatus(e)}>
        {status.map((item, index) => (
          <li key={(item, index)} className={activeItem === item ? style.active : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Status;
