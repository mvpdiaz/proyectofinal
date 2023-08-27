import React from "react";
import Link from "next/link";

//como agrego comprobacion a email en formato?

export default function Inicio_sesion() {
    return(   
        <> 
            <form>
                <h1>INICIAR SESIÓN</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Dirección de Email</label> <br/>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </input>    <br/>
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label><br/>
                    <input type="password" class="form-control" id="exampleInputPassword1" maxLength={8}>
                    </input>
                </div>
                <button type="submit" class="btn btn-primary">ENVIAR</button>
            </form>
            <div>
                <Link href="/registro">Registrate</Link>
            </div>
            <div>
                <Link href="/lista-tarea">Lista tarea</Link>
            </div>
        </>
    )

}

/*<>
<h4>Sino sos usuario registrado:</h4>
<Link to="/registro">REGISTRATE</Link>
</>*/
