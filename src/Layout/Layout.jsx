import { /* Link, */ Outlet } from 'react-router-dom'
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
                <div>
                <div className={styles.navbar}>
                    <Logout/>
                    <p className={styles.welcome}>Welcome, {username}</p>
                    <img className={styles.cart} src={cart}></img>
                </div>
                <div className={styles.header}>
                    <h1 className={styles.headerText}>Louis Betong</h1>
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