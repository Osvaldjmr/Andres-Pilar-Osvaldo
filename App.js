import React from 'react';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';


function App() {
  return (
    <div className="container mt-5">
      <FormularioTareas />
      <h3 className="text-center text-info mt-4">Listado de tareas existente</h3>
      <ListaTareas />
    </div>
  );
}

export default App;
