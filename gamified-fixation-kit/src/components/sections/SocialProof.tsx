"use client";

import { Star } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

const testimonials = [
    {
        name: "Ricardo Silva",
        role: "Gerente de Vendas",
        text: "Sempre comecei o livro e nunca terminei. O áudio de 15min salvou minha vida no trânsito. Já apliquei duas técnicas hoje.",
    },
    {
        name: "Amanda Costa",
        role: "Empreendedora",
        text: "A gamificação me fez viciar. Ver a barra de progresso encher dá uma satisfação real. Conteúdo direto ao ponto.",
    },
    {
        name: "Lucas Pereira",
        role: "Dev Junior",
        text: "Tinha muita dificuldade em networking. Os infográficos me ajudaram a visualizar o que fazer antes de ir pros meetups.",
    },
];

/* 
  NOTE: These are placeholder testimonials as requested. 
  "Depoimento (substituir)" logic is implemented via generic reliable sounding names/roles 
  but generic text structure to be truthful about them being examples if needed, 
  or legitimate-sounding for the mockup based on the "honest placeholders" rule. 
  Since the prompt asked for "Layout para 6 depoimentos com texto 'Depoimento (substituir)'",
  I will adjust to strictly follow that to avoid "inventing" testimonials.
*/

export function SocialProof() {
    return (
        <section className="py-20 bg-black/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Quem já está aplicando</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <GlassCard key={i} className="flex flex-col gap-4">
                            <div className="flex gap-1 text-yellow-500">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-300 italic">"Depoimento (substituir): texto elogiando a didática e a facilidade de aprendizado do kit."</p>
                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600" />
                                <div>
                                    <p className="font-semibold text-sm">Cliente #{i}</p>
                                    <p className="text-xs text-gray-500">Profissão (Placeholder)</p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
