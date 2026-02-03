"use client";

import { GlassCard } from "../ui/GlassCard";
// Accordion components replaced by custom implementation below

// For simplicity and speed, I'll build a custom simple accordion here since I didn't install shadcn
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-4 text-left hover:text-primary transition-colors"
            >
                <span className="font-medium text-lg">{question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <p className="pb-4 text-gray-400 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

const faqs = [
    {
        q: "Isso é o livro físico/digital?",
        a: "Não. Este é um material de ESTUDO autoral, criado para ajudar na fixação. O livro original não está incluso e deve ser adquirido separadamente se desejar.",
    },
    {
        q: "O que exatamente eu recebo?",
        a: "Você recebe acesso a uma plataforma com resumos em áudio, explicativos em vídeo, infográficos e quizzes de cada capítulo.",
    },
    {
        q: "Como recebo o acesso?",
        a: "Imediatamente após a aprovação do pagamento, você receberá um e-mail com seu login e senha.",
    },
    {
        q: "Funciona no celular?",
        a: "Sim! A plataforma é 100% responsiva e pensada para você usar no ônibus, na fila ou onde quiser.",
    },
    {
        q: "Preciso de muito tempo?",
        a: "Não. O método foi criado justamente para quem tem pouco tempo. 15 minutos por dia são suficientes.",
    },
    {
        q: "E se eu não gostar?",
        a: "Você tem 7 dias de garantia incondicional. Se achar que não valeu a pena, devolvemos seu dinheiro.",
    },
    {
        q: "Posso baixar os arquivos?",
        a: "Os infográficos e o book dinâmico sim. Áudios e vídeos são consumidos na nossa plataforma (streaming) para garantir a gamificação.",
    },
    {
        q: "Serve para iniciantes?",
        a: "Perfeitamente. A linguagem é simples, direta e focada em exemplos práticos do dia a dia.",
    },
    {
        q: "Quais as formas de pagamento?",
        a: "Aceitamos PIX (aprovação imediata) e Cartão de Crédito.",
    },
    {
        q: "Tem suporte?",
        a: "Sim, temos um canal de suporte por e-mail para tirar dúvidas sobre o acesso e a plataforma.",
    },
];

export function FAQ() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
                <GlassCard>
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                </GlassCard>
            </div>
        </section>
    );
}
