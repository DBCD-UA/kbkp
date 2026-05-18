'use client';

import { useState } from 'react';
import { QuoteModal } from '@/components/QuoteModal';

interface Props {
    product: { id: string; title: string; category: string };
}

export const ProductActions = ({ product }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
            >
                Запитати комерційну пропозицію
            </button>
            <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} product={product} />
        </>
    );
};
