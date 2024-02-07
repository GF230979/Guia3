import React from 'react';
import styles from "../app/page.module.css";

const Todo = ({ todo, mar, cant, pre, index, deleteTodo }) => {
    return (
        <>
            <div className={styles.list}>
                <p>Producto:{todo}</p>
                <br></br>
                <p>Marca: {mar}</p>
                <br></br>
                <p>Cantidad: {cant}</p>
                <br></br>
                <p>Precio: {pre}</p>
                <br></br>
                <button className={styles.btn_delete} onClick={() => deleteTodo(index)}> X </button>
            </div>
        </>
    );
};

export default Todo;
