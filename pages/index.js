import { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDtn0B92LIPMndHp_LeisQ17mN3bXIYssU",

  authDomain: "pelagic-talent-338715.firebaseapp.com",

  projectId: "pelagic-talent-338715",

  storageBucket: "pelagic-talent-338715.appspot.com",

  messagingSenderId: "319041435455",

  appId: "1:319041435455:web:1dc89b9fb3df4c4a0e858a",

  measurementId: "G-QR7HD1G6Z5"
};
firebase.initializeApp(firebaseConfig);


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign up</h2>
      {error && <div>{error}</div>}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignUp;
