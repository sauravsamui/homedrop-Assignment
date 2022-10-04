import React from 'react'
import styles from "../Allstyles/products.module.css"
import data from "../db.json"
import Showproduct from './Showproduct'
const Products = () => {
  
  return (
    <div className={styles.productsMainDiv} >
       {
        data.data.map((el,ind)=>(
          <Showproduct key={ind} el= {el}/>
        ))
       }
    </div>
  )
}

export default Products