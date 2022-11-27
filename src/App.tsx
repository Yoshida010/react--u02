/** @format */
import { Practice01 } from "./practices/Practice01";
import { Practice02 } from "./practices/Practice02";
import { Practice03 } from "./practices/Practice03";
import { Practice04 } from "./practices/Practice04";
import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
	name: "jake",
	// hobbies: ["eiga", "game"],
};

export const App = () => {
	const [todos, setTodos] = useState<Array<TodoType>>([]);

	// ------- udemy10 -------
	const onClickFetchData = () => {
		axios
			.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
			.then((res) => {
				setTodos(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="App">
			{/* ------- udemy09 ------- */}
			{/* <div>
				<Practice01 />
				<Practice02 />
				<Practice03 />
				<Practice04 />
			</div> */}

			{/* ------- udemy10 ------- */}
			<div>
				<button onClick={onClickFetchData}>データ取得</button>
				{todos.map((todo: TodoType) => (
					<Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
				))}
				<Text color="red" fontSize="18px" />
				<UserProfile user={user} />
			</div>
		</div>
	);
};
