'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome Home!</h1>
            <button
                onClick={() => router.push('/user/128')}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
            >
                Go to Individual Page
            </button>
        </main>
    );
}
