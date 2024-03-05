'use client';

import { useEffect, useState } from 'react';
import { ITodo } from '@/interfaces/todo';
import { getTodos } from '@/lib/todo';
import Form from './_components/form';
import Todos from './_components/todos';

export default function Home() {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const addNewTodo = (todo: ITodo) => {
		setTodos((prev) => [todo, ...prev]);
	};

	const removeTodo = (todo: ITodo) => {
		setTodos((prev) => prev.filter((t) => t.id !== todo.id));
	};

	const updateTodo = (oldTodo: ITodo, newTodo: ITodo) => {
		setTodos((prev) =>
			prev.map((todo) => (todo.id === oldTodo.id ? newTodo : todo))
		);
	};

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
				<Form
					addNewTodo={addNewTodo}
					updateTodo={updateTodo}
					removeTodo={removeTodo}
				/>
				<Todos todos={todos} />
			</main>
		</div>
	);
}
