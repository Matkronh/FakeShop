import { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import MediaQuery from 'react-responsive';
import styles from '../styles/Shop.module.css';
import cartimg from '../img/shopping-cart-free-15-svgrepo-com.svg';
import { useCart } from '../CartContext';


function Modal() {
  const [visible, setVisible] = useState(false);
  const { cartItems, getTotalSum, getTotalItems } = useCart();

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div className={styles.cartouter}>
      <img src={cartimg} className={styles.cart} onClick={show} alt="Cart"></img>
      {cartItems.length > 0 && <span className={styles.cartItemCount}>{getTotalItems()}</span>}
      <MediaQuery minWidth={600}>
        <Rodal visible={visible} onClose={hide} animation="rotate" width={580} height={400} showMask={true} closeOnEsc={true}>
        <div>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          )}
          <p>Total: ${getTotalSum()}</p>
        </div>
        </Rodal>
      </MediaQuery>
    </div>
  );
}

export default Modal;