import React from 'react';
import './style.css'; 
import logoMach from '../img/logo-mach.png';

function Login() {
  // Función para manejar el inicio de sesión
  const loguear = () => {
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log('Iniciando sesión...');
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Crear Cuenta</h1>
          <br />
          <input type="text" placeholder="Usuario" />
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Registrarse</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Ingresar</h1>
          <br />
          <input type="email" placeholder="Correo Electrónico" id="email" />
          <input type="password" placeholder="Contraseña" id="password" />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <input type="button" value="ingresar" onClick={loguear} />
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
          <img src={logoMach} alt="Logo de MACH" width="150" /> {/* Aquí se utiliza la imagen importada */}            <h1>¡Registrate MACH!</h1>
            <p>¿Ya tienes una cuenta?</p>
            <button className="hidden" id="login">Ingresa a tu cuenta</button>
          </div>
          <div className="toggle-panel toggle-right">
          <img src={logoMach} alt="Logo de MACH" width="150" /> {/* Aquí se utiliza la imagen importada */}            <h1>¡Bienvenido a MACH!</h1>
            <p>Si no estas registrado puedes hacerlo aquí</p>
            <button className="hidden" id="register">Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
