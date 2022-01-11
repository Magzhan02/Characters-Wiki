import React from 'react';
import style from '../Filter.module.scss';

function Species({ setSpecies }) {
  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'Animal',
    'Robot',
    'Planet',
    'Mythological',
    'Disease',
    'Cronenberg',
    'Poopybutthole',
    'Unknown',
  ];
  const [activeItem, setActiveItem] = React.useState("");

  const updateSpecies = (e) => {
    setSpecies(e.target.textContent);
    setActiveItem(e.target.textContent);
    console.log(e.target.textContent);
  };

  return (
    <div className={style.filterBtn}>
      <h2>Species</h2>
      <ul onClick={(e) => updateSpecies(e)}>
        {species.map((item, index) => (
          <li key={(item, index)} className={activeItem === item ? style.active : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Species;
