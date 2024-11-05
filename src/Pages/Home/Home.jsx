import React from 'react'
import Podium from './Podium.svg'
import Drone from './Drone.svg'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
        
        <img src={Drone} alt='drone' className='drone' />
        
        <img src={Podium} alt='Podium' className='podium' />
    </div>
  )
}

export default Home