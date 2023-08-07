import styles from '../styles/Shop.module.css'
import hat1 from '../img/BetongPics/hat1.webp'
import hat2 from '../img/BetongPics/hat2.webp'
import hat3 from '../img/BetongPics/hat3.webp'
import hat4 from '../img/BetongPics/hat4.webp'
import hat5 from '../img/BetongPics/hat5.webp'
import hat6 from '../img/BetongPics/hat6.webp'
import sale from '../img/sale-free-download-png-64c76cae393ac.png'
import Price from '../parts/Price.jsx'

function Hats(){

    return(
        <div className={styles.routedbody}>
            <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
            <div className={styles.sales}>
                    <Price
                    pic={hat2}
                    salepic={sale}
                    realprice="1899$"
                    saleprice={1499}
                    id="2"
                    name="hat2"
                    />
                    <Price
                    pic={hat1}
                    salepic={sale}
                    realprice="1599$"
                    saleprice={1399}
                    id="1"
                    name="hat1"
                    />
            </div>
            <div className={styles.sales}>
                    <Price
                    pic={hat3}
                    saleprice={2499}
                    id="3"
                    name="hat3"
                    />
                    <Price
                    pic={hat4}
                    saleprice={11499}
                    id="4"
                    name="hat4"
                    />                    
            </div>
            <div className={styles.sales}>
                    <Price
                    pic={hat5}
                    saleprice={1699}
                    id="5"
                    name="hat5"
                    />
                    <Price
                    pic={hat6}
                    saleprice={11499}
                    id="6"
                    name="hat6"
                    />
                </div>
            </div>
    )
}

export default Hats