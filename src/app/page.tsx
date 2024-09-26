export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center p-24 justify-center'>
			<h1 className='font-semibold text-6xl md:text-8xl leading-tight text-zinc-900 text-center font-default'>
				{process.env.NEXT_PUBLIC_NAME ?? '館長'}が<br />
				出てくる
				<br />
				ボタン
			</h1>
			<button className='bg-black size-10 md:size-14 rounded-full my-16 md:my-20' />
			<div className='font-default flex flex-col items-center font-semibold leading-tight text-2xl md:text-4xl'>
				<span>用事がなくてもOK!</span>
				<span>ボタンを押すと</span>
				<span>だいたい3分以内に現れます</span>
			</div>
			<span className='font-default mt-7 text-sm md:text-base'>※不在のときは出てきません</span>
		</main>
	);
}
