import './Limbus.css';

function Limbus() {
  return (
    <div className='Limbus'>
      <p>Limbus</p>
      <div className='coinField'>
        <img src='images/coin.png' className='coin'/>
        <p>1</p>
      </div>
      <button className='simulationButton'>決定</button>
    </div>
  );
}

export default Limbus;
