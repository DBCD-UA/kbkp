import { Mail, Phone, MapPin, Cpu } from 'lucide-react';

export const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 text-left">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 font-bold text-xl text-white mb-6">
                        <Cpu className="w-6 h-6 text-blue-500" />
                        <span>КБ КП</span>
                    </div>
                    <p className="max-w-xs mb-6">
                        Ваш технологічний партнер у світі промислової та споживчої електроніки.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Контакти</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <Phone className="w-4 h-4 text-blue-500" /> +38 (044) 123-45-67
                        </li>
                        <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <Mail className="w-4 h-4 text-blue-500" /> info@electrocore.ua
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                            <span>Київ, Україна</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Розділи</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Виробничі потужності</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Кар'єра</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs">
                © {new Date().getFullYear()} КБ КП. Зроблено в Києві 🇺🇦
            </div>
        </div>
    </footer>
);
