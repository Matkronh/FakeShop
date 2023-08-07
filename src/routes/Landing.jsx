import styles from '../styles/Shop.module.css';
import hat1 from '../img/BetongPics/hat1.webp';
import hat2 from '../img/BetongPics/hat2.webp';
import shoes1 from '../img/BetongPics/shoes1.webp';
import pants1 from '../img/BetongPics/pants1.webp';
import pants2 from '../img/BetongPics/pants2.webp';
import shirt1 from '../img/BetongPics/shirt1.webp';
import sale from '../img/sale-free-download-png-64c76cae393ac.png';
import Price from '../parts/Price';
import PriceAlt from '../parts/PriceAlt';

function Landing() {
  return (
    <div className={styles.routedbody}>
      <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
      <div className={styles.sales}>
        <Price
          pic={hat1}
          salepic={sale}
          realprice="1889$"
          saleprice={1499}
          id="1"
          name="hat1"
        />

        <Price
          pic={hat2}
          salepic={sale}
          realprice="1599$"
          saleprice={1399}
          id="2"
          name="hat2"
        />
      </div>
      <div className={styles.sales}>
        <Price
          pic={shoes1}
          salepic={sale}
          realprice="1399$"
          saleprice={1299}
          id="7"
          name="shoes1"
        />
        <Price
          pic={pants1}
          salepic={sale}
          realprice="11299$"
          saleprice={11099}
          id="13"
          name="pants1"
        />
      </div>
      <div className={styles.sales}>
        <PriceAlt
          pic={pants2}
          salepic={sale}
          realprice="1999$"
          saleprice={1699}
          id="14"
          name="pants2"
        />
        <PriceAlt
          pic={shirt1}
          salepic={sale}
          realprice="1899$"
          saleprice={1499}
          id="19"
          name="shirt1"
        />
      </div>
    </div>
  );
}

export default Landing;
