import { ITodo } from '@/interfaces/todo';

interface TodoProps {
	todo: ITodo;
}

export default function Todo({ todo }: TodoProps) {
	return (
		<li className='flex items-center justify-start'>
			<input type='checkbox' id={`todo-${todo.id}`} />
			<label
				htmlFor={`todo-${todo.id}`}
				className={`ml-1 ${
					todo.completed ? 'line-through font-semibold' : ''
				}`}
			>
				{todo.body}
			</label>
		</li>
	);
}
