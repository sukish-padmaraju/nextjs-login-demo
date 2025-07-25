'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            router.push('/home');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <main className="p-8 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin}>
                <input className="border p-2 mb-4 w-full" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input className="border p-2 mb-4 w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="bg-blue-600 text-white px-4 py-2 cursor-pointer" type="submit">Login</button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </main>
    );
}
