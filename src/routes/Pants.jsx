import styles from '../styles/Shop.module.css'
import pants1 from '../img/BetongPics/pants1.webp'
import pants2 from '../img/BetongPics/pants2.webp'
import pants3 from '../img/BetongPics/pants3.webp'
import pants4 from '../img/BetongPics/pants4.webp'
import pants5 from '../img/BetongPics/pants5.webp'
import pants6 from '../img/BetongPics/pants6.webp'
import sale from '../img/sale-free-download-png-64c76cae393ac.png'

function Pants(){

    return(
        <div className={styles.routedbody}>
            <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
            <div className={styles.sales}>
                <div className={styles.subSales}>
                    <img src={pants1} className={styles.imgfixH}/>
                    <img src={sale} className={styles.sale}/>
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                <span className={styles.textEdit}>11299$</span> - 11099$
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
                    <img src={pants2} className={styles.imgfixW}/>
                    <img src={sale} className={styles.sale}/>
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                <span className={styles.textEdit}>1999$</span> - 1699$
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
                    <img src={pants3} className={styles.imgfixH}/>
                    
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                11499$
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
                    <img src={pants4} className={styles.imgfixH}/>
                    
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
                    <img src={pants5} className={styles.imgfixH}/>
                    
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                11699$
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
                    <img src={pants6} className={styles.imgfixW}/>
                    
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

export default Pants