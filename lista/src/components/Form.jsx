"use client"
import React, { useState } from 'react';
import Todo from './Todo';
import styles from "../app/page.module.css";

const Form = () => {
    const [todos, setTodos] = useState([]);

    const [todo, setTodo] = useState({
        todo: '',
        mar: '',
        cant: '',
        pre: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setTodo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClick = e => {
        e.preventDefault();
        if (!todo.todo.trim() || !todo.mar.trim() || !todo.cant || !todo.pre) {
            alert('Todos los campos son requeridos');
            return;
        }
        setTodos([...todos, todo]);
        setTodo({
            todo: '',
            mar: '',
            cant: '',
            pre: ''
        });
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    

    return (
        <>
            <form>
                <label>Agregar Tarea</label><br />
                <br />
                <label>Producto</label>
                <input className={styles.form_input} type='text' name='todo' value={todo.todo} onChange={handleChange} />
                <label>Marca</label>
                <input className={styles.form_input} type='text' name='mar' value={todo.mar} onChange={handleChange} />
                <label>Cantidad</label>
                <input className={styles.form_input} type='number' name='cant' value={todo.cant} onChange={handleChange} />
                <label>Precio</label>
                <input className={styles.form_input} type='number' name='pre' value={todo.pre} onChange={handleChange} />
                <br />
                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>

            {todos.map((value, index) => (
                <Todo
                    todo={value.todo}
                    mar={value.mar}
                    cant={value.cant}
                    pre={value.pre}
                    key={index}
                    deleteTodo={() => deleteTodo(index)}
                />
            ))}
        </>
    );
};

export default Form;
