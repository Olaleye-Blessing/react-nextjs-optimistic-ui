import Todo from '@/components/Todo';
import { ITodo } from '@/interfaces/todo';

export default function Todos({ todos }: { todos: ITodo[] }) {
	return (
		<ul className='mt-4 flex flex-col items-start justify-start space-y-2'>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</ul>
	);
}
