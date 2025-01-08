'use client';

import Link from 'next/link';
import { AlertCircle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <AlertCircle className="h-16 w-16 text-green-600 mx-auto animate-pulse" />
          <h1 className="text-4xl font-bold tracking-tight">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">Page Not Found</h2>
        </div>
        
        <p className="text-muted-foreground">
          We couldn't find the page you're looking for. The page might have been removed, 
          renamed, or is temporarily unavailable.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          <Home className="h-4 w-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
}