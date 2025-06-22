import React, { useState } from 'react';
import { Globe, Heart, Leaf, Users, Lightbulb, Droplets, Zap, TrendingUp, Building, Scale, Home, Recycle, CloudRain, Fish, TreePine, Shield, Handshake } from 'lucide-react';
import Navbar from "../components/navbar"

export default function Onu() {
    const [selectedGoal, setSelectedGoal] = useState(null);
    const sdgData = [
        {
            id: 1,
            title: "Fin de la pobreza",
            description: "Erradicar la pobreza en todas sus formas y en todo el mundo.",
            icon: <Heart className="w-8 h-8" />,
            color: "from-red-500 to-red-600",
            bgColor: "bg-red-50",
            textColor: "text-red-700"
        },
        {
            id: 2,
            title: "Hambre cero",
            description: "Poner fin al hambre, lograr la seguridad alimentaria y mejorar la nutrición.",
            icon: <Leaf className="w-8 h-8" />,
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-amber-50",
            textColor: "text-amber-700"
        },
        {
            id: 3,
            title: "Salud y bienestar",
            description: "Garantizar una vida sana y promover el bienestar para todos en todas las edades.",
            icon: <Heart className="w-8 h-8" />,
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            textColor: "text-green-700"
        },
        {
            id: 4,
            title: "Educación de calidad",
            description: "Garantizar una educación inclusiva, equitativa y de calidad.",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "from-red-600 to-red-700",
            bgColor: "bg-red-50",
            textColor: "text-red-700"
        },
        {
            id: 5,
            title: "Igualdad de género",
            description: "Lograr la igualdad entre los géneros y empoderar a todas las mujeres y niñas.",
            icon: <Users className="w-8 h-8" />,
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-50",
            textColor: "text-orange-700"
        },
        {
            id: 6,
            title: "Agua limpia y saneamiento",
            description: "Garantizar la disponibilidad de agua y su gestión sostenible.",
            icon: <Droplets className="w-8 h-8" />,
            color: "from-cyan-500 to-blue-500",
            bgColor: "bg-cyan-50",
            textColor: "text-cyan-700"
        },
        {
            id: 7,
            title: "Energía asequible y no contaminante",
            description: "Asegurar el acceso a energías asequibles, fiables, sostenibles y modernas.",
            icon: <Zap className="w-8 h-8" />,
            color: "from-yellow-500 to-yellow-600",
            bgColor: "bg-yellow-50",
            textColor: "text-yellow-700"
        },
        {
            id: 8,
            title: "Trabajo decente y crecimiento económico",
            description: "Promover el crecimiento económico sostenido y el empleo digno para todos.",
            icon: <TrendingUp className="w-8 h-8" />,
            color: "from-pink-500 to-rose-500",
            bgColor: "bg-pink-50",
            textColor: "text-pink-700"
        },
        {
            id: 9,
            title: "Industria, innovación e infraestructura",
            description: "Construir infraestructuras resilientes y fomentar la innovación.",
            icon: <Building className="w-8 h-8" />,
            color: "from-orange-600 to-red-600",
            bgColor: "bg-orange-50",
            textColor: "text-orange-700"
        },
        {
            id: 10,
            title: "Reducción de las desigualdades",
            description: "Reducir la desigualdad en y entre los países.",
            icon: <Scale className="w-8 h-8" />,
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            textColor: "text-purple-700"
        },
        {
            id: 11,
            title: "Ciudades y comunidades sostenibles",
            description: "Lograr que las ciudades sean inclusivas, seguras y sostenibles.",
            icon: <Home className="w-8 h-8" />,
            color: "from-yellow-600 to-orange-500",
            bgColor: "bg-yellow-50",
            textColor: "text-yellow-700"
        },
        {
            id: 12,
            title: "Producción y consumo responsables",
            description: "Garantizar modalidades de consumo y producción sostenibles.",
            icon: <Recycle className="w-8 h-8" />,
            color: "from-amber-600 to-yellow-600",
            bgColor: "bg-amber-50",
            textColor: "text-amber-700"
        },
        {
            id: 13,
            title: "Acción por el clima",
            description: "Adoptar medidas urgentes para combatir el cambio climático.",
            icon: <CloudRain className="w-8 h-8" />,
            color: "from-green-600 to-teal-600",
            bgColor: "bg-green-50",
            textColor: "text-green-700"
        },
        {
            id: 14,
            title: "Vida submarina",
            description: "Conservar y utilizar sosteniblemente los océanos y recursos marinos.",
            icon: <Fish className="w-8 h-8" />,
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            textColor: "text-blue-700"
        },
        {
            id: 15,
            title: "Vida de ecosistemas terrestres",
            description: "Gestionar sosteniblemente los bosques y detener la pérdida de biodiversidad.",
            icon: <TreePine className="w-8 h-8" />,
            color: "from-green-700 to-green-800",
            bgColor: "bg-green-50",
            textColor: "text-green-800"
        },
        {
            id: 16,
            title: "Paz, justicia e instituciones sólidas",
            description: "Promover sociedades pacíficas, justas e inclusivas.",
            icon: <Shield className="w-8 h-8" />,
            color: "from-blue-600 to-indigo-600",
            bgColor: "bg-blue-50",
            textColor: "text-blue-700"
        },
        {
            id: 17,
            title: "Alianzas para lograr los objetivos",
            description: "Revitalizar la Alianza Mundial para el Desarrollo Sostenible.",
            icon: <Handshake className="w-8 h-8" />,
            color: "from-indigo-600 to-purple-600",
            bgColor: "bg-indigo-50",
            textColor: "text-indigo-700"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-900">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-6 py-20 text-center text-white">
                    <div className="flex items-center justify-center mb-6">
                        <Globe className="w-16 h-16 mr-4 animate-pulse" />
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            17 ODS
                        </h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Objetivos de Desarrollo Sostenible
                    </h2>
                    <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                        Una agenda transformadora hacia un futuro sostenible para la humanidad y nuestro planeta 🌍
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="bg-white text-black bg-opacity-20 backdrop-blur-lg rounded-full px-8 py-3">
                            <span className="text-lg font-medium">Organización de las Naciones Unidas</span>
                        </div>
                    </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-20 left-10 animate-bounce">
                    <div className="w-4 h-4 bg-white bg-opacity-30 rounded-full"></div>
                </div>
                <div className="absolute top-40 right-20 animate-bounce delay-1000">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
                </div>
                <div className="absolute bottom-20 left-1/4 animate-bounce delay-500">
                    <div className="w-3 h-3 bg-white bg-opacity-40 rounded-full"></div>
                </div>
            </div>

            {/* SDG Grid */}
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Los 17 Objetivos para Transformar el Mundo
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Estos objetivos interconectados abordan los desafíos globales más urgentes, 
                        desde la erradicación de la pobreza hasta la protección del planeta.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sdgData.map((goal, index) => (
                        <div
                            key={goal.id}
                            className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${goal.bgColor}`}
                            onClick={() => setSelectedGoal(selectedGoal === goal.id ? null : goal.id)}
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            
                            <div className="relative p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${goal.color} text-white shadow-lg`}>
                                        {goal.icon}
                                    </div>
                                    <div className={`text-2xl font-bold ${goal.textColor} bg-white bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center`}>
                                        {goal.id}
                                    </div>
                                </div>
                                
                                <h4 className={`text-lg font-bold ${goal.textColor} mb-3 group-hover:text-gray-800 transition-colors`}>
                                    {goal.title}
                                </h4>
                                
                                <div className={`overflow-hidden transition-all duration-500 ${
                                    selectedGoal === goal.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <p className="text-gray-700 text-sm leading-relaxed border-t pt-3 mt-3">
                                        {goal.description}
                                    </p>
                                </div>
                                
                                <div className="mt-4 flex items-center text-sm text-gray-500">
                                    <span className="group-hover:text-gray-700 transition-colors">
                                        {selectedGoal === goal.id ? 'Clic para cerrar' : 'Clic para más info'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-900 py-16">
                <div className="container mx-auto px-6 text-center text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        Juntos Podemos Hacer la Diferencia
                    </h3>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Los ODS nos guían hacia un mundo más justo, próspero y sostenible. 
                        Cada acción cuenta, cada voz importa.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white text-black bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="font-semibold">🎯 Meta: 2030</span>
                        </div>
                        <div className="bg-white text-black bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="font-semibold">🌍 Global</span>
                        </div>
                        <div className="bg-white text-black bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="font-semibold">🤝 Colaborativo</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex items-center justify-center mb-6">
                        <Globe className="w-8 h-8 mr-3" />
                        <span className="text-xl font-semibold">Objetivos de Desarrollo Sostenible</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Organización de las Naciones Unidas - Agenda 2030
                    </p>
                    <div className="border-t border-gray-700 pt-6">
                        <p className="text-sm text-gray-500">
                            "No dejar a nadie atrás" - Principio fundamental de los ODS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}