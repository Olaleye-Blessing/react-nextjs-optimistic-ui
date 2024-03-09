'use client';

import { ITodo } from '@/interfaces/todo';
import { useOptimistic } from 'react';
import Form from './form';
import Todo from '@/components/Todo';

export default function Todos({ todos }: { todos: ITodo[] }) {
	const [optimisticTodos, addOptimisticTodo] = useOptimistic(
		todos,
		(_todos: ITodo[], newTodo: ITodo) => {
			return [..._todos, newTodo];
		}
	);

	return (
		<>
			<Form addOptimisticTodo={addOptimisticTodo} />
			<ul className='mt-4 flex flex-col items-start justify-start space-y-2'>
				{optimisticTodos.map((todo) => (
					<Todo key={todo.id} todo={todo} />
				))}
			</ul>
		</>
	);
}
