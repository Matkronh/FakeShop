import styles from '../styles/Shop.module.css'
import hat1 from '../img/BetongPics/hat1.webp'
import hat2 from '../img/BetongPics/hat2.webp'
import hat3 from '../img/BetongPics/hat3.webp'
import hat4 from '../img/BetongPics/hat4.webp'
import hat5 from '../img/BetongPics/hat5.webp'
import hat6 from '../img/BetongPics/hat6.webp'
import sale from '../img/sale-free-download-png-64c76cae393ac.png'

function Hats(){

    return(
        <div className={styles.routedbody}>
            <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
            <div className={styles.sales}>
                <div className={styles.subSales}>
                    <img src={hat1} className={styles.imgfixH}/>
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
                    <img src={hat2} className={styles.imgfixH}/>
                    <img src={sale} className={styles.sale}/>
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                <span className={styles.textEdit}>1599$</span> - 1399$
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
                    <img src={hat3} className={styles.imgfixH}/>
                    
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
                    <img src={hat4} className={styles.imgfixH}/>
                    
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
                    <img src={hat5} className={styles.imgfixW}/>
                    
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
                    <img src={hat6} className={styles.imgfixW}/>
                    
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
            </div>
        </div>
    )
}

export default Hats