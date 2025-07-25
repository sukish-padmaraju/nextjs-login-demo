'use client';

import { useParams } from 'next/navigation';

export default function UserPage() {
    const params = useParams();
    const id = params?.id;

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">User Profile</h1>
            <p>This is the individual page for user ID: <strong>{id}</strong></p>
        </main>
    );
}
