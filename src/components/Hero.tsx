import { ChevronRight, Cpu } from 'lucide-react';

export const Hero = () => (
    <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 ring-1 ring-blue-700/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
                    Виробництво у Києві
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
                    Інноваційна електроніка <br />
                    <span className="text-blue-600">для індустрії 4.0</span>
                </h1>
                <p className="mt-6 text-lg text-slate-600 max-w-xl">
                    Проєктування та виготовлення високонавантажених систем автоматизації, друкованих плат та вбудованих рішень для українського бізнесу.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg">
                        Наші рішення <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg">
                        Технічна база
                    </button>
                </div>
            </div>

            <div className="relative aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                <Cpu className="w-32 h-32 text-blue-200 animate-pulse" />
            </div>
        </div>
    </section>
);
