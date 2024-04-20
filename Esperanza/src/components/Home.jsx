import React, { useState } from 'react';
import { transferMoney } from './api'; // Supone una función de API para realizar la transferencia

export default function Home() {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleTransfer = async () => {
        if (!recipient || !amount) {
            setError('Debe completar todos los campos');
            return;
        }

        try {
            const response = await transferMoney({ recipient, amount });
            if (response.success) {
                setSuccessMessage('Transferencia realizada con éxito. Comprobante enviado.');
                // resetear campos
                setRecipient('');
                setAmount('');
            } else {
                setError(response.error);
            }
        } catch (error) {
            setError('Error al realizar la transferencia.');
        }
    };

    return (
        <div>
            <h1>Transferencia de Dinero</h1>
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <input
                type="text"
                placeholder="Correo electrónico o teléfono del destinatario"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <input
                type="number"
                placeholder="Monto a enviar"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleTransfer}>Enviar Dinero</button>
        </div>
    );
}
