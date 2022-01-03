import React from 'react';

import style from './Search.module.scss';

function Search() {
  const [search, setSearch] = React.useState('');

  return (
    <div className={style.wrapper}>
      <h1>Characters</h1>
      <form className={style.search}>
        <input
          type="text"
          placeholder="Character search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
