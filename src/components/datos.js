import React from 'react'

const Datos = (props) =>{
    // const concat = ' concatenado'
    // const mensaje = `Esto es un mensaje ${concat}` // 'Esto es un mensaje' + concat
    const {nombre, apellido, edad, multiplicar} = props
    // this.props.profesion = 'Ingeniero de sistemas' //No se puede asignar un valor
    return <>
    <h1>Mi nombre es {nombre} {apellido}, tengo {edad} anios de edad</h1>
    <h2>Mi edad multiploado por 2 es {multiplicar(edad)}</h2>
    <h3>Mensaje: {props.mensaje}</h3>
    </>
}

Datos.defaultProps = {
    mensaje: 'Esto es un mensaje'
}

export default Datos