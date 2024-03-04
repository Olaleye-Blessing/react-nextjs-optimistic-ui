'use server';

import { ITodo } from '@/interfaces/todo';

export const getTodos = async () => {
	const res: ITodo[] = await (
		await fetch('http://localhost:3004/todos')
	).json();

	return res;
};
