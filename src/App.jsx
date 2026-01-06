import React, { useState, useEffect } from 'react';
import { 
  Dna, 
  ShieldCheck, 
  Truck, 
  Camera, 
  Globe, 
  ChevronRight, 
  Menu, 
  X,
  FileText,
  Lock,
  Search,
  Activity,
  Award,
  Users,
  Plus,
  Filter,
  MoreHorizontal,
  Download,
  PlayCircle
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('genetics');

  // --- ESTADO DEL DASHBOARD INTERACTIVO ---
  const [dashboardView, setDashboardView] = useState('overview'); // overview, genetics, media, logistics, docs, new-entry
  const [stats, setStats] = useState({ available: 124, reserved: 45 });

  // Simulación de datos en vivo
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        available: prev.available + (Math.random() > 0.5 ? 1 : -1),
        reserved: prev.reserved
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- COMPONENTES DEL DASHBOARD ---

  // 1. Vista de Resumen (La original)
  const DashboardOverview = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-in fade-in duration-500">
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 shadow-sm">
            <div className="text-slate-400 text-sm mb-1">Ejemplares Disponibles</div>
            <div className="text-3xl font-bold text-white">{stats.available}</div>
            <div className="text-emerald-500 text-xs mt-2 flex items-center gap-1">↑ 12% vs mes anterior</div>
        </div>
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 shadow-sm">
            <div className="text-slate-400 text-sm mb-1">En Proceso de Envío</div>
            <div className="text-3xl font-bold text-white">8</div>
            <div className="text-amber-500 text-xs mt-2">Requieren validación sanitaria</div>
        </div>
        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 shadow-sm">
            <div className="text-slate-400 text-sm mb-1">Ingresos (Mes)</div>
            <div className="text-3xl font-bold text-white">$12,450</div>
            <div className="text-emerald-500 text-xs mt-2">↑ 5% vs mes anterior</div>
        </div>
      </div>

      <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
        <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
            <span className="font-bold text-white">Últimos Registros (Kelso / Hatch)</span>
            <span className="text-amber-500 text-sm cursor-pointer hover:underline">Ver todo</span>
        </div>
        <div className="divide-y divide-slate-800">
            {[1, 2, 3].map((item) => (
                <div key={item} className="px-6 py-4 flex items-center justify-between hover:bg-slate-900/50 transition-colors">
                    <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
                        <Dna size={16} />
                    </div>
                    <div>
                        <div className="text-white font-medium">Lote #2024-{item}89</div>
                        <div className="text-slate-500 text-xs">Kelso Cardinal • 18 meses</div>
                    </div>
                    </div>
                    <div className="flex items-center gap-4">
                    <span className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded text-xs border border-emerald-500/20">Disponible</span>
                    <span className="text-slate-400 text-sm font-mono">$450.00</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  );

  // 2. Vista de Genética (Tabla)
  const DashboardGenetics = () => (
    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden animate-in fade-in duration-300">
      <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                <input type="text" placeholder="Buscar por placa..." className="bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-amber-500" />
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-300 hover:text-white"><Filter size={14}/> Filtros</button>
        </div>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-900 text-slate-400 font-medium border-b border-slate-800">
            <tr>
                <th className="px-6 py-3">ID Placa</th>
                <th className="px-6 py-3">Raza / Línea</th>
                <th className="px-6 py-3">Edad</th>
                <th className="px-6 py-3">Padres</th>
                <th className="px-6 py-3">Estado</th>
                <th className="px-6 py-3"></th>
            </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 text-slate-300">
            {[
                { id: 'MX-992', race: 'Sweater 5000', age: '14 mo', p: 'US-88 / MX-12', st: 'Cría' },
                { id: 'MX-993', race: 'Kelso Cardinal', age: '18 mo', p: 'US-99 / MX-02', st: 'Venta' },
                { id: 'MX-994', race: 'Hatch Leiper', age: '12 mo', p: 'US-21 / MX-44', st: 'Venta' },
                { id: 'MX-995', race: 'Albany', age: '22 mo', p: 'US-01 / MX-10', st: 'Exhibición' },
                { id: 'MX-996', race: 'Radio', age: '10 mo', p: 'US-55 / MX-99', st: 'Cría' },
            ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-900/30 transition-colors group">
                    <td className="px-6 py-4 font-mono text-amber-500">{row.id}</td>
                    <td className="px-6 py-4 font-bold text-white">{row.race}</td>
                    <td className="px-6 py-4">{row.age}</td>
                    <td className="px-6 py-4 text-xs text-slate-500">{row.p}</td>
                    <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs border ${row.st === 'Venta' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-blue-500/10 text-blue-500 border-blue-500/20'}`}>
                            {row.st}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-white"><MoreHorizontal size={16}/></button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );

  // 3. Vista Multimedia
  const DashboardMedia = () => (
    <div className="grid grid-cols-3 gap-4 animate-in fade-in duration-300">
        {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-video bg-slate-950 rounded-lg border border-slate-800 relative group overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-800/40 transition-all">
                    <PlayCircle className="text-white/50 w-10 h-10 group-hover:text-amber-500 group-hover:scale-110 transition-all" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs font-bold text-white">Entrenamiento Lote #{i}</div>
                    <div className="text-[10px] text-slate-400">Hace 2 días • 4K HDR</div>
                </div>
            </div>
        ))}
    </div>
  );

  // 4. Vista Envíos
  const DashboardLogistics = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
        {[
            { id: '#TRK-8821', dest: 'Texas, USA', status: 'En Tránsito', step: 3 },
            { id: '#TRK-8822', dest: 'Jalisco, MX', status: 'Documentación', step: 1 },
        ].map((ship, i) => (
            <div key={i} className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="font-bold text-white text-lg">{ship.dest}</div>
                        <div className="text-sm text-slate-500 font-mono">{ship.id}</div>
                    </div>
                    <span className="px-3 py-1 bg-amber-600/20 text-amber-500 rounded-full text-xs font-bold border border-amber-600/30">{ship.status}</span>
                </div>
                <div className="relative pt-4">
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-600 transition-all duration-1000" style={{ width: `${ship.step * 33}%` }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 mt-2 uppercase tracking-wider">
                        <span>Registro</span>
                        <span>Veterinario</span>
                        <span>Aduana</span>
                        <span>Entregado</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <img src="favicon.ico" alt="JC Farm Reyes Logo" className="w-10 h-10 rounded-lg shadow-lg shadow-amber-600/20" />
              <span className="font-bold text-2xl tracking-tight text-white">JC Farm <span className="text-amber-500">Reyes</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-sm font-medium hover:text-amber-500 transition-colors">Soluciones</a>
              <a href="#dashboard-preview" className="text-sm font-medium hover:text-amber-500 transition-colors">Plataforma</a>
              <a href="#catalog" className="text-sm font-medium hover:text-amber-500 transition-colors">Catálogo Demo</a>
              <a href="#compliance" className="text-sm font-medium hover:text-amber-500 transition-colors flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Legalidad
              </a>
            </div>

            <div className="hidden md:flex space-x-4 items-center">
              <button className="text-slate-300 hover:text-white font-medium text-sm transition-colors">
                Log In
              </button>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40 transform hover:-translate-y-0.5">
                Empezar Ahora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top-5 duration-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md hover:bg-slate-800 text-base font-medium">Soluciones</a>
              <a href="#dashboard-preview" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md hover:bg-slate-800 text-base font-medium">Plataforma</a>
              <a href="#compliance" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md hover:bg-slate-800 text-base font-medium">Legalidad</a>
              <div className="pt-4 mt-4 border-t border-slate-800">
                 <button className="block w-full text-center py-3 bg-amber-600 rounded-lg font-bold text-white mb-3">Registrar Criadero</button>
                 <button className="block w-full text-center py-3 bg-slate-800 rounded-lg text-slate-300">Iniciar Sesión</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none opacity-30">
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-600/30 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-indigo-900/40 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-sm font-medium text-amber-400 mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 mr-2 animate-pulse"></span>
            SaaS v2.0 &bull; Gestión Genética Avanzada
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Excelencia en la <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 drop-shadow-sm">
              Crianza de Alto Registro
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            La plataforma definitiva para criadores profesionales. Gestiona linajes, certificados digitales y transferencias seguras bajo estrictos estándares de cumplimiento legal.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-amber-600/20 transition-all flex items-center justify-center group">
              Explorar Catálogo <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-900/50 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-slate-300 rounded-xl font-bold text-lg transition-all backdrop-blur-md">
              Solicitar Demo
            </button>
          </div>

          {/* Stats teaser */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-800/50 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">12+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Razas Certificadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2.5k</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Ejemplares Registrados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Trazabilidad</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">US/MX</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Cobertura Legal</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- DASHBOARD PREVIEW (MOCKUP INTERACTIVO) --- */}
      <section id="dashboard-preview" className="py-20 bg-slate-950 relative border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Control Total de tu Criadero</h2>
            <p className="text-slate-400">Prueba la interfaz interactiva. Haz clic en el menú lateral para navegar.</p>
          </div>

          {/* SaaS Window Mockup */}
          <div className="relative rounded-xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden max-w-5xl mx-auto ring-1 ring-white/10 transition-all">
            {/* Window Controls */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
               </div>
               <div className="text-xs text-slate-600 font-mono flex items-center gap-2">
                 <Lock className="w-3 h-3" />
                 app.jcfarmreyes.com/dashboard/{dashboardView}
               </div>
               <div className="w-16"></div>
            </div>

            {/* Dashboard Layout */}
            <div className="flex h-[550px] overflow-hidden">
              
              {/* Sidebar Mockup */}
              <div className="hidden md:flex w-64 bg-slate-950 border-r border-slate-800 flex-col p-4 space-y-2">
                 <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 mt-2">Menu Principal</div>
                 
                 <button 
                    onClick={() => setDashboardView('overview')}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${dashboardView === 'overview' ? 'bg-amber-600/10 text-amber-500' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
                 >
                    <Activity size={18} /> Resumen
                 </button>

                 <button 
                    onClick={() => setDashboardView('genetics')}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${dashboardView === 'genetics' ? 'bg-amber-600/10 text-amber-500' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
                 >
                    <Dna size={18} /> Genética & Cría
                 </button>

                 <button 
                    onClick={() => setDashboardView('media')}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${dashboardView === 'media' ? 'bg-amber-600/10 text-amber-500' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
                 >
                    <Camera size={18} /> Multimedia
                 </button>

                 <button 
                    onClick={() => setDashboardView('logistics')}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${dashboardView === 'logistics' ? 'bg-amber-600/10 text-amber-500' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
                 >
                    <Truck size={18} /> Envíos
                 </button>

                 <button 
                    onClick={() => setDashboardView('docs')}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${dashboardView === 'docs' ? 'bg-amber-600/10 text-amber-500' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
                 >
                    <FileText size={18} /> Documentación
                 </button>
                 
                 <div className="mt-auto bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <div className="text-xs text-slate-500 mb-1">Estado de Membresía</div>
                    <div className="text-sm text-white font-bold flex items-center gap-2">
                       <Award className="text-amber-500 w-4 h-4" /> Profesional
                    </div>
                 </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-slate-900/50 p-6 md:p-8 overflow-y-auto relative">
                 {/* Header Dashboard */}
                 <div className="flex justify-between items-center mb-8">
                    <div>
                       <h3 className="text-2xl font-bold text-white capitalize">
                           {dashboardView === 'overview' && 'Vista General'}
                           {dashboardView === 'genetics' && 'Inventario Genético'}
                           {dashboardView === 'media' && 'Galería Multimedia'}
                           {dashboardView === 'logistics' && 'Rastreo de Envíos'}
                           {dashboardView === 'docs' && 'Documentos Legales'}
                           {dashboardView === 'new-entry' && 'Nuevo Registro'}
                       </h3>
                       <p className="text-slate-500 text-sm">Criadero: JC Farm Reyes</p>
                    </div>
                    {dashboardView !== 'new-entry' && (
                        <button 
                            onClick={() => setDashboardView('new-entry')}
                            className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 flex items-center gap-2 transition-colors"
                        >
                        <Plus size={16} /> Nuevo Ejemplar
                        </button>
                    )}
                 </div>

                 {/* CONTENIDO DINAMICO DEL DASHBOARD */}
                 {dashboardView === 'overview' && <DashboardOverview />}
                 {dashboardView === 'genetics' && <DashboardGenetics />}
                 {dashboardView === 'media' && <DashboardMedia />}
                 {dashboardView === 'logistics' && <DashboardLogistics />}
                 
                 {/* 5. Vista Documentos (Inline simplificado) */}
                 {dashboardView === 'docs' && (
                     <div className="grid grid-cols-2 gap-4 animate-in fade-in">
                         {[1,2,3,4].map(i => (
                             <div key={i} className="flex items-center gap-4 p-4 bg-slate-950 border border-slate-800 rounded-lg hover:border-amber-500/50 cursor-pointer transition-colors group">
                                 <div className="p-3 bg-slate-900 rounded-lg text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors"><FileText size={20}/></div>
                                 <div>
                                     <div className="text-sm font-bold text-white">Certificado de Pureza #{2029+i}</div>
                                     <div className="text-xs text-slate-500">PDF • 2.4 MB</div>
                                 </div>
                                 <Download className="ml-auto text-slate-600 group-hover:text-white w-4 h-4"/>
                             </div>
                         ))}
                     </div>
                 )}

                 {/* 6. Vista Formulario Nuevo (Simulado) */}
                 {dashboardView === 'new-entry' && (
                     <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 animate-in zoom-in-95 duration-200">
                         <div className="grid grid-cols-2 gap-6 mb-6">
                             <div className="space-y-2">
                                 <label className="text-xs text-slate-400 uppercase font-bold">Raza Principal</label>
                                 <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white"><option>Kelso</option><option>Hatch</option></select>
                             </div>
                             <div className="space-y-2">
                                 <label className="text-xs text-slate-400 uppercase font-bold">Línea Materna</label>
                                 <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white" placeholder="Ej. Sweater 5000" />
                             </div>
                             <div className="space-y-2">
                                 <label className="text-xs text-slate-400 uppercase font-bold">Fecha Nacimiento</label>
                                 <input type="date" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-400" />
                             </div>
                             <div className="space-y-2">
                                 <label className="text-xs text-slate-400 uppercase font-bold">Carga Genética</label>
                                 <div className="h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center px-4 text-slate-500 text-sm">Calculando...</div>
                             </div>
                         </div>
                         <div className="flex gap-4 justify-end">
                             <button onClick={() => setDashboardView('overview')} className="px-4 py-2 text-slate-400 hover:text-white">Cancelar</button>
                             <button onClick={() => { setDashboardView('genetics'); alert('Ejemplar registrado en la Blockchain'); }} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold">Guardar Registro</button>
                         </div>
                     </div>
                 )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODULE FEATURES --- */}
      <section id="features" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Feature Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Módulos Inteligentes para la Crianza Moderna</h2>
              <div className="space-y-8">
                
                <div 
                  className={`p-6 rounded-xl cursor-pointer transition-all border ${activeTab === 'genetics' ? 'bg-slate-800 border-amber-600' : 'bg-transparent border-transparent hover:bg-slate-800/50'}`}
                  onClick={() => setActiveTab('genetics')}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${activeTab === 'genetics' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      <Dna size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Catálogo de Genética y Linajes</h3>
                      <p className="text-slate-400">
                        Registro detallado de razas (Hatch, Sweater, Albany). Árboles genealógicos interactivos y fichas técnicas con origen y características físicas.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className={`p-6 rounded-xl cursor-pointer transition-all border ${activeTab === 'media' ? 'bg-slate-800 border-amber-600' : 'bg-transparent border-transparent hover:bg-slate-800/50'}`}
                  onClick={() => setActiveTab('media')}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${activeTab === 'media' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      <Camera size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Galería Multimedia Segura</h3>
                      <p className="text-slate-400">
                        Alojamiento de videos 4K y fotografía profesional. Sistema de clasificación de contenido y marcas de agua automáticas para protección de derechos.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className={`p-6 rounded-xl cursor-pointer transition-all border ${activeTab === 'logistics' ? 'bg-slate-800 border-amber-600' : 'bg-transparent border-transparent hover:bg-slate-800/50'}`}
                  onClick={() => setActiveTab('logistics')}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${activeTab === 'logistics' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      <Truck size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Logística y Envíos</h3>
                      <p className="text-slate-400">
                        Checklist automatizado para transporte aéreo/terrestre. Generación de etiquetas, certificados sanitarios y tracking en tiempo real para el comprador.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Feature Visual */}
            <div className="relative h-full min-h-[500px] bg-slate-950 rounded-2xl border border-slate-800 p-8 flex items-center justify-center overflow-hidden group">
              {/* Dynamic Content based on Active Tab */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-slate-900/50"></div>
              
              {activeTab === 'genetics' && (
                <div className="relative z-10 w-full max-w-sm animate-in zoom-in duration-300">
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-white">Linaje: Hatch Leiper</h4>
                      <span className="text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded">Pura Sangre</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm border-b border-slate-800 pb-2">
                        <span className="text-slate-400">Padre:</span>
                        <span className="text-white">US-2021-X99</span>
                      </div>
                      <div className="flex justify-between text-sm border-b border-slate-800 pb-2">
                        <span className="text-slate-400">Madre:</span>
                        <span className="text-white">MX-2022-L01</span>
                      </div>
                      <div className="flex justify-between text-sm pb-2">
                        <span className="text-slate-400">Consanguinidad:</span>
                        <span className="text-emerald-400">Baja (12%)</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-800">
                      <div className="text-xs text-slate-500 mb-2">Árbol Genealógico</div>
                      <div className="flex justify-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-amber-600"></div>
                         <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-amber-600"></div>
                      </div>
                      <div className="h-4 w-px bg-slate-700 mx-auto"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-white mx-auto"></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'media' && (
                <div className="relative z-10 w-full max-w-sm animate-in zoom-in duration-300">
                   <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                      <div className="aspect-video bg-slate-800 flex items-center justify-center relative group-hover:bg-slate-800/80 transition-colors">
                         <Camera className="text-slate-600 w-12 h-12" />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center pl-1 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                               <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent"></div>
                            </div>
                         </div>
                      </div>
                      <div className="p-4">
                         <div className="text-white font-bold text-sm">Documental: Historia del Sweater</div>
                         <div className="text-slate-500 text-xs mt-1">4K • 15:30 min • Acceso Exclusivo</div>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'logistics' && (
                <div className="relative z-10 w-full max-w-sm animate-in zoom-in duration-300">
                   <div className="bg-white text-slate-900 p-6 rounded-xl shadow-2xl">
                      <div className="flex items-center gap-3 mb-4 border-b border-slate-200 pb-4">
                         <div className="bg-green-100 p-2 rounded-full">
                            <Truck className="text-green-600 w-6 h-6" />
                         </div>
                         <div>
                            <div className="font-bold text-lg">Envío Programado</div>
                            <div className="text-xs text-slate-500">Tracking: #LPRO-88291</div>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-green-500 border border-green-600"></div>
                            <span className="text-sm font-medium">Validación Veterinaria</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-green-500 border border-green-600"></div>
                            <span className="text-sm font-medium">Embalaje Certificado</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-slate-200 border border-slate-300 animate-pulse"></div>
                            <span className="text-sm text-slate-500">En Tránsito (Aeropuerto)</span>
                         </div>
                      </div>
                   </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* --- COMPLIANCE & LEGAL --- */}
      <section id="compliance" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-900 mb-8 border border-slate-800 rotate-3 hover:rotate-0 transition-transform">
            <ShieldCheck className="w-10 h-10 text-amber-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Compromiso con la Legalidad y el Bienestar Animal</h2>
          <p className="text-slate-400 mb-10 text-lg">
            JC Farm Reyes opera exclusivamente como una herramienta de gestión genética y preservación de especies. 
            Nuestra plataforma integra bloqueos geográficos automáticos y verificación de identidad para asegurar que todas las transacciones cumplan con las leyes locales y federales.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
               <Globe className="text-amber-600 mb-4 w-8 h-8" />
               <h4 className="text-white font-bold mb-2">Geo-Fencing</h4>
               <p className="text-sm text-slate-500">El contenido se filtra automáticamente según la legislación de la IP del usuario.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
               <Users className="text-amber-600 mb-4 w-8 h-8" />
               <h4 className="text-white font-bold mb-2">KYC Verificado</h4>
               <p className="text-sm text-slate-500">Validación de identidad obligatoria para criadores y compradores.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
               <FileText className="text-amber-600 mb-4 w-8 h-8" />
               <h4 className="text-white font-bold mb-2">Contratos Digitales</h4>
               <p className="text-sm text-slate-500">Generación automática de acuerdos de venta con cláusulas de uso ético.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <footer className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Profesionaliza tu Pasión</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Únete a la red más exclusiva de criadores. Gestión, venta y certificación en un solo lugar.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    className="flex-1 bg-slate-800/50 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-600"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-amber-600/10">
                    Crear Cuenta Gratis
                </button>
            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-sm">
                <div>
                   <h5 className="text-white font-bold mb-4">Plataforma</h5>
                   <ul className="space-y-2 text-slate-500">
                      <li><a href="#" className="hover:text-amber-500">Características</a></li>
                      <li><a href="#" className="hover:text-amber-500">Precios</a></li>
                      <li><a href="#" className="hover:text-amber-500">API</a></li>
                   </ul>
                </div>
                <div>
                   <h5 className="text-white font-bold mb-4">Legal</h5>
                   <ul className="space-y-2 text-slate-500">
                      <li><a href="#" className="hover:text-amber-500">Términos de Uso</a></li>
                      <li><a href="#" className="hover:text-amber-500">Política de Privacidad</a></li>
                      <li><a href="#" className="hover:text-amber-500">Bienestar Animal</a></li>
                   </ul>
                </div>
                <div>
                   <h5 className="text-white font-bold mb-4">Soporte</h5>
                   <ul className="space-y-2 text-slate-500">
                      <li><a href="#" className="hover:text-amber-500">Documentación</a></li>
                      <li><a href="#" className="hover:text-amber-500">Contacto</a></li>
                      <li><a href="#" className="hover:text-amber-500">Estado del Sistema</a></li>
                   </ul>
                </div>
                <div>
                   <div className="flex items-center gap-2 mb-4">
                      <img src="favicon.ico" alt="JC Farm Reyes Logo" className="w-6 h-6 rounded" />
                      <span className="text-white font-bold">JC Farm Reyes</span>
                   </div>
                   <p className="text-slate-500 text-xs">
                      © 2024 JC Farm Reyes Inc.<br/>
                      Todos los derechos reservados.
                   </p>
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;