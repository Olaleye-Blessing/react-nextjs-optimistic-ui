'use server';

import { ITodo } from '@/interfaces/todo';
import { sleep } from '@/lib/sleep';
import { revalidatePath } from 'next/cache';

export const createTodo = async (todo: ITodo) => {
	await sleep(2_000);

	try {
		// throw new Error('Testing optimistic');

		const req = await fetch('http://localhost:3004/todos', {
			body: JSON.stringify(todo),
			method: 'POST',
		});

		await req.json();
		revalidatePath('/modern');
	} catch (error) {
		throw error;
	}
};
