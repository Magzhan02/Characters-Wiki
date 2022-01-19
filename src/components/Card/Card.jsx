import React from 'react';

import style from './Card.module.scss';

function Card({ name, status, image, location }) {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <img src={image} width={330} height={332} alt="avatar" />
        <div className={style.info}>
          <b>{name}</b>
          <div className={style.local}>
            <div className={style.local}>Location: {location.name}</div>
          </div>
        </div>
        <div className={style.status}>{status}</div>
      </div>
    </div>
  );
}

export default Card;
