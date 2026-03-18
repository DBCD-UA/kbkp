'use client';

import {useState} from 'react';
import Link from 'next/link';
import {Cpu} from 'lucide-react';
import {ContactModal} from './ContactModal';

export const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                        <Cpu className="w-8 h-8 text-blue-600"/>
                        <span className="text-gray-600">
                    КБ
                </span>
                        <span className="text-blue-600">
                    КП
                </span>
                    </Link>

                    <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                        <Link href="/products" className="hover:text-blue-600 transition-colors">
                            Рішення
                        </Link>
                        <Link href="/about" className="hover:text-blue-600 transition-colors">
                            Про компанію
                        </Link>
                    </nav>

                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all active:scale-95"
                    >
                        Зв’язатися
                    </button>
                </div>
            </header>

            <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
        </>
    );
};
