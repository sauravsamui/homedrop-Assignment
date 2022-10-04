import React from 'react'
import styles from "../Allstyles/products.module.css";

const Showproduct = ({el}) => {
   
  return (


    <div className={styles.productDiv}>
        <img className={styles.productImg} src={el.image} alt='img'/>
        <div className={styles.detailsDiv}>
            <div className={styles.name}>
            <h5>
             {el.name}
            </h5>

            <i className="material-icons ma">more_vert</i>
            </div>
            
            <p className={styles.details}>
                {el.detail}
            </p>
            <p><span className={styles.stiked}>{`₹${el.striked}`}</span>{` ₹${el.price}`}</p>
            <p style={{color:el.stock=="out of Stock"?"red":el.stock<56?"orange":"cyan"}}>{el.stock=="out of Stock"?"out of Stock":el.stock<56?`Low-Stock: ${el.stock}`:`In Stock: ${el.stock}`}</p>
        </div>
    </div>
  )
}

export default Showproduct