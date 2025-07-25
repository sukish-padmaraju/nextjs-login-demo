'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', reports: 10 },
    { name: 'Tue', reports: 14 },
    { name: 'Wed', reports: 8 },
    { name: 'Thu', reports: 18 },
    { name: 'Fri', reports: 12 },
    { name: 'Sat', reports: 5 },
    { name: 'Sun', reports: 9 },
];

export default function ActivityGraph() {
    return (
        <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="reports" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
}
