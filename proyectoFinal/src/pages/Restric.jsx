import React, { useState } from 'react';
import { Globe, Shield, AlertTriangle, Lock, Eye, EyeOff, Search, Filter } from 'lucide-react';
import Navbar from "../components/navbar"

// Datos de restricciones por país
const restrictionsData = [
    {
        country: "China",
        flag: "🇨🇳",
        internetFreedom: 10,
        pornRestricted: true,
        socialMediaBlocked: ["Facebook", "Twitter", "YouTube", "Instagram"],
        mainRestrictions: [
        "Gran Firewall bloquea miles de sitios",
        "Censura estricta de contenido político",
        "Monitoreo constante de usuarios",
        "VPN ilegales para ciudadanos"
        ],
        level: "extreme"
    },
    {
        country: "Corea del Norte",
        flag: "🇰🇵",
        internetFreedom: 3,
        pornRestricted: true,
        socialMediaBlocked: ["Todos los sitios internacionales"],
        mainRestrictions: [
        "Solo intranet nacional disponible",
        "Internet solo para élite gubernamental",
        "Prohibición total de redes sociales",
        "Control absoluto de información"
        ],
        level: "extreme"
    },
    {
        country: "Irán",
        flag: "🇮🇷",
        internetFreedom: 16,
        pornRestricted: true,
        socialMediaBlocked: ["Facebook", "Twitter", "YouTube"],
        mainRestrictions: [
        "Filtrado extensivo de contenido",
        "Bloqueo de redes sociales occidentales",
        "Restricciones durante protestas",
        "Monitoreo de actividad online"
        ],
        level: "severe"
    },
    {
        country: "Arabia Saudí",
        flag: "🇸🇦",
        internetFreedom: 31,
        pornRestricted: true,
        socialMediaBlocked: [],
        mainRestrictions: [
        "Bloqueo estricto de contenido adulto",
        "Censura de contenido religioso crítico",
        "Restricciones a sitios de citas",
        "Monitoreo de disidentes"
        ],
        level: "severe"
    },
    {
        country: "Rusia",
        flag: "🇷🇺",
        internetFreedom: 33,
        pornRestricted: false,
        socialMediaBlocked: ["Facebook", "Instagram", "Twitter"],
        mainRestrictions: [
        "Bloqueo de plataformas occidentales",
        "Ley de 'agentes extranjeros'",
        "Restricciones durante conflictos",
        "Control de medios independientes"
        ],
        level: "moderate"
    },
    {
        country: "Turquía",
        flag: "🇹🇷",
        internetFreedom: 37,
        pornRestricted: true,
        socialMediaBlocked: [],
        mainRestrictions: [
        "Bloqueos temporales de redes sociales",
        "Censura de contenido político",
        "Restricciones durante crisis",
        "Bloqueo de sitios de noticias"
        ],
        level: "moderate"
    },
    {
        country: "India",
        flag: "🇮🇳",
        internetFreedom: 51,
        pornRestricted: true,
        socialMediaBlocked: ["TikTok", "WeChat"],
        mainRestrictions: [
        "Bloqueo de apps chinas",
        "Restricciones en Cachemira",
        "Bloqueo de sitios pornográficos",
        "Regulación de contenido religioso"
        ],
        level: "moderate"
    },
    {
        country: "Reino Unido",
        flag: "🇬🇧",
        internetFreedom: 79,
        pornRestricted: false,
        socialMediaBlocked: [],
        mainRestrictions: [
        "Verificación de edad para contenido adulto",
        "Ley de servicios online",
        "Regulación de redes sociales",
        "Bloqueo de sitios de piratería"
        ],
        level: "light"
    },
    {
        country: "Estados Unidos",
        flag: "🇺🇸",
        internetFreedom: 76,
        pornRestricted: false,
        socialMediaBlocked: [],
        mainRestrictions: [
        "Regulación de privacidad por estados",
        "Restricciones a TikTok (pendiente)",
        "Moderación de contenido",
        "Leyes estatales sobre menores online"
        ],
        level: "light"
    },
    {
        country: "Alemania",
        flag: "🇩🇪",
        internetFreedom: 77,
        pornRestricted: false,
        socialMediaBlocked: [],
        mainRestrictions: [
        "Ley NetzDG contra discurso de odio",
        "Restricciones de contenido nazi",
        "Regulación de datos personales",
        "Moderación obligatoria de contenido"
        ],
        level: "light"
    }
    ];

    const levelColors = {
    extreme: "bg-red-500",
    severe: "bg-orange-500",
    moderate: "bg-yellow-500",
    light: "bg-green-500"
    };

    const levelText = {
    extreme: "Extrema",
    severe: "Severa", 
    moderate: "Moderada",
    light: "Ligera"
    };

    export default function Restric() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterLevel, setFilterLevel] = useState("all");

    const filteredData = restrictionsData.filter(country => {
        const matchesSearch = country.country.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterLevel === "all" || country.level === filterLevel;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
            <Navbar />

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-900">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative container mx-auto px-6 py-20 text-center text-white">
            <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 mr-4 animate-pulse text-white" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Restricciones
                </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                de Internet por País
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                Explora las regulaciones y limitaciones del acceso a internet en todo el mundo 🌐
            </p>
            <div className="mt-8 bg-blue-100 rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-sm text-blue-800 font-medium">
                <strong>Libertad Digital:</strong> Índice basado en censura, vigilancia y restricciones de contenido
                </p>
            </div>
            </div>
            
            {/* Floating icons animation */}
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
                    <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-green-600">70+</h3>
                    <p className="text-gray-600">Libertad Alta</p>
                </div>
                </div>
                <p className="text-sm text-gray-500">Países con acceso libre a internet</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-100">
                <div className="flex items-center mb-4">
                <div className="bg-yellow-500 rounded-full p-3 mr-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-yellow-600">40-70</h3>
                    <p className="text-gray-600">Libertad Limitada</p>
                </div>
                </div>
                <p className="text-sm text-gray-500">Países con restricciones moderadas</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
                <div className="flex items-center mb-4">
                <div className="bg-red-500 rounded-full p-3 mr-4">
                    <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-red-600">&lt;40</h3>
                    <p className="text-gray-600">Libertad Restringida</p>
                </div>
                </div>
                <p className="text-sm text-gray-500">Países con censura severa</p>
            </div>
            </div>
        </div>

        {/* Controles de búsqueda y filtrado */}
        <div className="container mx-auto px-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar país..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 bg-white"
                />
                </div>
                <div className="relative">
                <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                    value={filterLevel}
                    onChange={(e) => setFilterLevel(e.target.value)}
                    className="pl-10 pr-8 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 bg-white"
                >
                    <option value="all">Todos los niveles</option>
                    <option value="extreme">Extrema</option>
                    <option value="severe">Severa</option>
                    <option value="moderate">Moderada</option>
                    <option value="light">Ligera</option>
                </select>
                </div>
            </div>
            </div>
        </div>

        {/* Grid de países */}
        <div className="container mx-auto px-6 pb-16">
            <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Explorar Restricciones por País
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conoce las diferentes regulaciones y limitaciones de acceso a internet en cada país.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((country, index) => (
                <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100"
                style={{
                    animationDelay: `${index * 100}ms`
                }}
                onClick={() => setSelectedCountry(country)}
                >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative p-6 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="text-xl font-bold text-gray-800">{country.country}</h3>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${levelColors[country.level]}`}>
                        {levelText[country.level]}
                    </div>
                    </div>

                    <div className="space-y-4">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600 font-medium">Libertad de Internet</span>
                        <span className="text-gray-800 font-bold">{country.internetFreedom}/100</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                            className={`h-3 rounded-full transition-all duration-500 ${
                            country.internetFreedom > 70 ? 'bg-gradient-to-r from-green-500 to-green-600' : 
                            country.internetFreedom > 40 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 
                            'bg-gradient-to-r from-red-500 to-red-600'
                            }`}
                            style={{ width: `${country.internetFreedom}%` }}
                        ></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium">Contenido Adulto</span>
                        <div className="flex items-center space-x-2">
                        {country.pornRestricted ? (
                            <>
                            <EyeOff className="w-4 h-4 text-red-500" />
                            <span className="text-red-500 font-medium">Restringido</span>
                            </>
                        ) : (
                            <>
                            <Eye className="w-4 h-4 text-green-500" />
                            <span className="text-green-500 font-medium">Permitido</span>
                            </>
                        )}
                        </div>
                    </div>

                    {country.socialMediaBlocked.length > 0 && (
                        <div>
                        <span className="text-gray-600 font-medium text-sm">Redes Sociales Bloqueadas:</span>
                        <div className="mt-2 flex flex-wrap gap-1">
                            {country.socialMediaBlocked.slice(0, 3).map((platform, idx) => (
                            <span key={idx} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-lg border border-red-200">
                                {platform}
                            </span>
                            ))}
                            {country.socialMediaBlocked.length > 3 && (
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-lg border border-red-200">
                                +{country.socialMediaBlocked.length - 3} más
                            </span>
                            )}
                        </div>
                        </div>
                    )}

                    <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-4 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                        Ver Detalles Completos
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Modal de detalles */}
        {selectedCountry && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-100 shadow-2xl">
                <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                    <span className="text-4xl">{selectedCountry.flag}</span>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{selectedCountry.country}</h2>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white mt-1 ${levelColors[selectedCountry.level]}`}>
                        Restricción {levelText[selectedCountry.level]}
                        </div>
                    </div>
                    </div>
                    <button
                    onClick={() => setSelectedCountry(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    >
                    ×
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                        Principales Restricciones
                    </h3>
                    <ul className="space-y-2">
                        {selectedCountry.mainRestrictions.map((restriction, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                            <span className="text-red-500 mr-2 font-bold">•</span>
                            {restriction}
                        </li>
                        ))}
                    </ul>
                    </div>

                    {selectedCountry.socialMediaBlocked.length > 0 && (
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Lock className="w-5 h-5 mr-2 text-red-600" />
                        Plataformas Bloqueadas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                        {selectedCountry.socialMediaBlocked.map((platform, idx) => (
                            <span key={idx} className="px-3 py-2 bg-red-100 text-red-800 rounded-xl border border-red-200 font-medium">
                            {platform}
                            </span>
                        ))}
                        </div>
                    </div>
                    )}

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-blue-600" />
                        Estadísticas Detalladas
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="text-gray-700 font-medium">Índice de Libertad de Internet</span>
                        <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                                className={`h-2 rounded-full ${
                                selectedCountry.internetFreedom > 70 ? 'bg-green-500' : 
                                selectedCountry.internetFreedom > 40 ? 'bg-yellow-500' : 
                                'bg-red-500'
                                }`}
                                style={{ width: `${selectedCountry.internetFreedom}%` }}
                            ></div>
                            </div>
                            <span className="text-gray-800 font-bold">{selectedCountry.internetFreedom}/100</span>
                        </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="text-gray-700 font-medium">Contenido Adulto</span>
                        <span className={`font-bold ${selectedCountry.pornRestricted ? 'text-red-600' : 'text-green-600'}`}>
                            {selectedCountry.pornRestricted ? 'Restringido' : 'Permitido'}
                        </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="text-gray-700 font-medium">Plataformas Bloqueadas</span>
                        <span className="text-gray-800 font-bold">{selectedCountry.socialMediaBlocked.length}</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-900 py-16">
            <div className="container mx-auto px-6 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                La Libertad Digital es un Derecho Fundamental
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                El acceso libre a la información es esencial para el desarrollo humano y la democracia global.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-black">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                <span className="font-semibold">🌐 Internet libre</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                <span className="font-semibold">🔓 Sin censura</span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3">
                <span className="font-semibold">📱 Acceso universal</span>
                </div>
            </div>
            </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 mr-3" />
                <span className="text-xl font-semibold">Mapa Global de Restricciones de Internet</span>
            </div>
            <p className="text-gray-400 mb-4">
                Información educativa sobre libertad digital y censura online
            </p>
            <div className="border-t border-gray-700 pt-6">
                <p className="text-sm text-gray-500">
                Los datos son aproximados y pueden cambiar. Consulta fuentes oficiales para información actualizada.
                </p>
            </div>
            </div>
        </footer>
        </div>
    );
}