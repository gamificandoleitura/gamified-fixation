"use client";

import { Check, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";

export function Offer() {
    return (
        <section id="offer" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />

            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-black/80 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)]">
                    {/* Neon decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-[2px]" />

                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Acesso Vitalício</h2>
                        <div className="flex items-center justify-center gap-4 text-gray-400 line-through text-xl">
                            R$ 197,90
                        </div>
                        <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                            R$ 49,90
                        </div>
                        <p className="text-primary font-medium">Pagamento único • Acesso imediato</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <ul className="space-y-3">
                            {[
                                "Kit Completo (Todos os capítulos)",
                                "Áudios Resumo + Detalhados",
                                "Infográficos de alta resolução",
                                "Book Dinâmico autoral",
                                "Vídeos didáticos"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="p-1 rounded-full bg-primary/20 text-primary">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-3">
                            {[
                                "Gamificação (XP e Níveis)",
                                "Acesso Vitalício",
                                "Atualizações futuras inclusas",
                                "Garantia de 7 dias",
                                "Suporte por email"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="p-1 rounded-full bg-secondary/20 text-secondary">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 max-w-sm mx-auto">
                        <a
                            href="TODO_CHECKOUT_URL"
                            className="block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" glow className="w-full text-lg h-16 animate-pulse hover:animate-none">
                                COMPRAR AGORA
                            </Button>
                        </a>

                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Garantia incondicional de 7 dias</span>
                        </div>

                        <p className="text-xs text-center text-gray-600">
                            Pagamento seguro via PIX ou Cartão de Crédito.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
