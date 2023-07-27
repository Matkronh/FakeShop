import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import styles from '../styles/Shop.module.css'
import Login from '../parts/Login';
import Logout from '../parts/Logout';
import cart from '../img/shopping-cart-free-15-svgrepo-com.svg'

function Layout() {

        const [user, setUser] = useState(null);
    
        useEffect(() => {
            const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
              setUser(user);
            });
        
            return () => unsubscribe();
          }, []);

          const username = localStorage.getItem('username');
    
        return(

            <div>
                {user ? 
                <div className={styles.fullBody}>
                <div className={styles.navbar}>
                    <Logout/>
                    <p className={styles.welcome}>Welcome, {username}</p>
                    <img className={styles.cart} src={cart}></img>
                </div>
                <div className={styles.header}>
                    <Link className={styles.headerText} to='/fakeshop/'>Louis Betong</Link>
                </div>

                <div className={styles.routebar}>
                    <div className={styles.subroutebar1}>
                        <div className={styles.routerposition}>
                            <div className={styles.subrouterposition}>
                                <Link className={styles.routerText} to='/fakeshop/hats'>Hats</Link>
                            </div>
                        </div>
                        <div className={styles.routerposition}>
                            <div className={styles.subrouterposition}>
                                <Link className={styles.routerText} to='/fakeshop/shirts'>Shirts</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subroutebar2}>
                        <div className={styles.routerposition}>
                            <div className={styles.subrouterposition}>
                                <Link className={styles.routerText} to='/fakeshop/pants'>Pants</Link>
                            </div>
                        </div>
                        <div className={styles.routerposition}>
                            <div className={styles.subrouterposition}>
                                <Link className={styles.routerText} to='/fakeshop/shoes'>Shoes</Link>
                            </div>
                        </div>
                    </div>

                </div>
    
                <Outlet/>

                </div>
                :
                <div>
                <div className={styles.navbar}>
                    <Login/>
                </div>
                <div className={styles.header}>
                    <h1 className={styles.headerText}>Louis Betong</h1>
                </div>
    
                <Outlet/>
    
                </div>
            }
            </div>
        )
    }
    
    export default Layout