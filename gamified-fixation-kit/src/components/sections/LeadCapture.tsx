"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "../ui/Button";

export function LeadCapture() {
    return (
        <section className="py-20 bg-white/5 border-y border-white/5">
            <div className="container mx-auto px-4 max-w-2xl text-center">
                <div className="p-4 bg-white/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-2xl font-bold mb-4">Ainda com dúvida?</h2>
                <p className="text-gray-400 mb-8">
                    Receba uma amostra gratuita do Capítulo 1 no seu WhatsApp e veja se é para você.
                </p>

                <form className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Seu WhatsApp ou E-mail"
                        className="flex-1 px-6 py-4 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    <Button variant="secondary" className="whitespace-nowrap">
                        Quero receber amostra
                    </Button>
                </form>
                <p className="text-xs text-gray-600 mt-4">
                    Zero spam. Apenas conteúdo de valor.
                </p>
            </div>
        </section>
    );
}
