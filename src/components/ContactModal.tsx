'use client';

import { useState } from 'react';
import { X, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Будь ласка, вкажіть ваше ім'я";
        if (!formData.contact.trim()) newErrors.contact = "Вкажіть email або номер телефону";
        if (formData.contact.length < 5) newErrors.contact = "Контактна інформація занадто коротка";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Імітація відправки на бекенд
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Закриваємо через 2 секунди після успіху
        setTimeout(() => {
            setIsSuccess(false);
            onClose();
            setFormData({ name: '', contact: '', message: '' });
        }, 2500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-8">
                    {isSuccess ? (
                        <div className="py-12 text-center animate-in fade-in slide-in-from-bottom-4">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Надіслано!</h2>
                            <p className="text-slate-500">Ми зв'яжемося з вами найближчим часом.</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Зворотний зв’язок</h2>
                                    <p className="text-sm text-slate-500 mt-1">Залиште заявку</p>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <X className="w-6 h-6 text-slate-400" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                <div className="relative">
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Ваше ім’я</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData({...formData, name: e.target.value});
                                            if (errors.name) setErrors({...errors, name: ''});
                                        }}
                                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-gray-600 placeholder:text-gray-400 ${
                                            errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                                        }`}
                                        placeholder="Олександр"
                                    />
                                    {errors.name && (
                                        <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 ml-1 font-medium">
                                            <AlertCircle className="w-3 h-3" /> {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1 ">Email / Телефон</label>
                                    <input
                                        type="text"
                                        value={formData.contact}
                                        onChange={(e) => {
                                            setFormData({...formData, contact: e.target.value});
                                            if (errors.contact) setErrors({...errors, contact: ''});
                                        }}
                                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-gray-600 placeholder:text-gray-400 ${
                                            errors.contact ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                                        }`}
                                        placeholder="+38 (0XX) XXX-XX-XX"
                                    />
                                    {errors.contact && (
                                        <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 ml-1 font-medium">
                                            <AlertCircle className="w-3 h-3" /> {errors.contact}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Ваш запит (опціонально)</label>
                                    <textarea
                                        rows={3}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none text-gray-600 placeholder:text-gray-400"
                                        placeholder="Опишіть ваше питання..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/25 ${
                                        isSubmitting ? 'opacity-70 cursor-not-allowed translate-y-0.5' : 'active:scale-[0.98]'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Відправляємо...
                                        </>
                                    ) : (
                                        <>Надіслати запит <Send className="w-4 h-4" /></>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};