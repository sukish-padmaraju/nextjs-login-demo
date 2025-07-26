'use client';

import { useRouter } from 'next/navigation';

export default function NavControls() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-4 text-3xl select-none">
      <span
        onClick={() => router.back()}
        className="cursor-pointer hover:text-blue-600 transition"
        title="Back"
        aria-label="Back"
      >
        &lt;
      </span>
      <span
        onClick={() => window.history.forward()}
        className="cursor-pointer hover:text-blue-600 transition"
        title="Forward"
        aria-label="Forward"
      >
        &gt;
      </span>
    </div>
  );
}