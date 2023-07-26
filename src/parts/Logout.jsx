import firebase from '../firebase';
import styles from '../styles/Shop.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
  const logout = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log('User logged out successfully');
        toast.success('Successfully logged out!');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <>
      <a className={styles.logButton} onClick={logout}>Sign Out</a>
    </>
  );
};

export default Logout;