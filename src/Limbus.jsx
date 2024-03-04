import './Limbus.css';

const Coin = (props) => {
  return (
    <div className='coin'>
      <img src='images/coin.png' className='coinImage'/>
      <p>{props.coinPower}</p>
    </div>
  );
}

function Limbus() {
  return (
    <div className='Limbus'>
      <p>Limbus</p>
      <Coin coinPower="1"/>
      <button className='simulationButton'>決定</button>
    </div>
  );
}

export default Limbus;
