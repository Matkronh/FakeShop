import styles from '../styles/Shop.module.css'
import shirt1 from '../img/BetongPics/shirt1.webp'
import shirt2 from '../img/BetongPics/shirt2.webp'
import shirt3 from '../img/BetongPics/shirt3.webp'
import shirt4 from '../img/BetongPics/shirt4.webp'
import shirt5 from '../img/BetongPics/shirt5.webp'
import shirt6 from '../img/BetongPics/shirt6.webp'
import sale from '../img/sale-free-download-png-64c76cae393ac.png'

function Shirts(){

    return(
        <div className={styles.routedbody}>
            <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
            <div className={styles.sales}>
                <div className={styles.subSales}>
                    <img src={shirt1} className={styles.imgfixW}/>
                    <img src={sale} className={styles.sale}/>
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                <span className={styles.textEdit}>1899$</span> - 1499$
                            </p>
                        </div>
                        <div className={styles.addToCart}>
                            <p className={styles.textAdd}>
                                Add to cart
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.subSalesAlt}>
                    <img src={shirt2} className={styles.imgfixW}/>

                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                1699$
                            </p>
                        </div>
                        <div className={styles.addToCart}>
                            <p className={styles.textAdd}>
                                Add to cart
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sales}>
                <div className={styles.subSalesAlt}>
                    <img src={shirt3} className={styles.imgfixH}/>
                    
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                1599$
                            </p>
                        </div>
                        <div className={styles.addToCart}>
                            <p className={styles.textAdd}>
                                Add to cart
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.subSales}>
                    <img src={shirt4} className={styles.imgfixW}/>
                    
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                1899$
                            </p>
                        </div>
                        <div className={styles.addToCart}>
                            <p className={styles.textAdd}>
                                Add to cart
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sales}>
                <div className={styles.subSales}>
                    <img src={shirt5} className={styles.imgfixH}/>
                    
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                1699$
                            </p>
                        </div>
                        <div className={styles.addToCart}>
                            <p className={styles.textAdd}>
                                Add to cart
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.subSalesAlt}>
                    <img src={shirt6} className={styles.imgfixH}/>
                    
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                1699$
                            </p>
                        </div>
                        <div className={styles.addToCart}>
                            <p className={styles.textAdd}>
                                Add to cart
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shirts