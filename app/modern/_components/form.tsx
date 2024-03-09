import { useRef } from 'react';
import { createTodo } from '../actions';
import { ITodo } from '@/interfaces/todo';

interface AddTodoProps {
	addOptimisticTodo: (todo: ITodo) => void;
}

export default function Form({ addOptimisticTodo }: AddTodoProps) {
	const formRef = useRef<HTMLFormElement>(null);

	const addTodo = async (data: FormData) => {
		const todo = {
			body: data.get('todo') as string,
			completed: false,
		};

		addOptimisticTodo(todo);

		try {
			await createTodo(todo);
			formRef.current?.reset();
		} catch (error) {
			console.log('error');
		}
	};

	return (
		<form
			ref={formRef}
			className='flex items-center justify-between'
			action={addTodo}
		>
			<input
				name='todo'
				placeholder='Create a new todo'
				className='w-full mr-4 block py-1 rounded-md text-black px-1'
				required
			/>
			<button
				type='submit'
				className='bg-green-700 font-bold px-4 py-1 rounded-md text-white'
			>
				Add
			</button>
		</form>
	);
}
