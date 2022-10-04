import React from 'react'
import styles from "../Allstyles/leftoption.module.css"
const OptionsLeft = () => {
  return (
    <div className={styles.secondLeftDiv}>
       <div className={styles.optiondiv}>
       <i className="material-icons">home</i>
        Overview
       </div>
       <div className={styles.optiondiv}>
       <i className="material-icons">local_grocery_store</i>
        Sales
       </div>
       <div className={styles.optiondiv}>
       <i className="material-icons">layers</i>
       
        Purchase
       </div>
       <div className={styles.optiondiv1}>
       
       <i className="material-icons">input</i>
        Inventory
       </div>
       <div className={styles.optiondiv}>
       <i className="material-icons">keyboard_voice</i>
       Marketing
       </div>
       <div className={styles.optiondiv}>
       <i className="material-icons">equalizer</i>
       
        Analytics
       </div>
       <div className={styles.optiondiv}>
       
       <i className="material-icons">people</i>
        Staff
       </div>
    </div>
  )
}

export default OptionsLeft