'use client';

import React, { useState } from 'react';

export default function SettingsPage() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [frequency, setFrequency] = useState('Immediate');
    const [privacy, setPrivacy] = useState('public');
    const [timezone, setTimezone] = useState('UTC');
    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <main className="p-8 max-w-4xl mx-auto bg-gray-50 min-h-screen rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Settings</h1>

            {/* Profile Section */}
            <section className="mb-10 bg-white p-6 rounded-lg shadow flex flex-col gap-3">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Profile</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="flex-1 mb-2 p-2 border rounded focus:outline-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 mb-2 p-2 border rounded focus:outline-blue-400"
                    />
                </div>
                <button className="self-start text-blue-600 underline hover:text-blue-800 transition">Change Password</button>
            </section>

            {/* Preferences */}
            <section className="mb-10 bg-white p-6 rounded-lg shadow flex flex-col gap-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Preferences</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex-1 flex flex-col">
                        <span className="mb-1">Language:</span>
                        <select
                            className="p-2 border rounded focus:outline-blue-400"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                        </select>
                    </label>
                    <label className="flex-1 flex items-center gap-2 pt-4 md:pt-4">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            className="accent-blue-600"
                        />
                        <span className="text-lg font-medium">Enable Dark Mode</span>
                    </label>
                    <label className="flex-1 flex flex-col">
                        <span className="mb-1">Timezone:</span>
                        <select
                            className="p-2 border rounded focus:outline-blue-400"
                            value={timezone}
                            onChange={(e) => setTimezone(e.target.value)}
                        >
                            <option value="UTC">UTC</option>
                            <option value="America/New_York">America/New_York</option>
                            <option value="Europe/London">Europe/London</option>
                            <option value="Asia/Kolkata">Asia/Kolkata</option>
                        </select>
                    </label>
                </div>
            </section>

            {/* Notification Preferences */}
            <section className="mb-10 bg-white p-6 rounded-lg shadow flex flex-col gap-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Notification Preferences</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex-1 flex items-center gap-2 pt-4 md:pt-4">
                        <input
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={() => setEmailNotifications(!emailNotifications)}
                            className="accent-blue-600"
                        />
                        <span className="text-lg font-medium">Email Notifications</span>
                    </label>
                    <label className="flex-1 flex items-center gap-2 pt-4 md:pt-4">
                        <input
                            type="checkbox"
                            checked={pushNotifications}
                            onChange={() => setPushNotifications(!pushNotifications)}
                            className="accent-blue-600"
                        />
                        <span className="text-lg font-medium">Push Notifications</span>
                    </label>
                    <label className="flex-1 flex flex-col">
                        <span className="mb-1">Frequency:</span>
                        <select
                            className="p-2 border rounded focus:outline-blue-400"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                        >
                            <option>Immediate</option>
                            <option>Hourly</option>
                            <option>Daily</option>
                        </select>
                    </label>
                </div>
            </section>

            {/* Privacy Settings */}
            <section className="mb-10 bg-white p-6 rounded-lg shadow flex flex-col gap-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Privacy</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex-1 flex flex-col">
                        <span className="mb-1">Profile Visibility:</span>
                        <select
                            className="p-2 border rounded focus:outline-blue-400"
                            value={privacy}
                            onChange={(e) => setPrivacy(e.target.value)}
                        >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="friends">Friends Only</option>
                        </select>
                    </label>
                    <label className="flex-1 flex items-center gap-3 pt-4 md:pt-4">
                        <input
                            type="checkbox"
                            checked={twoFactor}
                            onChange={() => setTwoFactor(!twoFactor)}
                            className="accent-blue-600 w-6 h-6"
                            style={{ minWidth: '1.5rem', minHeight: '1.5rem' }}
                        />
                        <span className="text-lg font-medium">Enable Two-Factor Authentication</span>
                    </label>
                </div>
            </section>

            <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold cursor-pointer">
                    Save Changes
                </button>
            </div>
        </main>
    );
}