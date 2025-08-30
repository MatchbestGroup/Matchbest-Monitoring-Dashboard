import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // In a real application, you would fetch logs from Loki here.
    // For example, by making HTTP requests to the Loki API.
    // For now, we'll return mock data.

    const mockLogs = [
      {
        timestamp: new Date().toISOString(),
        level: 'info',
        message: 'User logged in successfully.',
        labels: { job: 'auth-service', instance: 'server-1' },
      },
      {
        timestamp: new Date(Date.now() - 60000).toISOString(),
        level: 'warn',
        message: 'High CPU usage detected.',
        labels: { job: 'node-exporter', instance: 'server-1' },
      },
    ];

    return NextResponse.json(mockLogs);
  } catch (error) {
    console.error('Error fetching Loki logs:', error);
    return NextResponse.json({ error: 'Failed to fetch Loki logs' }, { status: 500 });
  }
}
