import React from 'react';
import axios from 'axios';

import Card from '../components/Card/Card';
import SelectEpisode from '../components/SelectEpisode/SelectEpisode';
import style from './Location.module.scss';

const option = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
  119, 120, 121, 122, 123, 124, 125, 126,
];

function Location() {
  const [Location, setLocation] = React.useState('1');
  const [info, setInfo] = React.useState([]);
  const [residents, setResidents] = React.useState([]);
  let api = `https://rickandmortyapi.com/api/location/${Location}`;

  React.useEffect(async () => {
    let { data } = await axios.get(api);
    setInfo(data);

    let res = await Promise.all(
      data.residents.map((r) => {
        return axios.get(r);
      }),
    );
    setResidents(res);
  }, [api]);
  console.log(info);

  return (
    <>
      <div className={style.header}>
        <h2>Location:</h2>
        <h3>Dimension:</h3>
      </div>
      <div className={style.wrapp}>
        <div className={style.select}>
          <SelectEpisode setId={setLocation} option={option} tab="Location" />
        </div>
        <div className={style.card}>
          {residents.length > 0 &&
            residents.map((obj, index) => <Card {...obj.data} key={index} />)}
        </div>
      </div>
    </>
  );
}

export default Location;
