import { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import MediaQuery from 'react-responsive';
import styles from '../styles/Shop.module.css';
import cartimg from '../img/shopping-cart-free-15-svgrepo-com.svg';
import { useCart } from '../CartContext';


function Modal() {
  const [visible, setVisible] = useState(false);
  const { cartItems, getTotalSum, getTotalItems, removeFromCart } = useCart();

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  const handleRemoveClick = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className={styles.cartouter}>
      <img src={cartimg} className={styles.cart} onClick={show} alt="Cart"></img>
      {cartItems.length > 0 && <span className={styles.cartItemCount}>{getTotalItems()}</span>}
      <MediaQuery minWidth={600}>
        <Rodal visible={visible} onClose={hide} animation="rotate" width={580} height={400} showMask={true} closeOnEsc={true}>
        <div className={styles.cartDesign}>
          <h2 className={styles.cartDesignTitle}>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p className={styles.cartDesignEmpty}>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className={styles.cartDesignList}>
                  {item.name} - ${item.price}
                  <button onClick={() => handleRemoveClick(item.id)} className={styles.cartDesignRemoveBtn}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <p className={styles.cartDesignTotalSum}>Total: ${getTotalSum()}</p>
        </div>
        </Rodal>
      </MediaQuery>
    </div>
  );
}

export default Modal;