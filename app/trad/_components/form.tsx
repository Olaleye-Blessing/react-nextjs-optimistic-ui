import { FormEventHandler } from 'react';

interface IAddTodo {}

export default function AddTodo({}: IAddTodo) {
	const add: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={add} className='flex items-center justify-between'>
			<input
				name='todo'
				placeholder='Create a new todo'
				className='w-full mr-4 block py-1 rounded-md text-black px-1'
				required
			/>
			<button
				type='submit'
				className='bg-green-700 text-white font-bold px-4 py-1 rounded-md'
			>
				Add
			</button>
		</form>
	);
}
