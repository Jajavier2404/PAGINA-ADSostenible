import React, { useState } from 'react';
import { Calculator, Leaf, Car, Home, Plane, Utensils } from 'lucide-react';
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
        if (emissions < 100) return { level: "Excelente", color: "text-green-600", bg: "bg-green-100" };
        if (emissions < 500) return { level: "Bueno", color: "text-yellow-600", bg: "bg-yellow-100" };
        if (emissions < 1000) return { level: "Moderado", color: "text-orange-600", bg: "bg-orange-100" };
        return { level: "Alto", color: "text-red-600", bg: "bg-red-100" };
    };

    const emissionLevel = getEmissionLevel(totalEmissions);

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
            
        <div className="container mx-auto px-4 max-w-4xl">
            
            
            {/* Header */}
            <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Calculadora de Huella de Carbono</h1>
            <p className="text-gray-600 text-lg">Calcula tu impacto ambiental mensual de forma simple</p>
            <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                Fórmula: Huella de Carbono (kg CO₂e) = Σ(Actividad × Factor de Emisión)
                </p>
            </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Calculadora */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-2 text-green-600" />
                Ingresa tus Actividades Mensuales
                </h2>

                <div className="space-y-6">
                
                {/* Transporte */}
                <div className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                    <div className="flex items-center mb-3">
                    <Car className="w-5 h-5 text-blue-600 mr-2" />
                    <label className="text-lg font-semibold text-gray-700">Transporte Terrestre</label>
                    </div>
                    <input
                    type="number"
                    placeholder="Kilómetros recorridos en auto/mes"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={activities.transporte || ''}
                    onChange={(e) => handleInputChange('transporte', e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Factor: 0.21 kg CO₂e por km</p>
                </div>

                {/* Energía */}
                <div className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                    <div className="flex items-center mb-3">
                    <Home className="w-5 h-5 text-yellow-600 mr-2" />
                    <label className="text-lg font-semibold text-gray-700">Consumo Energético</label>
                    </div>
                    <input
                    type="number"
                    placeholder="kWh consumidos en casa/mes"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={activities.energia || ''}
                    onChange={(e) => handleInputChange('energia', e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Factor: 0.45 kg CO₂e por kWh</p>
                </div>

                {/* Alimentación */}
                <div className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                    <div className="flex items-center mb-3">
                    <Utensils className="w-5 h-5 text-green-600 mr-2" />
                    <label className="text-lg font-semibold text-gray-700">Alimentación</label>
                    </div>
                    <input
                    type="number"
                    placeholder="Días con dieta promedio/mes"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={activities.alimentacion || ''}
                    onChange={(e) => handleInputChange('alimentacion', e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Factor: 2.5 kg CO₂e por día</p>
                </div>

                {/* Vuelos */}
                <div className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                    <div className="flex items-center mb-3">
                    <Plane className="w-5 h-5 text-purple-600 mr-2" />
                    <label className="text-lg font-semibold text-gray-700">Vuelos</label>
                    </div>
                    <input
                    type="number"
                    placeholder="Kilómetros volados/mes"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={activities.vuelos || ''}
                    onChange={(e) => handleInputChange('vuelos', e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">Factor: 0.25 kg CO₂e por km</p>
                </div>

                </div>
            </div>

            {/* Resultados */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Resultados</h2>
                
                {/* Total de emisiones */}
                <div className="text-center mb-6">
                <div className="inline-block p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl">
                    <p className="text-sm text-gray-600 mb-2">Tu Huella de Carbono Mensual</p>
                    <p className="text-4xl font-bold text-gray-800">{totalEmissions.toFixed(1)}</p>
                    <p className="text-lg text-gray-600">kg CO₂e</p>
                </div>
                </div>

                {/* Nivel de emisión */}
                <div className={`p-4 rounded-lg ${emissionLevel.bg} mb-6`}>
                <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Nivel de Impacto</p>
                    <p className={`text-2xl font-bold ${emissionLevel.color}`}>{emissionLevel.level}</p>
                </div>
                </div>

                {/* Desglose */}
                <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Desglose por Actividad</h3>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Transporte</span>
                    <span className="font-semibold text-gray-800">
                    {(activities.transporte * emissionFactors.transporte).toFixed(1)} kg CO₂e
                    </span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Energía</span>
                    <span className="font-semibold text-gray-800">
                    {(activities.energia * emissionFactors.energia).toFixed(1)} kg CO₂e
                    </span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Alimentación</span>
                    <span className="font-semibold text-gray-800">
                    {(activities.alimentacion * emissionFactors.alimentacion).toFixed(1)} kg CO₂e
                    </span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Vuelos</span>
                    <span className="font-semibold text-gray-800">
                    {(activities.vuelos * emissionFactors.vuelos).toFixed(1)} kg CO₂e
                    </span>
                </div>
                </div>

                {/* Consejos rápidos */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">💡 Consejo Rápido</h4>
                <p className="text-sm text-green-700">
                    {totalEmissions < 100 
                    ? "¡Excelente! Mantén estos hábitos sostenibles."
                    : totalEmissions < 500
                    ? "Considera usar más el transporte público o bicicleta."
                    : "Intenta reducir los vuelos y optimiza el consumo energético en casa."
                    }
                </p>
                </div>
            </div>

            </div>

            {/* Footer informativo */}
            <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
                Los factores de emisión son aproximados. Para cálculos más precisos, consulta fuentes oficiales.
            </p>
            </div>

        </div>
        </div>
        </>
    );
}