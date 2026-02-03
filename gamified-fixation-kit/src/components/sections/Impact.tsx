"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Impact() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>Resultados Reais</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-12">
                    O que muda na <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sua Vida?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            title: "Magnetismo Pessoal",
                            desc: "Você se torna aquela pessoa que todos gostam de ter por perto, sem forçar a barra.",
                        },
                        {
                            title: "Confiança Inabalável",
                            desc: "Acabe com o medo de iniciar conversas ou falar em público.",
                        },
                        {
                            title: "Influência Ética",
                            desc: "Aprenda a liderar e convencer pessoas sem ser manipulativo ou chato.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-3 text-gray-100">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
