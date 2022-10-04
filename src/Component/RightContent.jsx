import React from 'react'
import styles from "../Allstyles/rightcontent.module.css"
import Products from './Products'
const RightContent = () => {
  return (
    <div className={styles.secondRightDiv}>
        

       
    <div className={styles.secondRightFirstDiv}>
        <div>
            Products
          </div>
          <div>
            <button className={styles.button}>Add Product</button>
          </div>
    </div>
    <div className={styles.shadow}>
    <div className={styles.secondRightSecondDiv}>
        <div className={styles.secondRightSecondDiv1}>
            <p className={styles.all}>
                All
            </p>
            <p>
                Active
            </p>
            <p>
                Inactive
            </p>
            <p>
                Draft
            </p>
        </div>
       <div className={styles.secondRightSecondDiv2}>
         <div>
            Sort: 
            <select className={styles.date}>
                <option hidden>Date Created</option>
            </select>
         </div>
         <div>
         <i className="material-icons ma">list</i>
         </div>
       </div>
    </div>
    <div className={styles.secondRightThirdDiv}>
    <div className={styles.lowerSearchDiv}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input  className={styles.topSearchBar} type="text" value={"Bournville"}/>
            <i className="material-icons ma">clear</i>
        </div>
       <div className={styles.selectDiv}>
        <select className={styles.date} name="type">
            <option hidden>Type</option>
        </select>
       </div>
       <div className={styles.selectDiv}>
        <select className={styles.date} name="Category">
            <option hidden>Category</option>
        </select>
       </div>
       <div className={styles.selectDiv}>
        <select className={styles.date} name="brands">
            <option hidden>Brands</option>
        </select>
       </div>
       <div className={styles.selectDiv}>
        <select className={styles.date} name="stock">
            <option hidden>Stock Type</option>
        </select>
       </div>
       <div className={styles.selectDiv}>
        <select className={styles.date} name="supplier">
            <option hidden>Supplier</option>
        </select>
       </div>
       <div className={styles.selectDiv}>
        <select className={styles.date} name="tags">
            <option hidden>Tags</option>
        </select>
       </div>
       <div className={styles.selectDiv}>
        <select className={styles.date} name="availibity">
            <option className={styles.option} hidden>Availability</option>
        </select>
       </div>
      
    </div>

   <Products/>
    </div>
</div>

  )
}

export default RightContent