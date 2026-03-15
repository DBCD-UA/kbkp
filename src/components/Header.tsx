import { Cpu } from 'lucide-react';

export const Header = () => (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                <Cpu className="w-8 h-8 text-blue-600" />
                <span className="text-gray-600">
                    КБ
                </span>
                <span className="text-blue-600">
                    КП
                </span>
            </div>

            <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                <a href="#solutions" className="hover:text-blue-600 transition-colors">Рішення</a>
                <a href="#services" className="hover:text-blue-600 transition-colors">Послуги</a>
                <a href="#about" className="hover:text-blue-600 transition-colors">Про компанію</a>
            </nav>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all shadow-sm">
                Зв’язатися
            </button>
        </div>
    </header>
);
