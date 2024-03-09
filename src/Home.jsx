import './Home.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const transitionLimbus = () => {
    window.location.href = '/Limbus'
  }

  const transitionChat = () => {
    window.location.href = '/Chat'
  }

  return (
    <div className='Home'>
      <div className='buttonField'>
        <img className='imgButton' src='https://placehold.jp/3f9e00/ffffff/90x90.png?text=dummy' onClick={transitionLimbus}/>
        <img className='imgButton' src='https://placehold.jp/3f9e00/ffffff/90x90.png?text=dummy' onClick={transitionChat}/>
        <img className='imgButton' src='https://placehold.jp/3f9e00/ffffff/90x90.png?text=dummy'/>
        <img className='imgButton' src='https://placehold.jp/3f9e00/ffffff/90x90.png?text=dummy'/>
        <img className='imgButton' src='https://placehold.jp/3f9e00/ffffff/90x90.png?text=dummy'/>
        <img className='imgButton' src='https://placehold.jp/3f9e00/ffffff/90x90.png?text=dummy'/>
      </div>
    </div>
  );
}

export default Home;
