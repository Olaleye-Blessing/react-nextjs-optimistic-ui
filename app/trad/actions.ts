'use server';

import { ITodo } from '@/interfaces/todo';
import { sleep } from '@/lib/sleep';

export const createTodo = async (todo: Omit<ITodo, 'id'>) => {
	await sleep(2000);

	try {
		throw new Error('Testing...');
		
		const req = await fetch('http://localhost:3004/todos', {
			body: JSON.stringify(todo),
			method: 'POST',
		});
		const newTodo: ITodo = await req.json();

		return newTodo;
	} catch (error) {
		throw error;
	}
};
