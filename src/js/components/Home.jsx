import React, { useState } from "react";

const Home = () => {
	// array of tasks 
	const [tasks, setTasks] = useState([]);
	// the Controlled input value
	const [inputValue, setInputValue] = useState("");

	// update input value as user types
	const handleInputChange = (e) => setInputValue(e.target.value);

	// add task here
	const addTask = () => {
		if (inputValue.trim()) {
			setTasks([...tasks, { id: Date.now(), text: inputValue.trim(), completed: false }]);
			setInputValue("");
		}
	};

	// here i want the user to press the enter key to add the task
	const handleKeyPress = (e) => {
		if (e.key === "Enter") addTask();
	};

	// here i want the user to be able to delete the task
	const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

	return (
		<div className="todo-container">
			<h1>todos</h1>
			<div className="input-section">
				<input
					type="text"
					placeholder="What needs to be done?"
					value={inputValue}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
				/>
				<button onClick={addTask}>
					Add
				</button>
			</div>
			<ul className="todo-list">
				{tasks.length === 0 ? (
					<li className="no-tasks">No tasks, add one!</li>
				) : (
					tasks.map((task) => (
						<li key={task.id}>
							{task.text}
							<button className="delete-btn" onClick={() => deleteTask(task.id)}>
								🗑️
							</button>
						</li>
					))
				)}
				{tasks.length > 0 && (
					<li className="items-left">
						{tasks.length} item{tasks.length !== 1 ? 's' : ''} left
					</li>
				)}
			</ul>
		</div>
	);
};

export default Home;