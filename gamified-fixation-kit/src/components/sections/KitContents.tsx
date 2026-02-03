"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Mic2, Mic, Image as ImageIcon, Book, Video, Gamepad2 } from "lucide-react";

const cards = [
    {
        icon: Mic2,
        title: "Áudio Flash (1min)",
        desc: "Resumo ultra-rápido para revisar antes de uma reunião ou conversa importante.",
        color: "text-cyan-400",
    },
    {
        icon: Mic,
        title: "Áudio Master (15min)",
        desc: "Aprofundamento detalhado com exemplos práticos e narração envolvente.",
        color: "text-blue-400",
    },
    {
        icon: ImageIcon,
        title: "Infográfico Mental",
        desc: "Mapas visuais de alta resolução para quem tem memória fotográfica.",
        color: "text-purple-400",
    },
    {
        icon: Book,
        title: "Book Dinâmico",
        desc: "Leitura fluida com destaques, sem enrolação. O néctar do conteúdo.",
        color: "text-pink-400",
    },
    {
        icon: Video,
        title: "Vídeo Aula (5min)",
        desc: "Explicação didática com animações para ver a técnica em ação.",
        color: "text-red-400",
    },
    {
        icon: Gamepad2,
        title: "Gamificação Total",
        desc: "Sistema de XP, níveis e estrias (streak) para viciar em aprender.",
        color: "text-yellow-400",
        special: true,
    },
];

export function KitContents() {
    return (
        <section className="py-20 bg-black/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">O que você recebe em cada capítulo</h2>
                    <p className="text-gray-400">Todo o arsenal para garantir que você aprenda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard
                                hoverEffect
                                className={`h-full border-t-2 ${card.special ? "border-t-yellow-400 bg-yellow-400/5" : "border-t-transparent"}`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-lg bg-white/5 ${card.color}`}>
                                        <card.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-semibold text-lg">{card.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
