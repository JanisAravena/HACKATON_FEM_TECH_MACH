import './SignIn.css';
import logoMach from '../img/logo-mach.png';
import { useState } from 'react';

const SesionIniciada = () => {
     return(
        <>
        <div className="container">
            <header>
                <img src={logoMach} alt="Logo de MACH" width="150" />
                <h3>Hola</h3>
            </header>
            <nav></nav>
            <main>
                <div className="container">
                    <div className="cuenta">
                        
                    </div>
                    <div className="saldo">
                        <h3>$0</h3>
                    </div>
                    <div className="movimientos">
                        <p>Ver Movimientos</p>
                    </div>
                    <div className="transferir">
                        <button style={{ color: 'white'}} type="submit">Registrarse</button>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
        </>
     )
}

export default Formularioregistro;