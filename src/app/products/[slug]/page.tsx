import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { CheckCircle2, ArrowLeft, Zap, ShieldCheck, Cpu } from 'lucide-react';
import Link from 'next/link';

export default async function ProductPage({params}: { params: Promise<{ slug: string }>
}) {
    const {slug} = await params;

    const product = products.find((p) => p.slug === slug);
    if (!product) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-1">
                {/* Хлібні крихти та кнопка назад */}
                <div className="bg-slate-50 border-b border-slate-200 py-4">
                    <div className="container mx-auto px-4">
                        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Назад до каталогу
                        </Link>
                    </div>
                </div>

                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* Секція зображення */}
                            <div className="sticky top-24">
                                <div className="relative aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-inner">
                                    <Image
                                        src={product.galleryImage}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                        priority // Пріоритет завантаження для LCP
                                    />
                                </div>
                                {/* Бейджи під фото */}
                                <div className="grid grid-cols-3 gap-4 mt-6">
                                    <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                                        <Zap className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">High Perf</span>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                                        <ShieldCheck className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">QC Passed</span>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                                        <Cpu className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">R&D Kyiv</span>
                                    </div>
                                </div>
                            </div>

                            {/* Інфо секція */}
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
                                    {product.category}
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                    {product.title}
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed mb-10 border-l-4 border-blue-600 pl-6">
                                    {product.fullDescription}
                                </p>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                            Ключові характеристики
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                    <span className="text-slate-700 font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <hr className="border-slate-100" />

                                    <div className="bg-slate-900 rounded-2xl p-8 text-white">
                                        <h4 className="text-xl font-bold mb-2">Зацікавлені у співпраці?</h4>
                                        <p className="text-slate-400 mb-6 text-sm">
                                            Ми готові адаптувати цей продукт під ваші технічні вимоги або розробити нове рішення з нуля.
                                        </p>
                                        <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
                                            Запитати комерційну пропозицію
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}