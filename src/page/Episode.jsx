import React from 'react';
import axios from 'axios';

import style from './Episode.module.scss';
import Card from '../components/Card/Card';
import SelectEpisode from '../components/SelectEpisode/SelectEpisode';

const option = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
];

function Episode() {
  const [result, setResult] = React.useState([]);
  const [episode, setEpisode] = React.useState([]);
  const [id, setId] = React.useState("1");
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
          <SelectEpisode setId={setId} option={option} tab="Episode"/>
        </div>
        <div className={style.card}>
          {result.length > 0 && result.map((obj, index) => <Card {...obj.data} key={index} />)}
        </div>
      </div>
    </>
  );
}

export default Episode;
