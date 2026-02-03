# Kit Gamificado de Fixação por Capítulo
> "Como Fazer Amigos e Influenciar Pessoas"

Este projeto é uma Landing Page otimizada para a venda do kit de estudo/fixação.

## 🚀 Como Rodar

1. Instale as dependências:
```bash
npm install
```

2. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠 Onde Editar (Customização)

### 1. Preço e Links de Checkout
- Vá em `src/components/sections/Offer.tsx`
- Edite o valor (atualmente R$ 49,90) 
- Troque `TODO_CHECKOUT_URL` pelo seu link real (Hotmart/Eduzz/Kiwify).

### 2. Textos e Copy
- Hero (título/promessa): `src/components/sections/Hero.tsx`
- Problemas: `src/components/sections/Problem.tsx`
- FAQ: `src/components/sections/FAQ.tsx`

### 3. Mídias (Placeholders)
- As imagens e ícones atuais são SVGs ou ícones da biblioteca `lucide-react`.
- Para adicionar imagens reais do produto (mockups), edite `src/components/sections/KitContents.tsx` ou `Hero.tsx`.

### 4. Contato e Legal
- Rodapé: `src/components/sections/Footer.tsx`
- Troque os links de Termos e Política.

## ⚠️ Compliance (Importante)
Esta página já inclui os avisos legais de que **NÃO** se trata da venda do livro, e sim de um material autoral de estudo. Mantenha esses avisos para evitar problemas com direitos autorais.
