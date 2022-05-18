import React, { useState } from "react";
import axios from "axios";
import Todo from "../ToDo/ToDo";

const WorkToDo = () => {
    const [todoName, setTodoName] = useState("");
    const [todoBody, setTodoBody] = useState("");

    const [loading, setLoading] = useState(true)


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('todo', { todoName, todoBody, done: false })
            .then(res => {
                res.status !== 200 && setLoading(true)
                if (res.status !== 200) {
                    setLoading(true)
                } else if (res.status === 200) {
                    setLoading(false)
                }
            })
    };

    return (
        <div className="cardStyle">
            <div className=" my-5 mx-auto w-50 px-5 py-3 form-container addNew">
                <div className="">
                    <form onSubmit={handleSubmit} className=" mx-auto">
                        <h3 className="text-center text-white fw-bold pt-4">
                            Add Todo Task
                        </h3>
                        <label className="mt-3 text-white fw-bold" htmlFor="text">
                            Task Name:
                        </label>
                        <input
                            className="w-100 input-field"
                            type="text"
                            name=""
                            onChange={(e) => setTodoName(e.target.value)}
                            id=""
                            required
                        />
                        <label className="mt-3 text-white fw-bold" htmlFor="email">
                            Task Details:
                        </label>
                        <input
                            className="w-100 input-field"
                            type="textarea"
                            name="textarea"
                            onChange={(e) => setTodoBody(e.target.value)}
                            id=""
                            required
                        />
                        <button className="animated-button mx-auto mt-4" onClick={handleSubmit}>Add task</button>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <Todo loading={loading}
                        setLoading={setLoading}
                    />

                </div>
            </div>
        </div>
    );
};

export default WorkToDo;