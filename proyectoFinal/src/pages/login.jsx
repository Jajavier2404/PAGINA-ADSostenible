import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
// Componente Login
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        // Validación simple para el boceto
        if (username && password) {
            navigate('/onu');
        } else {
            alert("Por favor completa ambos campos");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-300 flex items-center justify-center p-4">
            
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
                
                <div className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    
                    <div>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition duration-200 font-semibold"
                    >
                        Ingresar
                    </button>
                </div>
                
                <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </div>
        </div>
    );
}