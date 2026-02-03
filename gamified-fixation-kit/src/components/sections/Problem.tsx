"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Brain, Clock, Zap, Target } from "lucide-react";

const problems = [
    {
        icon: Clock,
        title: "Falta de Tempo",
        desc: "Ler um livro inteiro exige horas que você não tem na rotina corrida.",
    },
    {
        icon: Brain,
        title: "Leitura Passiva",
        desc: "Você lê, acha interessante, mas esquece 80% do conteúdo no dia seguinte.",
    },
    {
        icon: Target,
        title: "Falta de Aplicação",
        desc: "A teoria é linda, mas na hora H você trava e não sabe o que dizer.",
    },
    {
        icon: Zap,
        title: "Desmotivação",
        desc: "Começa empolgado e para na metade. A falta de progresso visível desanima.",
    },
];

export function Problem() {
    return (
        <section className="py-20 bg-black/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
                        Por que é tão difícil mudar?
                    </h2>
                    <p className="text-gray-400 mt-4">O problema não é você, é o método tradicional.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard className="h-full hover:bg-white/5 transition-colors border-l-4 border-l-red-500/50">
                                <p.icon className="w-10 h-10 text-red-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-200">{p.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
