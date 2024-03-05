import { ITodo } from '@/interfaces/todo';
import { FormEventHandler } from 'react';
import { createTodo } from '../actions';

interface IAddTodo {
	addNewTodo: (todo: ITodo) => void;
	updateTodo: (oldTodo: ITodo, newTodo: ITodo) => void;
	removeTodo: (todo: ITodo) => void;
}

export default function AddTodo({
	addNewTodo,
	updateTodo,
	removeTodo,
}: IAddTodo) {
	const add: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const body = new FormData(form).get('todo') as string;

		const id = new Date().getTime();

		const todo = {
			body,
			completed: false,
		};

		const optimisticTodo = {
			...todo,
			id,
		};

		addNewTodo(optimisticTodo);

		try {
			let dbTodo = await createTodo(todo);
			updateTodo(optimisticTodo, dbTodo);
			form.reset();
		} catch (error) {
			removeTodo(optimisticTodo);
		}
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
