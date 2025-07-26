'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Navbar } from '../components/Navbar';

export default function HomePage() {
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);

    const user = {
        name: 'John Admin',
        email: 'john@example.com',
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <>
            <Navbar />
            <main className={`p-8 max-w-6xl mx-auto ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                {/* Page Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold">Welcome Home!</h1>
                        <p className="text-gray-500 dark:text-gray-300">Here's a quick overview of your activity and options.</p>
                    </div>
                    <button
                        onClick={toggleDarkMode}
                        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                        {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>

                {/* Quick Navigation Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <button
                        onClick={() => router.push('/user/123')}
                        className="bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-600 cursor-pointer"
                    >
                        👤 User Profile
                    </button>
                    <button
                        onClick={() => router.push('/reports')}
                        className="bg-green-500 text-white p-4 rounded-lg shadow hover:bg-green-600 cursor-pointer"
                    >
                        📊 View Reports
                    </button>
                    <button
                        onClick={() => router.push('/settings')}
                        className="bg-purple-500 text-white p-4 rounded-lg shadow hover:bg-purple-600 cursor-pointer"
                    >
                        ⚙️ Settings
                    </button>
                    <button
                        onClick={() => router.push('/notifications')}
                        className="bg-yellow-500 text-white p-4 rounded-lg shadow hover:bg-yellow-600 cursor-pointer"
                    >
                        🔔 Notifications
                    </button>
                </div>

                {/* Recent Activity */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">🕒 Recent Activity</h2>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>Logged in 5 minutes ago</li>
                        <li>Viewed user 123's profile</li>
                        <li>Updated settings yesterday</li>
                        <li>Generated system report last week</li>
                    </ul>
                </section>

                {/* Stats Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
                        <p className="text-gray-500 dark:text-gray-400">Total Users</p>
                        <h3 className="text-2xl font-bold">1,250</h3>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
                        <p className="text-gray-500 dark:text-gray-400">Reports Today</p>
                        <h3 className="text-2xl font-bold">42</h3>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
                        <p className="text-gray-500 dark:text-gray-400">Alerts</p>
                        <h3 className="text-2xl font-bold text-red-600">3</h3>
                    </div>
                </section>

                {/* Notifications Preview */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">🔔 Notifications</h2>
                    <ul className="space-y-2">
                        <li className="bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 p-3 rounded">
                            System update scheduled for July 28 at 2:00 AM.
                        </li>
                        <li className="bg-blue-100 dark:bg-blue-900 dark:text-blue-300 p-3 rounded">
                            2 new reports generated this morning.
                        </li>
                        <li className="bg-red-100 dark:bg-red-900 dark:text-red-300 p-3 rounded">
                            1 alert triggered in server logs.
                        </li>
                    </ul>
                </section>

                {/* Mini Profile Card */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">👥 Quick Profile</h2>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex items-center justify-between">
                        <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                        </div>
                        <button
                            onClick={() => router.push('/user/123')}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                        >
                            View
                        </button>
                    </div>
                </section>

                {/* Logout */}
                <button
                    onClick={() => router.push('/login')}
                    className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 cursor-pointer"
                >
                    Logout
                </button>
            </main>
        </>
    );
}
