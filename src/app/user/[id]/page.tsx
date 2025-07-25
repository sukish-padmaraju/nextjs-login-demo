'use client';

import { useParams } from 'next/navigation';

export default function UserPage() {
    const params = useParams();
    const userId = params?.id;

    return (
        <main className="p-8 max-w-4xl mx-auto">
            {/* Page Header */}
            <h1 className="text-3xl font-bold mb-2">User Profile</h1>
            <p className="text-gray-600 mb-6">Viewing details for user ID: <strong>{userId}</strong></p>

            {/* User Info Section */}
            <section className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded shadow cursor-pointer">
                    <h2 className="text-lg font-semibold">Name</h2>
                    <p className="text-gray-700">John Doe</p>
                </div>
                <div className="bg-white p-4 rounded shadow cursor-pointer">
                    <h2 className="text-lg font-semibold">Email</h2>
                    <p className="text-gray-700">john.doe@example.com</p>
                </div>
                <div className="bg-white p-4 rounded shadow cursor-pointer">
                    <h2 className="text-lg font-semibold">Role</h2>
                    <p className="text-gray-700">Administrator</p>
                </div>
                <div className="bg-white p-4 rounded shadow cursor-pointer">
                    <h2 className="text-lg font-semibold">Status</h2>
                    <p className="text-green-600 font-medium">Active</p>
                </div>
            </section>

            {/* Activity Timeline (mocked) */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Logged in at 9:05 AM today</li>
                    <li>Edited settings yesterday</li>
                    <li>Generated report on July 20th</li>
                </ul>
            </section>

            {/* Action Buttons */}
            <section className="flex gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
                    Edit Profile
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer">
                    Send Message
                </button>
            </section>
        </main>
    );
}
