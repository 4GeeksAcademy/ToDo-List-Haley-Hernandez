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


	const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

	return (
		<div className="text-center mt-5">
			<h1>To-Do List</h1>
			<div className="container">
				{ }
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Add a new task..."
						value={inputValue}
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
					/>
					<button className="btn btn-primary" onClick={addTask}>
						Add
					</button>
				</div>
				{ }
				<ul className="list-group">
					{tasks.length === 0 ? (
						<li className="list-group-item">No tasks, add one!</li>
					) : (
						tasks.map((task) => (
							<li
								key={task.id}
								className="list-group-item d-flex justify-content-between align-items-center"
							>
								{task.text}
								<button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
									🗑️
								</button>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;