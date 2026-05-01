import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from "next/link";
import Image from "next/image";
import { getPayload } from 'payload'
import config from '@/payload.config'
import {PayloadProduct} from "@/payload-types"; // проверь, чтобы путь вел к твоему файлу конфигурации

export default async function SolutionsPage() {

    const payload = await getPayload({ config })

    // Получаем список продуктов из коллекции 'products'
    const productsData = await payload.find({
        collection: 'products',
        depth: 1, // 1 уровень вложенности, чтобы достать данные картинки из коллекции Media
    })

    const products = productsData.docs as unknown as PayloadProduct[];
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Header />

            <main className="flex-1 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mb-12">
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Наші рішення</h1>
                        <p className="text-lg text-slate-600">
                            Ми розробляємо та виготовляємо широкий спектр електронних пристроїв: від простих датчиків до складних промислових систем.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.id}`}
                                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-500 transition-all shadow-sm"
                            >
                                {/* Контейнер для зображення */}
                                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                                    {product.galleryImage && typeof product.galleryImage === 'object' ? (
                                        <Image
                                            src={product.galleryImage.url} // Дістаємо саме URL з об'єкта
                                            alt={product.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-slate-400">
                                            No image
                                        </div>
                                    )}
                                </div>

                                <div className="p-8">
                                    <div className="text-xs font-bold uppercase text-blue-600 mb-2">
                                        {product.category}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-600 group-hover:text-blue-600 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-slate-600 mt-4 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="mt-6 text-sm font-bold text-blue-600">
                                        Детальніше →
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-16 flex justify-center gap-2">
                        <button className="px-4 py-2 border rounded-md bg-white text-slate-400 cursor-not-allowed">Назад</button>
                        <button className="px-4 py-2 border rounded-md bg-blue-600 text-white">1</button>
                        <button className="px-4 py-2 border rounded-md bg-white hover:bg-slate-50">2</button>
                        <button className="px-4 py-2 border rounded-md bg-white hover:bg-slate-50">Далі</button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
