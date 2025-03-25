import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.CabecalhoBackground}></div>
      <img src='/Drone.svg' alt='drone' className={styles.Drone} />
      <img src='/Review.svg' alt='review' className={styles.Review} />
      <img src='/Explicacao.svg' alt='Explição sobre o site' className={styles.explicacao} />
      <img src='/Podium.svg' alt='Podium' className={styles.Podium} />
    </div>
  );
};

export default Home;