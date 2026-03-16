import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Cpu, Zap, Radio, CircuitBoard } from 'lucide-react';

const products = [
    {
        id: 1,
        title: "Промисловий контролер EC-100",
        description: "Високопродуктивний контролер для автоматизації виробничих ліній з підтримкою протоколів Modbus та MQTT.",
        icon: <Cpu className="w-10 h-10 text-blue-600" />,
        category: "Автоматизація"
    },
    {
        id: 2,
        title: "Модуль бездротового зв'язку LoRa-Gate",
        description: "Енергоефективне рішення для передачі даних на великі відстані в системах розумного міста.",
        icon: <Radio className="w-10 h-10 text-blue-600" />,
        category: "Зв'язок"
    },
    {
        id: 3,
        title: "Плата керування живленням PowerBlock",
        description: "Інтелектуальна система розподілу живлення з захистом від перевантажень та віддаленим моніторингом.",
        icon: <Zap className="w-10 h-10 text-blue-600" />,
        category: "Енергетика"
    },
    {
        id: 4,
        title: "Вбудований обчислювальний модуль",
        description: "Компактна плата для задач штучного інтелекту та обробки відеопотоків у реальному часі.",
        icon: <CircuitBoard className="w-10 h-10 text-blue-600" />,
        category: "Обчислення"
    }
];

export default function SolutionsPage() {
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
                            >
                                <div className="bg-blue-50 p-4 rounded-xl shrink-0">
                                    {product.icon}
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                                        {product.category}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        {product.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {product.description}
                                    </p>
                                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                                        Детальні характеристики <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
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
