"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

const targetAudience = [
    "Quer melhorar a comunicação e networking.",
    "Sente que trava na hora de conversar.",
    "Precisa liderar equipes ou vender mais.",
    "Não tem paciência para ler livros longos.",
    "Gosta de aprender ouvindo (no trânsito/academia).",
];

const notFor = [
    "Acha que já sabe tudo sobre pessoas.",
    "Quer fórmulas mágicas de manipulação.",
    "Não está disposto a praticar 15min por dia.",
    "Prefere ler 300 páginas do jeito tradicional.",
    "Procura o PDF pirata do livro (não é isso!).",
];

export function Audience() {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-[#0A0A10]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Para quem é */}
                    <GlassCard className="border-t-4 border-t-green-500 bg-green-500/5">
                        <h3 className="text-2xl font-bold mb-6 text-green-400">Para quem é este kit</h3>
                        <ul className="space-y-4">
                            {targetAudience.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    {/* Para quem NÃO é */}
                    <GlassCard className="border-t-4 border-t-red-500 bg-red-500/5">
                        <h3 className="text-2xl font-bold mb-6 text-red-400">Para quem NÃO é</h3>
                        <ul className="space-y-4">
                            {notFor.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                    <span className="text-gray-500">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
