import styles from '../styles/Shop.module.css'
import hat1 from '../img/BetongPics/hat1.webp'
import hat2 from '../img/BetongPics/hat2.webp'
import shoes1 from '../img/BetongPics/shoes1.webp'
import pants1 from '../img/BetongPics/pants1.webp'
import pants2 from '../img/BetongPics/pants2.webp'
import shirt1 from '../img/BetongPics/shirt1.webp'
import sale from '../img/sale-free-download-png-64c76cae393ac.png'

function Landing(){

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
                    <img src={shoes1} className={styles.imgfixH}/>
                    <img src={sale} className={styles.sale}/>
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                <span className={styles.textEdit}>1399$</span> - 1299$
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
            </div>
            <div className={styles.sales}>
                <div className={styles.subSales}>
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
                <div className={styles.subSalesAlt}>
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
            </div>
        </div>
    )
}

export default Landing