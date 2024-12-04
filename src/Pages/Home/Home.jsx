import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
    <div className={styles.Cabecalho}>
        <img src='/Drone.svg' alt='drone' className={styles.Drone} />
        <img src='/Review.svg' alt='review' className={styles.Review} />
    </div>
    <div>
    <img src='/Explicacao.svg' alt='Explição sobre o site' className={styles.explicacao} />
    </div>
    <div>

    </div>
    </>
  )
}

export default Home