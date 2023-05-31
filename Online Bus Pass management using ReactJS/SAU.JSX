import { auth } from './firebaseConfig';

// ...

const handleSubmit = async (event) => {
  event.preventDefault();
  
  try {
    await auth.signInWithEmailAndPassword(email, password);
    handleLogin(email, password);
  } catch (error) {
    console.log('Login error:', error);
    // Handle login error
  }
};
