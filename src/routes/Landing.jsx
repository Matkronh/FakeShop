import styles from '../styles/Shop.module.css'

function Landing(){

    return(
        <div className={styles.routedbody}>
            <p className={styles.shopText}>Welcome to Louis Betong online shop.</p>
            <div className={styles.sales}>
                <div className={styles.subSales}>

                </div>
                <div className={styles.subSalesAlt}>

                </div>
            </div>
            <div className={styles.sales}>
                <div className={styles.subSalesAlt}>

                </div>
                <div className={styles.subSales}>
                    
                </div>
            </div>
            <div className={styles.sales}>
                <div className={styles.subSales}>

                </div>
                <div className={styles.subSalesAlt}>

                </div>
            </div>
        </div>
    )
}

export default Landing