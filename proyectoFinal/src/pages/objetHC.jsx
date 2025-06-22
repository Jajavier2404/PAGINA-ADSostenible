import React, { useState } from 'react';
import { Leaf, Target, Factory, Zap, TreePine, Globe, TrendingDown, Building2, Car, Recycle, Wind, Sun, CloudRain, BarChart3, Users, Shield, Lightbulb } from 'lucide-react';
import Navbar from "../components/navbar"


export default function ObjectivosHC() {
    const [selectedObjective, setSelectedObjective] = useState(null);

    const carbonObjectives = [
        {
            id: 1,
            title: "Reducción 45% emisiones para 2030",
            description: "Disminuir las emisiones globales de gases de efecto invernadero en un 45% respecto a los niveles de 2010 para mantener el calentamiento global por debajo de 1.5°C.",
            icon: <TrendingDown className="w-8 h-8" />,
            color: "from-red-500 to-red-600",
            bgColor: "bg-red-50",
            textColor: "text-red-700",
            priority: "Crítico",
            deadline: "2030"
        },
        {
            id: 2,
            title: "Neutralidad de carbono 2050",
            description: "Alcanzar cero emisiones netas de carbono para 2050, equilibrando las emisiones producidas con la cantidad equivalente retirada de la atmósfera.",
            icon: <Target className="w-8 h-8" />,
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            textColor: "text-green-700",
            priority: "Esencial",
            deadline: "2050"
        },
        {
            id: 3,
            title: "Transición energética limpia",
            description: "Acelerar la transición hacia energías renovables y eliminar gradualmente los combustibles fósiles en todos los sectores económicos.",
            icon: <Zap className="w-8 h-8" />,
            color: "from-yellow-500 to-orange-500",
            bgColor: "bg-yellow-50",
            textColor: "text-yellow-700",
            priority: "Urgente",
            deadline: "2030-2040"
        },
        {
            id: 4,
            title: "Descarbonización industrial",
            description: "Transformar los procesos industriales para reducir las emisiones de carbono mediante tecnologías limpias y eficiencia energética.",
            icon: <Factory className="w-8 h-8" />,
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            textColor: "text-blue-700",
            priority: "Alta",
            deadline: "2035"
        },
        {
            id: 5,
            title: "Movilidad sostenible",
            description: "Promover el transporte eléctrico, público y activo para reducir las emisiones del sector transporte, uno de los mayores contribuyentes.",
            icon: <Car className="w-8 h-8" />,
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            textColor: "text-purple-700",
            priority: "Alta",
            deadline: "2030"
        },
        {
            id: 6,
            title: "Captura y almacenamiento de CO2",
            description: "Desarrollar e implementar tecnologías de captura, utilización y almacenamiento de carbono para remover CO2 de la atmósfera.",
            icon: <CloudRain className="w-8 h-8" />,
            color: "from-teal-500 to-teal-600",
            bgColor: "bg-teal-50",
            textColor: "text-teal-700",
            priority: "Innovación",
            deadline: "2040"
        },
        {
            id: 7,
            title: "Reforestación y sumideros naturales",
            description: "Proteger y restaurar bosques, humedales y otros ecosistemas que actúan como sumideros naturales de carbono.",
            icon: <TreePine className="w-8 h-8" />,
            color: "from-green-600 to-green-700",
            bgColor: "bg-green-50",
            textColor: "text-green-800",
            priority: "Esencial",
            deadline: "Continuo"
        },
        {
            id: 8,
            title: "Edificios carbono neutral",
            description: "Promover construcciones sostenibles y retrofitting de edificios existentes para lograr eficiencia energética y cero emisiones.",
            icon: <Building2 className="w-8 h-8" />,
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50",
            textColor: "text-indigo-700",
            priority: "Media",
            deadline: "2040"
        },
        {
            id: 9,
            title: "Economía circular",
            description: "Implementar modelos de economía circular que reduzcan residuos, promuevan el reciclaje y minimicen la huella de carbono.",
            icon: <Recycle className="w-8 h-8" />,
            color: "from-amber-500 to-amber-600",
            bgColor: "bg-amber-50",
            textColor: "text-amber-700",
            priority: "Media",
            deadline: "2035"
        },
        {
            id: 10,
            title: "Financiamiento climático",
            description: "Movilizar 100 mil millones de dólares anuales para proyectos de mitigación y adaptación climática en países en desarrollo.",
            icon: <BarChart3 className="w-8 h-8" />,
            color: "from-rose-500 to-rose-600",
            bgColor: "bg-rose-50",
            textColor: "text-rose-700",
            priority: "Crítico",
            deadline: "2025"
        },
        {
            id: 11,
            title: "Cooperación internacional",
            description: "Fortalecer la colaboración global para compartir tecnologías, conocimientos y recursos en la lucha contra el cambio climático.",
            icon: <Globe className="w-8 h-8" />,
            color: "from-cyan-500 to-cyan-600",
            bgColor: "bg-cyan-50",
            textColor: "text-cyan-700",
            priority: "Fundamental",
            deadline: "Continuo"
        },
        {
            id: 12,
            title: "Innovación tecnológica verde",
            description: "Acelerar la investigación y desarrollo de tecnologías limpias e innovadoras para la transición hacia una economía baja en carbono.",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "from-violet-500 to-violet-600",
            bgColor: "bg-violet-50",
            textColor: "text-violet-700",
            priority: "Estratégico",
            deadline: "2030"
        }
    ];

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Crítico': return 'bg-red-100 text-red-800';
            case 'Esencial': return 'bg-green-100 text-green-800';
            case 'Urgente': return 'bg-orange-100 text-orange-800';
            case 'Alta': return 'bg-blue-100 text-blue-800';
            case 'Media': return 'bg-gray-100 text-gray-800';
            case 'Fundamental': return 'bg-purple-100 text-purple-800';
            case 'Estratégico': return 'bg-indigo-100 text-indigo-800';
            case 'Innovación': return 'bg-teal-100 text-teal-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <Navbar />

            <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-900">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-6 py-20 text-center text-white">
                    <div className="flex items-center justify-center mb-6">
                        <Leaf className="w-16 h-16 mr-4 animate-pulse" />
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                            Huella de Carbono
                        </h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Objetivos de Neutralidad Climática
                    </h2>
                    <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                        Camino hacia cero emisiones netas para 2050 🌱
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-black">
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="text-lg font-medium">Meta 2030: -45% emisiones</span>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="text-lg font-medium">Meta 2050: Neutralidad</span>
                        </div>
                    </div>
                </div>
                
                {/* Floating CO2 molecules animation */}
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

            {/* Key Statistics */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-500 rounded-full p-3 mr-4">
                                <TrendingDown className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-green-600">45%</h3>
                                <p className="text-gray-600">Reducción para 2030</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Reducción de emisiones necesaria para mantener el calentamiento por debajo de 1.5°C</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-500 rounded-full p-3 mr-4">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-blue-600">2050</h3>
                                <p className="text-gray-600">Neutralidad de carbono</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Año objetivo para alcanzar cero emisiones netas globales</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-500 rounded-full p-3 mr-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-purple-600">65M</h3>
                                <p className="text-gray-600">Empleos verdes</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Empleos estimados en economía baja en carbono para 2030</p>
                    </div>
                </div>
            </div>

            {/* Objectives Grid */}
            <div className="container mx-auto px-6 pb-16">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        12 Objetivos Clave para la Neutralidad de Carbono
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Estrategias fundamentales para alcanzar las metas climáticas globales y construir un futuro sostenible libre de emisiones netas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {carbonObjectives.map((objective, index) => (
                        <div
                            key={objective.id}
                            className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${objective.bgColor}`}
                            onClick={() => setSelectedObjective(selectedObjective === objective.id ? null : objective.id)}
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            
                            <div className="relative p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${objective.color} text-white shadow-lg`}>
                                        {objective.icon}
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(objective.priority)}`}>
                                            {objective.priority}
                                        </span>
                                        <span className="text-xs text-gray-500 mt-1">{objective.deadline}</span>
                                    </div>
                                </div>
                                
                                <h4 className={`text-lg font-bold ${objective.textColor} mb-3 group-hover:text-gray-800 transition-colors`}>
                                    {objective.title}
                                </h4>
                                
                                <div className={`overflow-hidden transition-all duration-500 ${
                                    selectedObjective === objective.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <p className="text-gray-700 text-sm leading-relaxed border-t pt-3 mt-3">
                                        {objective.description}
                                    </p>
                                </div>
                                
                                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                                    <span className="group-hover:text-gray-700 transition-colors">
                                        {selectedObjective === objective.id ? 'Clic para cerrar' : 'Clic para más info'}
                                    </span>
                                    <div className={`text-2xl font-bold ${objective.textColor} bg-white bg-opacity-60 rounded-full w-8 h-8 flex items-center justify-center text-xs`}>
                                        {objective.id}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-900 py-10 pt-16">
                <div className="container mx-auto px-6 text-center text-black">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                        Cronograma hacia la Neutralidad
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 max-w-xs">
                            <h4 className="text-2xl font-bold mb-2">2025</h4>
                            <p className="text-sm opacity-90">Financiamiento climático: $100B anuales</p>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 max-w-xs">
                            <h4 className="text-2xl font-bold mb-2">2030</h4>
                            <p className="text-sm opacity-90">Reducción del 45% de emisiones globales</p>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 max-w-xs">
                            <h4 className="text-2xl font-bold mb-2">2040</h4>
                            <p className="text-sm opacity-90">Tecnologías de captura de CO2 a escala</p>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 max-w-xs">
                            <h4 className="text-2xl font-bold mb-2">2050</h4>
                            <p className="text-sm opacity-90">Neutralidad de carbono global</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-900 py-0 pb-16">
                <div className="container mx-auto px-6 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        La Acción Climática no Puede Esperar
                    </h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                        Cada tonelada de CO2 cuenta. Cada decisión importa. El futuro del planeta está en nuestras manos.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-black">
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="font-semibold">🌍 Una sola Tierra</span>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="font-semibold">⏰ Acción ahora</span>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="font-semibold">🤝 Juntos podemos</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex items-center justify-center mb-6 ">
                        <Leaf className="w-8 h-8 mr-3" />
                        <span className="text-xl font-semibold">Objetivos de Huella de Carbono</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Organización de las Naciones Unidas - Acción Climática
                    </p>
                    <div className="border-t border-gray-700 pt-6">
                        <p className="text-sm text-gray-500">
                            "El tiempo para la acción climática es ahora" - ONU
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}