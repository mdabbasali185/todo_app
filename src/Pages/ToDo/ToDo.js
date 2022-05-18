import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import './ToDo.css'

const Todo = ({ loading, setLoading }) => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('todo')
            .then((res) => {
                if (res.status === 200) {
                    setTodos(res.data)
                    setLoading(false)
                } else {
                    setLoading(true)
                }
            })
    }, [loading, setLoading])
    // 
    const updateHandel = (e) => {

    }
    const handleRemove = (id) => {
        axios.delete(`/todo/${id}`).then((res) => {
            setLoading(true)
        });
    };

    if (loading) {
        return <p>loading</p>
    }
    return (

        <div className="cardStyle">

            <CardGroup className="container ">
                <Card className="addNew">
                    {
                        todos.map(todo => <Card.Body>
                            <Card.Title>{todo.todo.todoName}</Card.Title>
                            <Card.Text>{todo.todo.todoBody}</Card.Text>
                            <button
                                onClick={() => handleRemove(todo._id)}
                                className="btn-danger m-2"
                            >
                                delete
                            </button>

                            <button onClick={updateHandel} className="btn-success">update</button>
                        </Card.Body>)
                    }
                </Card>
            </CardGroup>

        </div>
    );
};

export default Todo;