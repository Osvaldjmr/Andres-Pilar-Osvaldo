import React from 'react';

function FormularioTareas() {
  return (
    <div className="card shadow-lg text-white bg-dark mb-6 offset-md-4 mt-5" style={{ maxWidth: '20rem' }}>
      <div className="card-header text-center">Formulario Tareas</div>
      <div className="card-body">
        <form id="task-form">
          <input
            type="text"
            id="id_task"
            className="form-control"
            placeholder="Inserta el id del task"
            autoFocus
          />
          <input
            type="text"
            id="task-title"
            className="form-control"
            placeholder="Título de la tarea"
            autoFocus
          />
          <textarea
            id="task-description"
            className="form-control"
            placeholder="Descripción de la tarea"
            cols="10"
            rows="5"
          ></textarea>
          <br />
          <div className="container">
            <input type="submit" value="Enviar Tarea" className="btn btn-outline-info" id="task-button" />
          </div>
          <br />
          <div className="container">
            <input type="button" value="Actualizar Tarea" className="btn btn-outline-info" id="botonActualizar" />
          </div>
          <br />
          <div>
            <p id="mensaje"></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioTareas;
