import React, { useState } from 'react';
import './style.css';
import logoMach from '../img/logo-mach.png';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function Login() {
  const [isActive, setIsActive] = useState(false);
  const [isPasswordStep, setIsPasswordStep] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    documentId: '',
    phone: '',
    email: '',
    password: ''
  });

  // Función para manejar los cambios de input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'documentId') {
      // Permitir solo dígitos y el guion antes del dígito verificador
      if (value !== '' && !value.match(/^\d{0,8}-?[\dkK]?$/)) {
        return;
      }
    }
    setUserData({ ...userData, [name]: value });
  };

  // Función para validar manualmente los campos requeridos
  const validateFields = () => {
    // Validar si los campos están llenos
    // La validación de 'documentId' se hace con la expresión regular en el campo de input
    if (!userData.firstName || !userData.lastName || !userData.documentId || !userData.phone || !userData.email) {
      MySwal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos requeridos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false; // Indica que la validación falló
    }
    return true; // Indica que la validación fue exitosa
  };

  // Función para manejar el envío del formulario de registro y validación de los datos ingresados
  const handleRegister = (e) => {
    e.preventDefault();
    const isValid = validateFields();
    if (isValid) {
      setIsPasswordStep(true);
      MySwal.fire({
        title: '¡Excelente!',
        text: 'Ahora vamos a configurar tu contraseña.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  };

  // Función para manejar la creación de la contraseña
  const handleCreatePassword = (e) => {
    e.preventDefault();
    console.log('Datos completos del usuario:', userData);
    MySwal.fire({
      title: '¡Registro exitoso!',
      text: 'Tu cuenta ha sido creada con éxito.',
      icon: 'success',
      confirmButtonText: 'Iniciar sesión'
    });
  };

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', userData.email, userData.password);
  };

  // Funciones para manejar el estado 'active' del contenedor
  const activateContainer = () => setIsActive(true);
  const deactivateContainer = () => setIsActive(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {!isPasswordStep ? (
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Crear Cuenta</h1>
            <input type="text" name="firstName" placeholder="Nombres" value={userData.firstName} onChange={handleInputChange} />
            <input type="text" name="lastName" placeholder="Apellidos" value={userData.lastName} onChange={handleInputChange} />
            <input
              type="text"
              name="documentId"
              placeholder="Documento de Identidad"
              value={userData.documentId}
              onChange={handleInputChange}
              pattern="\d{7,8}-[\dkK]"
              title="Ingresa un RUT válido. Ejemplo: 12345678-9"
            />
            <input type="tel" name="phone" placeholder="Número de Teléfono" value={userData.phone} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Correo Electrónico" value={userData.email} onChange={handleInputChange} />
            <button type="submit">Continuar</button>
          </form>
        </div>
      ) : (
        <div className="form-container create-password">
          <form onSubmit={handleCreatePassword}>
            <h1>Crea tu contraseña</h1>
            <input type="password" name="password" placeholder="Contraseña" value={userData.password} onChange={handleInputChange} />
            <button type="submit">Registrarse</button>
          </form>
        </div>
      )}
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Ingresar</h1>
          <input type="email" name="email" placeholder="Correo Electrónico" value={userData.email} onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Contraseña" value={userData.password} onChange={handleInputChange} />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button type="submit">Ingresar</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${!isActive ? "active" : ""}`}>
            <img src={logoMach} alt="Logo de MACH" width="150" />
            <h1>¡Registrate MACH!</h1>
            <p>¿Ya tienes una cuenta?</p>
            <button id="login" onClick={deactivateContainer}>Ingresa a tu cuenta</button>
          </div>
          <div className={`toggle-panel toggle-right ${isActive ? "active" : ""}`}>
            <img src={logoMach} alt="Logo de MACH" width="150" />
            <h1>¡Bienvenido a MACH!</h1>
            <p>Si no estás registrado puedes hacerlo aquí</p>
            <button id="register" onClick={activateContainer}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
