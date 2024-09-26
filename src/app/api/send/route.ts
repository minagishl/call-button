import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
	if (process.env.DISCORD_WEBHOOK_URL === undefined) {
		return new Response('The server is not configured properly', { status: 500 });
	}

	const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			content: '呼び出されました！',
		}),
	});

	if (!response.ok) {
		return new Response('Failed to send a message to Discord', { status: 500 });
	}

	return new Response('OK');
}
