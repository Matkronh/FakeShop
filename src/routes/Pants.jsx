import styles from '../styles/Shop.module.css'
import pants1 from '../img/BetongPics/pants1.webp'
import pants2 from '../img/BetongPics/pants2.webp'
import pants3 from '../img/BetongPics/pants3.webp'
import pants4 from '../img/BetongPics/pants4.webp'
import pants5 from '../img/BetongPics/pants5.webp'
import pants6 from '../img/BetongPics/pants6.webp'
import sale from '../img/sale-free-download-png-64c76cae393ac.png'
import Price from '../parts/Price'
import PriceAlt from '../parts/PriceAlt'

function Pants(){

    return(
        <div className={styles.routedbody}>
            <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
            <div className={styles.sales}>
                    <Price
                    pic={pants1}
                    salepic={sale}
                    realprice="11299$"
                    saleprice={11099}
                    id="13"
                    name="pants1"
                    />
                    <PriceAlt
                    pic={pants2}
                    salepic={sale}
                    realprice="1999$"
                    saleprice={1699}
                    id="14"
                    name="pants2"
                    />
            </div>
            <div className={styles.sales}>
                    <Price
                    pic={pants3}
                    saleprice={11499}
                    id="15"
                    name="pants3"
                    />
                    <Price
                    pic={pants4}
                    saleprice={1899}
                    id="16"
                    name="pants4"
                    />
            </div>
            <div className={styles.sales}>
                    <Price
                    pic={pants5}
                    saleprice={11699}
                    id="17"
                    name="pants5"
                    />
                    <PriceAlt
                    pic={pants6}
                    saleprice={1699}
                    id="18"
                    name="pants6"
                    />
            </div>
        </div>
    )
}

export default Pants