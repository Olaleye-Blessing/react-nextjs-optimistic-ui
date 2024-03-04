'use client';

import { useEffect, useState } from 'react';
import { ITodo } from '@/interfaces/todo';
import { getTodos } from '@/lib/todo';
import Form from './_components/form';
import Todos from './_components/todos';

export default function Home() {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		(async () => {
			let _todos = await getTodos();

			setTodos(_todos);
		})();
	}, []);

	return (
		<div className='flex flex-col items-center'>
			<header>
				<h1 className='font-extrabold text-6xl mb-4'>Todos</h1>
			</header>

			<main>
				<Form />
				<Todos todos={todos} />
			</main>
		</div>
	);
}
