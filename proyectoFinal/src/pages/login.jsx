import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // LOGIN
      if (username && password) {
        try {
          const res = await fetch("http://localhost:3001/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          });
          const data = await res.json();
          if (data.success) {
            navigate("/onu");
          } else {
            alert(data.message || "Error al iniciar sesión");
          }
        } catch {
          alert("Error de conexión con el servidor");
        }
      } else {
        alert("Por favor completa ambos campos");
      }
    } else {
      // REGISTRO
      if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
          try {
            const res = await fetch("http://localhost:3001/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, email, password }),
            });
            const data = await res.json();
            if (data.success) {
              alert("Registro exitoso! Ahora puedes iniciar sesión");
              setIsLogin(true);
              setUsername("");
              setPassword("");
              setEmail("");
              setConfirmPassword("");
            } else {
              alert(data.message || "Error al registrar");
            }
          } catch {
            alert("Error de conexión con el servidor");
          }
        } else {
          alert("Las contraseñas no coinciden");
        }
      } else {
        alert("Por favor completa todos los campos");
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-emerald-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        {/* Header con icono */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-4 shadow-lg">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent mb-2">
            {isLogin ? "Bienvenido" : "Únete a nosotros"}
          </h2>
          <p className="text-gray-600 text-sm">
            {isLogin
              ? "Accede a tu huella verde"
              : "Comienza tu viaje sostenible"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo Usuario */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-emerald-500" />
            </div>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            />
          </div>

          {/* Campo Email (solo para registro) */}
          {!isLogin && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-emerald-500" />
              </div>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              />
            </div>
          )}

          {/* Campo Contraseña */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-emerald-500" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400 hover:text-emerald-500 transition-colors" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400 hover:text-emerald-500 transition-colors" />
              )}
            </button>
          </div>

          {/* Campo Confirmar Contraseña (solo para registro) */}
          {!isLogin && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-emerald-500" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-emerald-500 transition-colors" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-emerald-500 transition-colors" />
                )}
              </button>
            </div>
          )}

          {/* Botón principal */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </button>
        </form>

        {/* Enlaces adicionales */}
        <div className="mt-6 space-y-3">
          {isLogin && (
            <div className="text-center">
              <button className="text-sm text-emerald-600 hover:text-emerald-800 hover:underline transition-colors">
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          )}

          {/* Separador */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
              </span>
            </div>
          </div>

          {/* Botón cambiar modo */}
          <div className="text-center">
            <button
              type="button"
              onClick={toggleMode}
              className="text-emerald-600 hover:text-emerald-800 font-semibold transition-colors hover:underline"
            >
              {isLogin ? "Registrarse" : "Iniciar Sesión"}
            </button>
          </div>
        </div>

        {/* Mensaje ecológico */}
        <div className="mt-6 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs text-gray-600 text-center">
            🌱 Juntos construimos un futuro más sostenible
          </p>
        </div>
      </div>
    </div>
  );
}
