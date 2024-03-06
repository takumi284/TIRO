import './Limbus.css';
import React, { useState } from 'react';

const Coin = (props) => {
  return (
    <div className={props.animeation}>
      <img src='images/coin.png' className='coinImage'/>
      <p>{props.coinPower}</p>
    </div>
  );
}

function Limbus() {
  const [animate, setAnimate] = useState(false);

  const rotateCoin = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false); // アニメーションが終了したら状態をリセット
    }, 2000); // 1秒後にリセット
  };
  return (
    <div className='Limbus'>
      <p>Limbus</p>
      <Coin coinPower="1" animeation={animate ? 'coin rotation' : 'coin'}/>
      <button className='simulationButton' onClick={rotateCoin}>決定</button>
    </div>
  );
}

export default Limbus;
