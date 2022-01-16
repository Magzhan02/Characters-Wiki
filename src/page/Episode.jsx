import React from 'react';
import axios from 'axios';

import style from './Episode.module.scss';
import Card from '../components/Card/Card';
import SelectEpisode from '../components/SelectEpisode/SelectEpisode';

function Episode() {
  const [result, setResult] = React.useState([]);
  const [episode, setEpisode] = React.useState([]);
  const [char, setChar] = React.useState([]);
  const [id, setId] = React.useState('1');
  let { air_date, name } = episode;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  React.useEffect(async () => {
    let { data } = await axios.get(api);
    setEpisode(data);
    let char = await Promise.all(
      data.characters.map((c) => {
        return axios.get(c);
      }),
    );
    setResult(char);
  }, [api]);
  console.log(episode);
  return (
    <>
      <div className={style.header}>
        <h2>Episode name: {name}</h2>
        <h3>Air data: {air_date}</h3>
      </div>
      <div className={style.wrapp}>
        <div className={style.select}>
          <SelectEpisode setId={setId}/>
        </div>
        <div className={style.card}>
          {result.length > 0 && result.map((obj, index) => <Card {...obj.data} key={index} />)}
        </div>
      </div>
    </>
  );
}

export default Episode;
