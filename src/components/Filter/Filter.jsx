import React from 'react';
import Gender from './Categoria/Gender';
import Species from './Categoria/Species';
import Status from './Categoria/Status';

import style from "./Filter.module.scss"

function Filter({ setSpecies, setGender, setStatus }) {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>Filters</h1>
        <span>Clear filters</span>
      </div>
      <Gender setGender={setGender} />
      <Species setSpecies={setSpecies} />
      <Status setStatus={setStatus} />
    </div>
  );
}

export default Filter;
