import styles from '../styles/Shop.module.css'
import shoes1 from '../img/BetongPics/shoes1.webp'
import shoes2 from '../img/BetongPics/shoes2.webp'
import shoes3 from '../img/BetongPics/shoes3.webp'
import shoes4 from '../img/BetongPics/shoes4.webp'
import shoes5 from '../img/BetongPics/shoes5.webp'
import shoes6 from '../img/BetongPics/shoes6.webp'
import sale from '../img/sale-free-download-png-64c76cae393ac.png'
import Price from '../parts/Price'
import PriceAlt from '../parts/PriceAlt'

function Shoes(){

    return(
        <div className={styles.routedbody}>
            <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
            <div className={styles.sales}>
                    <Price
                    pic={shoes1}
                    salepic={sale}
                    realprice="1399$"
                    saleprice={1299}
                    id="7"
                    name="shoes1"
                    />
                    <PriceAlt
                    pic={shoes2}
                    saleprice={11699}
                    id="8"
                    name="shoes2"
                    />
            </div>
            <div className={styles.sales}>
                    <Price
                    pic={shoes3}
                    saleprice={2599}
                    id="9"
                    name="shoes3"
                    />
                    <Price
                    pic={shoes4}
                    saleprice={1899}
                    id="10"
                    name="shoes4"
                    />
            </div>
            <div className={styles.sales}>
                    <Price
                    pic={shoes5}
                    saleprice={1699}
                    id="11"
                    name="shoes5"
                    />
                    <Price
                    pic={shoes6}
                    saleprice={3699}
                    id="12"
                    name="shoes6"
                    />
            </div>
        </div>
    )
}

export default Shoes