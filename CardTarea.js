import React from 'react';

function CardTarea({ tarea }) {
  return (
    <div className="card bg-info mb-3 container text-dark" style={{ maxWidth: '20rem' }}>
      <div className="card-header text-white">Id: {tarea.id}</div>
      <div className="card-body">
        <p>Title: {tarea.title}</p>
        <hr />
        <p>Description: {tarea.description}</p>
        <hr />
        <input
          type="button"
          className="btn btn-outline-light m-2"
          value="Borrar Tarea"
          name="delete"
          id={tarea.id}
        />
      </div>
    </div>
  );
}

export default CardTarea;
