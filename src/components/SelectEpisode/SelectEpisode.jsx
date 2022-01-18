import React from 'react';

import style from './SelectEpisode.module.scss';


function SelectEpisode({ setId,option,tab }) {
  return (
    <div className={style.wrapp}>
      <select name="epis" id="ep" onChange={(e) => setId(e.target.value)}>
      {
        option.map((num) =>(
          <option value={num} key={num}>{tab} - {num}</option>
        ))
      }
      </select>
    </div>
  );
}

export default SelectEpisode;
