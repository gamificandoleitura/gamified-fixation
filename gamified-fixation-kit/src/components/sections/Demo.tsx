"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic2, Mic, Image, Book, Video, Lock } from "lucide-react";
import { Button } from "../ui/Button";

const tabs = [
    { id: "audio-short", label: "Áudio Flash", icon: Mic2 },
    { id: "audio-long", label: "Áudio Master", icon: Mic },
    { id: "infographic", label: "Infográfico", icon: Image },
    { id: "book", label: "Book", icon: Book },
    { id: "video", label: "Vídeo", icon: Video },
];

export function Demo() {
    const [activeTab, setActiveTab] = useState("audio-short");

    return (
        <section id="demo" className="py-20 relative">
            <div className="absolute inset-0 bg-secondary/5 skew-y-3 -z-10 transform origin-top-left" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Experimente o Futuro</h2>
                    <p className="text-gray-400 mt-2">Veja como funciona o Capítulo 1.</p>
                </div>

                {/* Browser Mockup Container */}
                <div className="max-w-4xl mx-auto bg-[#0F0F16] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                    {/* Mock Browser Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="mx-auto text-xs text-gray-500 font-mono">capitulo-1-demo.app</div>
                    </div>

                    {/* Interface */}
                    <div className="p-4 md:p-8">
                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2 mb-8 justify-center">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                        ? "bg-primary text-black shadow-lg shadow-primary/20"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Content Display */}
                        <div className="bg-black/40 rounded-xl border border-white/5 p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-center w-full"
                                >
                                    {activeTab === "audio-short" && (
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-full max-w-sm h-12 bg-white/5 rounded-full flex items-center px-4 gap-4">
                                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
                                                    <Mic2 className="w-4 h-4 fill-black" />
                                                </div>
                                                <div className="h-1 bg-white/10 flex-1 rounded-full relative overflow-hidden">
                                                    <div className="absolute inset-y-0 left-0 w-1/3 bg-primary" />
                                                </div>
                                                <span className="text-xs text-mono text-gray-400">00:32 / 01:30</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Tocando: Resumo Flash - Princípio 1</p>
                                        </div>
                                    )}

                                    {activeTab === "audio-long" && (
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-900 to-black border border-white/10 flex items-center justify-center mb-4">
                                                <Mic className="w-12 h-12 text-blue-400" />
                                            </div>
                                            <div className="w-full max-w-md space-y-2">
                                                <div className="w-full h-2 bg-white/5 rounded-full"><div className="w-3/4 h-full bg-blue-500 rounded-full" /></div>
                                                <div className="flex justify-between text-xs text-gray-500">
                                                    <span>10:15</span>
                                                    <span>15:00</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "infographic" && (
                                        <div className="relative group cursor-pointer">
                                            <div className="w-full max-w-md aspect-video bg-white/5 rounded-lg border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-gray-500 gap-2">
                                                <Image className="w-10 h-10 opacity-50" />
                                                <span className="text-sm">Preview Infográfico</span>
                                            </div>
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                                <span className="text-white font-medium flex items-center gap-2"><Lock className="w-4 h-4" /> Conteúdo Premium</span>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "book" && (
                                        <div className="w-full max-w-lg mx-auto bg-white text-gray-900 p-6 rounded-lg text-left font-serif shadow-lg relative">
                                            <h3 className="text-lg font-bold mb-2">O Segredo de Sócrates</h3>
                                            <p className="text-sm leading-relaxed mb-4">
                                                A melhor maneira de vencer uma discussão é evitá-la. <span className="bg-yellow-200 px-1 rounded">Ninguém ganha quando sai derrotado.</span>
                                            </p>
                                            <div className="h-2 w-full bg-gray-100 rounded mt-4" />
                                            <div className="h-2 w-2/3 bg-gray-100 rounded mt-2" />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-8">
                                                <Button size="sm">Continuar Lendo</Button>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "video" && (
                                        <div className="w-full max-w-lg aspect-video bg-black rounded-lg border border-white/10 flex items-center justify-center relative">
                                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full">
                                                <div className="w-1/4 h-full bg-red-500 rounded-full" />
                                            </div>
                                        </div>
                                    )}

                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="mt-8 text-center bg-gradient-to-r from-transparent via-white/5 to-transparent p-4 rounded-lg">
                            <p className="text-gray-300 mb-4">Gostou da prévia? Desbloqueie o kit completo.</p>
                            <a href="#offer">
                                <Button glow className="w-full sm:w-auto">
                                    Desbloquear por R$ 49,90 - Vitalício
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
