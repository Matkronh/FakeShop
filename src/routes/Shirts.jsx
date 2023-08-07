import styles from '../styles/Shop.module.css'
import shirt1 from '../img/BetongPics/shirt1.webp'
import shirt2 from '../img/BetongPics/shirt2.webp'
import shirt3 from '../img/BetongPics/shirt3.webp'
import shirt4 from '../img/BetongPics/shirt4.webp'
import shirt5 from '../img/BetongPics/shirt5.webp'
import shirt6 from '../img/BetongPics/shirt6.webp'
import sale from '../img/sale-free-download-png-64c76cae393ac.png'
import Price from '../parts/Price'
import PriceAlt from '../parts/PriceAlt'

function Shirts(){

    return(
        <div className={styles.routedbody}>
            <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
            <div className={styles.sales}>
                    <PriceAlt
                    pic={shirt1}
                    salepic={sale}
                    realprice="1899$"
                    saleprice={1499}
                    id="19"
                    name="shirt1"
                    />
                    <PriceAlt
                    pic={shirt2}
                    saleprice={1699}
                    id="20"
                    name="shirt2"
                    />
            </div>
            <div className={styles.sales}>
                    <Price
                    pic={shirt3}
                    saleprice={1599}
                    id="21"
                    name="shirt3"
                    />
                    <PriceAlt
                    pic={shirt4}
                    saleprice={1899}
                    id="22"
                    name="shirt4"
                    />
            </div>
            <div className={styles.sales}>
                    <Price
                    pic={shirt5}
                    saleprice={1699}
                    id="23"
                    name="shirt5"
                    />
                    <PriceAlt
                    pic={shirt6}
                    saleprice={1699}
                    id="24"
                    name="shirt6"
                    />
            </div>
        </div>
    )
}

export default Shirts