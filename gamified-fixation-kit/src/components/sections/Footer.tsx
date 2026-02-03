"use client";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-black text-center text-sm text-gray-500">
            <div className="container mx-auto px-4 space-y-6">
                <p className="max-w-2xl mx-auto border border-white/10 p-4 rounded-lg bg-white/5 text-xs">
                    <strong>Aviso Legal:</strong> Este produto é um material educacional independente de análise e fixação.
                    Não possuímos qualquer vínculo com o autor Dale Carnegie ou com a editora detentora dos direitos do livro original.
                    O livro "Como Fazer Amigos e Influenciar Pessoas" não está incluído neste kit e deve ser adquirido separadamente.
                </p>

                <div className="flex justify-center gap-6">
                    <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
                    <a href="#" className="hover:text-primary transition-colors">Contato</a>
                </div>

                <p>Copyright © {new Date().getFullYear()} Fixação Gamificada. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
