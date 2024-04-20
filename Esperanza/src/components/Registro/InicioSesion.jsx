import { useState } from 'react';
import './Registro.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../../Alertas/useAlert'

const FormularioInicio = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    // Usa el hook useAlert para obtener el estado y la API de alerta
    const [alertState, alertApi] = useAlert("alertsElement");

    //Definicion de funciones
    const showAlert = () => {

        let hasError = true;

        if (!Email) {
            alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
            hasError = false;
        }
        return hasError;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Se efectua la alerta de contenido vacio o incorrecto
        if (showAlert() === true) {
            try {
                const response = await axios.post('http://localhost:3000/Crear-usuario', {
                    Email,
                    Password,
                });

                alert(response.data.message);
                navigate('/Login-form')
            } catch (error) {
                console.error('Error al enviar la solicitud:', error.response?.data || error.message);
            }
        }
    };

    return (
        <>
            <main className="d-flex justify-content-center">
                <div style={{ margin: '50px auto', maxWidth: '800px' }}>
                    <div
                        className="border p-4"
                        style={{
                            margin: '50px auto',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            borderStyle: 'solid',
                            borderColor: 'black',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <h1 className="text-center">Crear Cuenta</h1>
                        <div className="form-Registro">
                            <form onSubmit={handleSubmit} id="registroForm">
                                <div className="row">

                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom02" className="form-label">Correo</label>
                                        <input type="text" className="form-control" id="correo" placeholder="example@Email.com" value={Email} onChange={(e) => setEmail(e.target.value)} />
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    </div>

                                </div> <br />
                                {/* Muestra la alerta si está visible */}
                                {alertState.visible && (
                                    <div id="alertsElement" className={`alert ${alertState.type}`}>
                                        {alertState.message}
                                    </div>
                                )}
                                <a href="#">¿Olvidaste tu contraseña?</a>
                                <button type="submit" style={{ color: 'white' }}>Ingresar</button>
                                <a className='ocultar'>¿No tienes un usuario?</a>
                                <Link to='/Login'>
                                    <button href="/Login" className='ocultar' type="submit" style={{ color: 'white' }}>Regístrate</button>
                                </Link>
                                <div className="col">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
};

export default FormularioInicio;