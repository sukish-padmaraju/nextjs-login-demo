'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();

    return (
        <main className="p-8 max-w-4xl mx-auto">
            {/* Welcome Message */}
            <h1 className="text-3xl font-bold mb-2">Welcome Home!</h1>
            <p className="text-gray-600 mb-6">Here's a quick overview of your activity and options.</p>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => router.push('/user/128')}
                    className="bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-600 cursor-pointer"
                >
                    Go to Individual Page
                </button>
                <button
                    onClick={() => router.push('/reports')}
                    className="bg-green-500 text-white p-4 rounded-lg shadow hover:bg-green-600 cursor-pointer"
                >
                    View Reports
                </button>
            </div>

            {/* Recent Activity */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Logged in 5 minutes ago</li>
                    <li>Viewed user 128's profile</li>
                    <li>Updated settings yesterday</li>
                </ul>
            </section>

            {/* Stats Cards */}
            <section className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded shadow text-center cursor-pointer">
                    <p className="text-gray-500">Total Users</p>
                    <h3 className="text-2xl font-bold">1,250</h3>
                </div>
                <div className="bg-white p-4 rounded shadow text-center cursor-pointer">
                    <p className="text-gray-500">Reports Today</p>
                    <h3 className="text-2xl font-bold">42</h3>
                </div>
                <div className="bg-white p-4 rounded shadow text-center cursor-pointer">
                    <p className="text-gray-500">Alerts</p>
                    <h3 className="text-2xl font-bold text-red-600">3</h3>
                </div>
            </section>

            {/* Logout Button */}
            <button
                onClick={() => router.push('/login')}
                className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 cursor-pointer"
            >
                Logout
            </button>
        </main>
    );
}
