import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import Link from 'next/link';
import '../../styles/registro.css';
import 'spectre.css/dist/spectre.min.css';


const Registro = () => (
  <>
    <div>
      <h1 class='h1'>REGISTRATE</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
      <Form class='form'>
        <label id="firstName" htmlFor="firstName">Nombre</label> <br/>
        <Field id="firstName" name="firstName" placeholder="Nombre" /><br/>
        <label id="lastName" htmlFor="lastName">Apellido</label><br/>
        <Field id="lastName" name="lastName" placeholder="Apellido" /><br/>
        <label id="contraseña"htmlFor="contraseña">Contraseña</label><br/>
        <Field id="contraseña" name="contraseña" placeholder="Contraseña" type="number" maxlength="8" /><br/>
        <label id="email" htmlFor="email">Email</label><br/>
        <Field
          id="email"
          name="email"
          placeholder="jane@gmail.com"
          type="email"
        />
        <br></br>
        <button type="submit">ENVIAR</button>
      </Form>
      </Formik>
    </div>
    <div>
    <Link href="/inicio-sesion">Iniciar Sesión</Link>
    </div>
  </>
);

//ReactDOM.render(<Registro />,document.getElementById('root'));
export default Registro;


