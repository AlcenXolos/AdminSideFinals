import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
   

    return (
        <div>
            <div>
                <h2>Login Page</h2>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleLogin} className="btn btn-primary mt-3">
                    Log In
                </button>
            </div>
            <div className="mt-3">
                <span>Don't have an account? </span>
                <Link to="/RegisterPage" className="btn btn-secondary">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
