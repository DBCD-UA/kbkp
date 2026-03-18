import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Target, Users, Factory, Award } from 'lucide-react';

export default function AboutPage() {
    const stats = [
        { label: "Років досвіду", value: "12+", icon: <Award className="w-6 h-6" /> },
        { label: "Інженерів у штаті", value: "25+", icon: <Users className="w-6 h-6" /> },
        { label: "Кв.м виробництва", value: "1500", icon: <Factory className="w-6 h-6" /> },
        { label: "Проєктів реалізовано", value: "400+", icon: <Target className="w-6 h-6" /> },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-slate-900 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Про КБ КП</h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Ми створюємо майбутнє української електроніки, поєднуючи передові інженерні рішення з власним виробництвом.
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-16 bg-blue-600">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center text-white">
                                    <div className="flex justify-center mb-4 opacity-80">{stat.icon}</div>
                                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-blue-100 text-sm uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Text Content */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-8 text-gray-600">Наше бачення</h2>
                        <div className="prose prose-slate lg:prose-lg text-slate-600">
                            <p className="mb-6">
                                ElectroCore розпочала свій шлях у 2014 році як невелика лабораторія прототипування. Сьогодні ми — потужний R&D центр, що забезпечує повний цикл розробки: від ідеї та проєктування друкованих плат до серійного виробництва.
                            </p>
                            <p>
                                Наша локалізація дозволяє нам оперативно взаємодіяти з замовниками та забезпечувати найвищий контроль якості на кожному етапі монтажу компонентів.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}