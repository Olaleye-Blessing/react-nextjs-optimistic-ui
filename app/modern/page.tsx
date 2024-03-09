import { getTodos } from '@/lib/todo';
import Todos from './_components/todos';

export default async function Page() {
	const todos = await getTodos();

	return (
		<div className='flex flex-col items-center'>
			<header>
				<h1 className='font-extrabold text-6xl mb-4'>
					useOptimistic Todos
				</h1>
			</header>
			<main>
				<Todos todos={todos} />
			</main>
		</div>
	);
}
