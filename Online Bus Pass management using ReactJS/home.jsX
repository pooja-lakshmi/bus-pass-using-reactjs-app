import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bus Pass</h1>
      <nav>
        <Link to="/registration">
          <button>Registration</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
