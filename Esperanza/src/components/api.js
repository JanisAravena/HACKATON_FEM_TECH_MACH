// En el archivo src/components/api.js
export const transferMoney = async ({ recipient, amount }) => {
    try {
        // Aquí iría la lógica para llamar al backend y realizar la transferencia
        return { success: true };
    } catch (error) {
        return { success: false, error: 'Error al realizar la transferencia' };
    }
};
