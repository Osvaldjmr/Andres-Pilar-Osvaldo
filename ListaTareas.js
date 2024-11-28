import React, { useEffect, useState } from 'react';
import { getTasks } from '../Utils';
import CardTarea from './CardTarea';

function ListaTareas() {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const fetchTareas = async () => {
            const tareas = await getTasks();
            setTareas(tareas);
        };

        fetchTareas();
    }, []);

    return (
        <div>
            {tareas.map((tarea) => (
                <CardTarea key={tarea.id} tarea={tarea} />
            ))}
        </div>
    );
}

export default ListaTareas;
