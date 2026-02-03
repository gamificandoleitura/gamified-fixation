"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowRight, Smartphone, ShieldCheck } from "lucide-react";

export function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-hero-glow opacity-20 blur-[100px] -z-10" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10 opacity-10" />

            <div className="container mx-auto px-4 text-center z-10 max-w-4xl">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center gap-6"
                >
                    <motion.div variants={item}>
                        <Badge className="bg-primary/10 text-primary border-primary/20 backdrop-blur-md">
                            <ShieldCheck className="w-3 h-3 mr-2" />
                            Conteúdo Autoral • Funciona no Celular
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    >
                        Aprenda e fixe o essencial do livro <span className="text-glow text-primary">em minutos por dia</span>
                        <br />
                        <span className="text-2xl md:text-4xl font-normal text-gray-300 block mt-2">
                            com gamificação e progresso.
                        </span>
                    </motion.h1>

                    <motion.p variants={item} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        O kit definitivo para transformar habilidades sociais em hábito.
                        Áudio, vídeo, infográficos e quizzes para você praticar de verdade.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                        <a href="#offer">
                            <Button size="lg" glow className="w-full sm:w-auto group">
                                Quero começar agora
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href="#demo">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                Ver como funciona
                            </Button>
                        </a>
                    </motion.div>

                    <motion.div variants={item} className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                        <span className="flex items-center gap-1">
                            <Smartphone className="w-4 h-4" /> Acesso imediato no celular
                        </span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full" />
                        <span>R$ 49,90 pagamento único</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
