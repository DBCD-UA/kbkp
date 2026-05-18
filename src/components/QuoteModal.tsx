'use client';

import { useState } from 'react';
import { X, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    product: { id: string; title: string; category: string };
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

const EMPTY_FORM: FormData = { name: '', email: '', phone: '', company: '', message: '' };

export const QuoteModal = ({ isOpen, onClose, product }: Props) => {
    const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState('');

    if (!isOpen) return null;

    const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const validate = (): boolean => {
        const next: Partial<FormData> = {};
        if (!formData.name.trim()) next.name = "Вкажіть ваше ім'я";
        if (!formData.email.trim()) next.email = 'Вкажіть email';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Некоректний email';
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setServerError('');

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    productId: product.id,
                    productTitle: product.title,
                    productCategory: product.category,
                }),
            });

            if (!res.ok) throw new Error();

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setFormData(EMPTY_FORM);
                onClose();
            }, 2500);
        } catch {
            setServerError('Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами напряму.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                    {isSuccess ? (
                        <div className="py-12 text-center animate-in fade-in slide-in-from-bottom-4">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Надіслано!</h2>
                            <p className="text-slate-500">Ми зв&#39;яжемося з вами найближчим часом.</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Комерційна пропозиція</h2>
                                    <p className="text-sm text-slate-500 mt-1">
                                        Продукт: <span className="font-semibold text-slate-700">{product.title}</span>
                                    </p>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors shrink-0">
                                    <X className="w-6 h-6 text-slate-400" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                <Field label="Ваше ім'я *" error={errors.name}>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={set('name')}
                                        placeholder="Олександр Іваненко"
                                        className={inputClass(!!errors.name)}
                                    />
                                </Field>

                                <Field label="Email *" error={errors.email}>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={set('email')}
                                        placeholder="example@company.ua"
                                        className={inputClass(!!errors.email)}
                                    />
                                </Field>

                                <Field label="Телефон">
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={set('phone')}
                                        placeholder="+38 (0XX) XXX-XX-XX"
                                        className={inputClass(false)}
                                    />
                                </Field>

                                <Field label="Компанія">
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={set('company')}
                                        placeholder="ТОВ «Ваша компанія»"
                                        className={inputClass(false)}
                                    />
                                </Field>

                                <Field label="Коментар / технічні вимоги">
                                    <textarea
                                        rows={3}
                                        value={formData.message}
                                        onChange={set('message')}
                                        placeholder="Опишіть ваші вимоги, обсяг замовлення або запитання..."
                                        className={`${inputClass(false)} resize-none`}
                                    />
                                </Field>

                                {serverError && (
                                    <p className="flex items-center gap-2 text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">
                                        <AlertCircle className="w-4 h-4 shrink-0" /> {serverError}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/25 ${
                                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'active:scale-[0.98]'
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

const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border outline-none transition-all text-slate-700 placeholder:text-slate-400 ${
        hasError
            ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-400 focus:border-transparent'
            : 'border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
    }`;

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
    <div>
        <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">{label}</label>
        {children}
        {error && (
            <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5 ml-1 font-medium">
                <AlertCircle className="w-3 h-3" /> {error}
            </p>
        )}
    </div>
);
