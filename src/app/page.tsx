'use client';

import { useState } from 'react';

export default function Home() {
	const [sending, setSending] = useState(false);

	function handleClick() {
		setSending(true);

		fetch('/api/send')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Failed to send a message to Discord');
				}

				setSending(false);
				alert('呼び出しました！');
			})
			.catch(() => {
				setSending(false);
				alert('エラーが発生しました');
			});
	}

	return (
		<main className='flex min-h-screen flex-col items-center p-16 md:p-24 justify-center'>
			<h1 className='font-semibold text-6xl md:text-8xl leading-tight text-zinc-900 text-center font-default'>
				{process.env.NEXT_PUBLIC_NAME ?? '館長'}が<br />
				出てくる
				<br />
				ボタン
			</h1>
			<button
				onClick={handleClick}
				disabled={sending}
				className={`bg-zinc-900 size-10 md:size-14 rounded-full my-16 md:my-20 ${
					sending === true ? 'animate-pulse' : ''
				}`}
			/>
			<div className='font-default flex flex-col items-center font-semibold leading-tight text-2xl md:text-4xl'>
				<span>用事がなくてもOK!</span>
				<span>ボタンを押すと</span>
				<span>だいたい3分以内に現れます</span>
			</div>
			<span className='font-default mt-7 text-sm md:text-base'>※不在のときは出てきません</span>
		</main>
	);
}
