import React from 'react';
// import Funcional from './components/funcional'
// import Clases from './components/clases'
import Datos from './components/datos'
import Estados from './components/estados'



// Componente basado en clases
class App  extends React.Component {
  constructor() {
    super()
  }

  multiplarEdadX2 = edad => edad*2

  render() {
    return <> 
      <Datos apellido="Sanchez" nombre="Miguel" edad='20' multiplicar={this.multiplarEdadX2} mensaje='Mensaje personalizado' /> 
      <Estados/>
      <Datos apellido="Mendoza" nombre="Maria" edad='25' multiplicar={this.multiplarEdadX2}  /> 
      </>
  }
}

export default App;
