import firebase from '../firebase';
import  styles from '../styles/Shop.module.css'
import storeUsername from '../userUtils'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const loginWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
  
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          const username = user.displayName;
  
          storeUsername(username);
  
            toast.success('Successfully logged in!');
            console.log('Logged in user:', user);            
        })
        .catch((error) => {
            console.error('Error logging in:', error);
          });
    };
  
    return (
      <>
        <a className={styles.logButton} onClick={loginWithGoogle}>Sign In</a>
      </>
    );
  };
  
  export default Login;