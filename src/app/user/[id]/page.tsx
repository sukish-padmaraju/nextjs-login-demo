'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function UserPage() {
    const params = useParams();
    const userId = params?.id;

    const [editMode, setEditMode] = useState(false);
    const [showMessageForm, setShowMessageForm] = useState(false);

    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [role, setRole] = useState('Administrator');
    const [status, setStatus] = useState('Active');
    const [message, setMessage] = useState('');
    const [savedUser, setSavedUser] = useState<{ name: string; email: string } | null>(null);

    const handleSave = () => {
        setEditMode(false);
        setSavedUser({ name, email });
        alert('✅ Profile updated successfully!');
    };

    const handleSendMessage = () => {
        alert(`📩 Message sent to ${email}: ${message}`);
        setMessage('');
        setShowMessageForm(false);
    };

    return (
        <main className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">User Profile</h1>
            <p className="text-gray-600 mb-6">
                Viewing details for user ID: <strong>{userId}</strong>
            </p>

            {/* User Info Section */}
            <section className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold">Name</h2>
                    {editMode ? (
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border w-full mt-1 p-2 rounded"
                        />
                    ) : (
                        <p className="text-gray-700">{name}</p>
                    )}
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold">Email</h2>
                    {editMode ? (
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border w-full mt-1 p-2 rounded"
                        />
                    ) : (
                        <p className="text-gray-700">{email}</p>
                    )}
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold">Role</h2>
                    {editMode ? (
                        <input
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="border w-full mt-1 p-2 rounded"
                        />
                    ) : (
                        <p className="text-gray-700">{role}</p>
                    )}
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold">Status</h2>
                    {editMode ? (
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="border w-full mt-1 p-2 rounded"
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    ) : (
                        <p className={`font-medium ${status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                            {status}
                        </p>
                    )}
                </div>
            </section>

            {/* Activity Timeline */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Logged in at 9:05 AM today</li>
                    <li>Edited settings yesterday</li>
                    <li>Generated report on July 20th</li>
                </ul>
            </section>

            {/* Action Buttons */}
            <section className="flex gap-4 mb-6">
                {editMode ? (
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                        onClick={handleSave}
                    >
                        Save Changes
                    </button>
                ) : (
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                        onClick={() => setEditMode(true)}
                    >
                        Edit Profile
                    </button>
                )}

                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={() => setShowMessageForm(!showMessageForm)}
                >
                    {showMessageForm ? 'Cancel Message' : 'Send Message'}
                </button>
            </section>

            {/* Message Form */}
            {showMessageForm && (
                <section className="bg-white p-4 rounded shadow mb-6">
                    <h2 className="text-lg font-semibold mb-2">Send Message</h2>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        rows={4}
                        className="w-full p-2 border rounded mb-3"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                    >
                        Send
                    </button>
                </section>
            )}

            {/* Existing User Info */}
            {savedUser && (
                <section className="bg-blue-50 p-4 rounded shadow mb-6 text-center">
                    <h2 className="text-lg font-semibold mb-2 text-blue-800">Existing User with Id : {userId}</h2>
                    <p className="text-blue-900 font-medium">Username: {savedUser.name}</p>
                    <p className="text-blue-900 font-medium">Email: {savedUser.email}</p>
                </section>
            )}
        </main>
    );
}