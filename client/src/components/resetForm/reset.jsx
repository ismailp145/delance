import React, { useState } from 'react';

const ResetForm = () => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        // TODO: Implement reset logic here
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleReset}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Reset</button>
            </form>
        </div>
    );
};

export default ResetForm;