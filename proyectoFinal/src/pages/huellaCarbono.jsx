import React, { useState } from 'react';
import { Calculator, Leaf, Car, Home, Plane, Utensils, TrendingDown, Target, Zap, TreePine } from 'lucide-react';
import Navbar from "../components/navbar"

export default function HuellaCarbono() {
    const [activities, setActivities] = useState({
        transporte: 0,
        energia: 0,
        alimentacion: 0,
        vuelos: 0
    });

    // Factores de emisión simplificados (kg CO₂e por unidad)
    const emissionFactors = {
        transporte: 0.21,    // kg CO₂e por km en auto
        energia: 0.45,       // kg CO₂e por kWh
        alimentacion: 2.5,   // kg CO₂e por día (dieta promedio)
        vuelos: 0.25         // kg CO₂e por km en vuelo
    };

    const handleInputChange = (activity, value) => {
        setActivities(prev => ({
        ...prev,
        [activity]: parseFloat(value) || 0
        }));
    };

    // Aplicando la fórmula: Huella de Carbono = Σ(Actividad × Factor de Emisión)
    const calculateCarbonFootprint = () => {
        let total = 0;
        Object.keys(activities).forEach(activity => {
        total += activities[activity] * emissionFactors[activity];
        });
        return total;
    };

    const totalEmissions = calculateCarbonFootprint();

    const getEmissionLevel = (emissions) => {
        if (emissions < 100) return { level: "Excelente", color: "text-green-600", bg: "bg-green-100", gradient: "from-green-500 to-green-600" };
        if (emissions < 500) return { level: "Bueno", color: "text-yellow-600", bg: "bg-yellow-100", gradient: "from-yellow-500 to-orange-500" };
        if (emissions < 1000) return { level: "Moderado", color: "text-orange-600", bg: "bg-orange-100", gradient: "from-orange-500 to-red-500" };
        return { level: "Alto", color: "text-red-600", bg: "bg-red-100", gradient: "from-red-500 to-red-600" };
    };

    const emissionLevel = getEmissionLevel(totalEmissions);

    const inputCategories = [
        {
            key: 'transporte',
            title: 'Transporte Terrestre',
            icon: <Car className="w-6 h-6" />,
            placeholder: 'Kilómetros recorridos en auto/mes',
            factor: '0.21 kg CO₂e por km',
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            key: 'energia',
            title: 'Consumo Energético',
            icon: <Home className="w-6 h-6" />,
            placeholder: 'kWh consumidos en casa/mes',
            factor: '0.45 kg CO₂e por kWh',
            color: 'from-yellow-500 to-orange-500',
            bgColor: 'bg-yellow-50',
            iconColor: 'text-yellow-600'
        },
        {
            key: 'alimentacion',
            title: 'Alimentación',
            icon: <Utensils className="w-6 h-6" />,
            placeholder: 'Días con dieta promedio/mes',
            factor: '2.5 kg CO₂e por día',
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        },
        {
            key: 'vuelos',
            title: 'Vuelos',
            icon: <Plane className="w-6 h-6" />,
            placeholder: 'Kilómetros volados/mes',
            factor: '0.25 kg CO₂e por km',
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <Navbar />

            <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-900">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-6 py-20 text-center text-white">
                    <div className="flex items-center justify-center mb-6">
                        <Calculator className="w-16 h-16 mr-4 animate-pulse" />
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                            Calculadora
                        </h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Huella de Carbono Personal
                    </h2>
                    <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                        Mide tu impacto ambiental mensual 🌱
                    </p>
                    <div className="mt-8 bg-blue-100 rounded-2xl p-6 max-w-2xl mx-auto">
                        <p className="text-sm text-blue-800 font-medium">
                            <strong>Fórmula:</strong> Huella de Carbono (kg CO₂e) = Σ(Actividad × Factor de Emisión)
                        </p>
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
                                <TreePine className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-green-600">&lt;100</h3>
                                <p className="text-gray-600">kg CO₂e Excelente</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Meta personal mensual para un impacto mínimo</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-500 rounded-full p-3 mr-4">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-blue-600">500</h3>
                                <p className="text-gray-600">kg CO₂e Promedio</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Huella promedio mensual de una persona</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-500 rounded-full p-3 mr-4">
                                <TrendingDown className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-purple-600">{totalEmissions.toFixed(0)}</h3>
                                <p className="text-gray-600">Tu huella actual</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Resultado de tus actividades mensuales</p>
                    </div>
                </div>
            </div>

            {/* Calculator Section */}
            <div className="container mx-auto px-6 pb-16">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Ingresa tus Actividades Mensuales
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Completa la información de tus actividades del mes para calcular tu huella de carbono personal.
                    </p>
                </div>

                {/* Input Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {inputCategories.map((category, index) => (
                        <div
                            key={category.key}
                            className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${category.bgColor}`}
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            
                            <div className="relative p-6">
                                <div className="flex items-center mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                                        {category.icon}
                                    </div>
                                    <h4 className={`text-lg font-bold ${category.iconColor} ml-4`}>
                                        {category.title}
                                    </h4>
                                </div>
                                
                                <input
                                    type="number"
                                    placeholder={category.placeholder}
                                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 bg-white shadow-inner"
                                    value={activities[category.key] || ''}
                                    onChange={(e) => handleInputChange(category.key, e.target.value)}
                                />
                                
                                <div className="mt-3 flex items-center justify-between">
                                    <p className="text-sm text-gray-500">Factor: {category.factor}</p>
                                    <div className={`text-lg font-bold ${category.iconColor} bg-white bg-opacity-60 rounded-full px-3 py-1 text-xs`}>
                                        {(activities[category.key] * emissionFactors[category.key]).toFixed(1)} kg CO₂e
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Results Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Resultados de tu Huella de Carbono</h2>
                    
                    {/* Total Emissions Display */}
                    <div className="text-center mb-8">
                        <div className={`inline-block p-8 bg-gradient-to-r ${emissionLevel.gradient} rounded-3xl shadow-2xl text-white`}>
                            <p className="text-sm opacity-90 mb-2">Tu Huella de Carbono Mensual</p>
                            <p className="text-5xl font-bold mb-2">{totalEmissions.toFixed(1)}</p>
                            <p className="text-xl opacity-90">kg CO₂e</p>
                        </div>
                    </div>

                    {/* Emission Level */}
                    <div className={`p-6 rounded-2xl ${emissionLevel.bg} mb-8 border-2 border-opacity-20`}>
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-2">Nivel de Impacto Ambiental</p>
                            <p className={`text-3xl font-bold ${emissionLevel.color}`}>{emissionLevel.level}</p>
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-4 mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Desglose por Actividad</h3>
                        
                        {inputCategories.map((category) => (
                            <div key={category.key} className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                                <div className="flex items-center">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white mr-3`}>
                                        {category.icon}
                                    </div>
                                    <span className="text-gray-700 font-medium">{category.title}</span>
                                </div>
                                <span className="font-bold text-gray-800 text-lg">
                                    {(activities[category.key] * emissionFactors[category.key]).toFixed(1)} kg CO₂e
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Quick Tips */}
                    <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border-2 border-green-200">
                        <h4 className="font-bold text-green-800 mb-3 flex items-center">
                            <Leaf className="w-5 h-5 mr-2" />
                            💡 Consejo Personalizado
                        </h4>
                        <p className="text-green-700 leading-relaxed">
                            {totalEmissions < 100 
                                ? "¡Excelente! Tu huella es muy baja. Mantén estos hábitos sostenibles y considera compartir tus buenas prácticas con otros."
                                : totalEmissions < 500
                                ? "Buen trabajo, pero puedes mejorar. Considera usar más el transporte público, bicicleta o caminar para distancias cortas."
                                : totalEmissions < 1000
                                ? "Tu huella está en nivel moderado. Intenta reducir los vuelos, optimizar el consumo energético y considerar una dieta más sostenible."
                                : "Tu huella es alta. Te recomendamos encarecidamente reducir vuelos, mejorar la eficiencia energética del hogar y evaluar opciones de transporte más sostenibles."
                            }
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-900 py-16">
                <div className="container mx-auto px-6 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Cada Acción Cuenta para el Planeta
                    </h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                        Tu huella de carbono es el primer paso. Ahora es momento de actuar y reducir tu impacto ambiental.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-black">
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="font-semibold">🌱 Reduce tu huella</span>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="font-semibold">♻️ Consume responsable</span>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                            <span className="font-semibold">🚴 Movilidad sostenible</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex items-center justify-center mb-6">
                        <Calculator className="w-8 h-8 mr-3" />
                        <span className="text-xl font-semibold">Calculadora de Huella de Carbono</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Herramienta educativa para la conciencia ambiental
                    </p>
                    <div className="border-t border-gray-700 pt-6">
                        <p className="text-sm text-gray-500">
                            Los factores de emisión son aproximados. Para cálculos más precisos, consulta fuentes oficiales.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}