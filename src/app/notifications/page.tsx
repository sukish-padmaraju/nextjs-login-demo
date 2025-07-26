'use client';

import React from 'react';

const mockNotifications = [
    { id: 1, title: 'New Report Available', description: 'Your daily report has been generated.', time: '5m ago', read: false },
    { id: 2, title: 'Login from new device', description: 'A login was detected from a new browser.', time: '1h ago', read: true },
    { id: 3, title: 'Alert: High activity', description: 'Unusual activity detected in Zone 2.', time: '2h ago', read: false },
];

export default function NotificationsPage() {
    return (
        <main className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Notifications</h1>

            <div className="flex justify-between items-center mb-4">
                <button className="text-sm text-blue-600">Mark all as read</button>
                <button className="text-sm text-red-500">Clear all</button>
            </div>

            {mockNotifications.map((notif) => (
                <div
                    key={notif.id}
                    className={`p-4 mb-2 rounded shadow ${notif.read ? 'bg-white' : 'bg-yellow-100'}`}
                >
                    <h2 className="text-lg font-semibold">{notif.title}</h2>
                    <p className="text-gray-700">{notif.description}</p>
                    <span className="text-sm text-gray-500">{notif.time}</span>
                </div>
            ))}

            {mockNotifications.length === 0 && (
                <p className="text-gray-500 text-center mt-10">No notifications to display.</p>
            )}
        </main>
    );
}
