"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Headphones, Eye, BookOpen, Repeat, Trophy } from "lucide-react";

const steps = [
    {
        icon: Headphones,
        title: "Ouça Rápido",
        desc: "Áudios resumidos de 1min para pegar a ideia central enquanto se desloca.",
    },
    {
        icon: Eye,
        title: "Visualize",
        desc: "Infográficos mentais que conectam os pontos chave visualmente.",
    },
    {
        icon: BookOpen,
        title: "Aprofunde",
        desc: "Áudios completos e book dinâmico para entender os nuances.",
    },
    {
        icon: Repeat,
        title: "Aplique",
        desc: "Desafios práticos do dia para usar a técnica na vida real.",
    },
    {
        icon: Trophy,
        title: "Teste",
        desc: "Quizzes rápidos para fixar o conhecimento e ganhar XP.",
    },
];

export function Solution() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        O Método <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ciclo de Fixação</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                        Você não só consome conteúdo. Você pratica, repete e fixa.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[2.5rem] left-10 right-10 h-1 bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10 -z-10" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center max-w-[200px]">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                viewport={{ once: true }}
                                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center shadow-lg relative z-10 mb-6 group hover:border-primary/50 transition-colors"
                            >
                                <step.icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                                <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>

                            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
