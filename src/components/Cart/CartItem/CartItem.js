import React, { useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import {
   adjustItemQty,
   removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ itemData, adjustItemQty, removeFromCart }) => {

   const [changedQty, setChangedQty] = useState(itemData.qty)

   const onChangeHandler = (e) => {
      setChangedQty(e.target.value);
      adjustItemQty(itemData.id, e.target.value);
   }


   return (
      <div className={styles.cartItem}>
         <img
            className={styles.cartItem__image}
            src={itemData.image}
            alt={itemData.title}
         />
         <div className={styles.cartItem__details}>
            <p className={styles.details__title}>{itemData.title}</p>
            <p className={styles.details__desc}>{itemData.description}</p>
            <p className={styles.details__price}>$ {itemData.price}</p>
         </div>
         <div className={styles.cartItem__actions}>
            <div className={styles.cartItem__qty}>
               <label htmlFor="qty">Qty</label>
               <input
                  min="1"
                  type="number"
                  id="qty"
                  name="qty"
                  value={changedQty}
                  onChange={onChangeHandler}
               />
            </div>
            <button
               onClick={() => removeFromCart(itemData.id)}
               className={styles.actions__deleteItemBtn}
            >
               <img
                  src="https://image.flaticon.com/icons/svg/709/709519.svg"
                  alt=""
               />
            </button>
         </div>
      </div>
   );
};


const mapDispatchToProps = (dispatch) => {
   return {
      adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
   };
};
export default connect(null, mapDispatchToProps)(CartItem);
