import React from 'react'
import styles from "../Allstyles/main.module.css"
import OptionsLeft from './OptionsLeft'
import RightContent from './RightContent'
const MainPage = () => {
  return (
    <>
    <div className={styles.topDiv}>
   
     <div className={styles.topLeftDiv}>
     <i className="material-icons">menu</i>
       <div className={styles.topLeft1}>
        <img className={styles.smLogo} src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/SM_Supermalls_logo_2022.svg/640px-SM_Supermalls_logo_2022.svg.png" alt="logo"/>
        Swastik Marketing
       </div> 
        <div className={styles.topLeft2}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input  className={styles.topSearchBar} type="text" placeholder="Search"/>

        </div>
       
       
     </div>

     <div className={styles.topRightDiv}>
        <div className={styles.connected}>
            <span className={styles.dot}>.</span>
            Connected 
        </div>
        <div>
            <img className={styles.bellLogo} src='https://cdn-icons-png.flaticon.com/512/5392/5392929.png' alt='queation'/>
        </div>
        <div>
            <img className={styles.bellLogo} src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png" alt="bell"/>
        </div>
        <div>
            <p className={styles.KG}>
                KG
            </p>
        </div>
     </div>
    </div>

    <div className={styles.SecondDiv}>
       <OptionsLeft/>
       <RightContent/>
    </div>
</>
  )
}

export default MainPage