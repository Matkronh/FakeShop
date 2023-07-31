import styles from '../styles/Shop.module.css'
import shoes1 from '../img/BetongPics/shoes1.webp'
import shoes2 from '../img/BetongPics/shoes2.webp'
import shoes3 from '../img/BetongPics/shoes3.webp'
import shoes4 from '../img/BetongPics/shoes4.webp'
import shoes5 from '../img/BetongPics/shoes5.webp'
import shoes6 from '../img/BetongPics/shoes6.webp'
import sale from '../img/sale-free-download-png-64c76cae393ac.png'

function Shoes(){

    return(
        <div className={styles.routedbody}>
            <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
            <div className={styles.sales}>
                <div className={styles.subSales}>
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
                <div className={styles.subSalesAlt}>
                    <img src={shoes2} className={styles.imgfixW}/>

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
            </div>
            <div className={styles.sales}>
                <div className={styles.subSalesAlt}>
                    <img src={shoes3} className={styles.imgfixH}/>
                    
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                2599$
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
                    <img src={shoes4} className={styles.imgfixH}/>
                    
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
                    <img src={shoes5} className={styles.imgfixH}/>
                    
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
                    <img src={shoes6} className={styles.imgfixW}/>
                    
                    <div className={styles.purchasetab}>
                        <div className={styles.price}>
                            <p className={styles.textAdd}>
                                3699$
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

export default Shoes