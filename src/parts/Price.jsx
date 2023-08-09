import styles from '../styles/Shop.module.css';
import { useCart } from '../CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Price(props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const uniqueId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    const itemToAdd = {
      id: uniqueId,
      name: props.name,
      price: props.saleprice,
    };
    addToCart(itemToAdd);
    showToast();
  };

  const showToast = () => {
    toast.success('Item added to cart!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  
  return (
    <div className={styles.subSales}>
      <img src={props.pic} className={styles.imgfixH} />
      <img src={props.salepic} className={styles.sale} />
      <div className={styles.purchasetab}>
        <div className={styles.price}>
          <p className={styles.textAdd}>
            <span className={styles.textEdit}>{props.realprice}</span>
            <span>  {props.saleprice}$</span>
            
          </p>
        </div>
        <div className={styles.addToCart}>
        <button onClick={handleAddToCart} className={styles.textAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Price;
