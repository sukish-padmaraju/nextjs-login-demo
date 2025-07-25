'use client';

import React from 'react';
import ActivityGraph from '../components/ActivityGraph';

export default function ReportsPage() {
    return (
        <main className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Reports Dashboard</h1>
            <p className="text-gray-600 mb-6">Here is an overview of your recent system and user activity.</p>

            {/* Overview Cards */}
            <section className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded shadow text-center cursor-pointer">
                    <p className="text-gray-500">Reports Generated</p>
                    <h3 className="text-2xl font-bold">180</h3>
                </div>
                <div className="bg-white p-4 rounded shadow text-center cursor-pointer">
                    <p className="text-gray-500">Users Active Today</p>
                    <h3 className="text-2xl font-bold">75</h3>
                </div>
                <div className="bg-white p-4 rounded shadow text-center cursor-pointer">
                    <p className="text-gray-500">Pending Alerts</p>
                    <h3 className="text-2xl font-bold text-red-500">12</h3>
                </div>
            </section>

            {/* Filter/Search */}
            <section className="mb-4">
                <input
                    type="text"
                    placeholder="Search reports..."
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </section>

            {/* Recent Reports Table */}
            <section className="overflow-x-auto">
                <h2 className="text-xl font-semibold mb-2">Recent Reports</h2>
                <table className="min-w-full bg-white border rounded shadow">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3 border">Report ID</th>
                            <th className="p-3 border">Title</th>
                            <th className="p-3 border">Date</th>
                            <th className="p-3 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border">RPT-001</td>
                            <td className="p-3 border">User Login Summary</td>
                            <td className="p-3 border">2025-07-24</td>
                            <td className="p-3 border text-green-600">Completed</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">RPT-002</td>
                            <td className="p-3 border">Weekly Error Logs</td>
                            <td className="p-3 border">2025-07-23</td>
                            <td className="p-3 border text-yellow-500">Pending</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">RPT-003</td>
                            <td className="p-3 border">Monthly Activity</td>
                            <td className="p-3 border">2025-07-20</td>
                            <td className="p-3 border text-green-600">Completed</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Placeholder for Chart */}
            <section className="mt-10">
                <h2 className="text-xl font-semibold mb-2">Activity Graph</h2>
                <div className="w-full bg-white p-4 rounded shadow">
                    <ActivityGraph />
                </div>
            </section>
        </main>
    );
}
