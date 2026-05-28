<div align="center">
  <img src="src/app/favicon.ico" alt="Logo eskoria" width="300" />

# Eskoria OS (K.A.T. Terminal) - ARG Experience

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-warning?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

</div>
> Projeto desenvolvido com foco em criar uma **experiência imersiva e interativa (ARG)** para a banda de rock Eskoria. A aplicação simula um sistema operacional legado e corrompido, com engenharia de frontend voltada para estética hacker retro-futurista e brutalista.

---

## 🚀 Demo Online

👉 **Acesse o Sistema (Em breve):**
🔗 [#](https://www.google.com/search?q=%23)

---

## 📋 Sobre o Projeto

O **Eskoria OS** (Knowledge Ascension Terminal - K.A.T.) é uma Single Page Application (SPA) disfarçada de um sistema operacional antigo. O objetivo é engajar os fãs da banda de rock "Eskoria" através de um Alternate Reality Game (ARG), onde o usuário deve "hackear" o sistema para desbloquear um conteúdo de vídeo exclusivo.

O projeto foi construído com uma estética rigorosa: paleta restrita (preto absoluto, verde terminal, branco e vermelho erro), tipografia monoespaçada, elementos brutalistas, e efeitos visuais avançados que simulam monitores CRT, scanlines e colapsos do sistema (glitches) em tempo real, mantendo alta performance em desktops e dispositivos móveis.

---

## ✨ Funcionalidades

- 🖥️ **Simulação de SO (Máquina de Estados)** — Fluxo contínuo sem recarregamento de página, garantindo que o áudio e a imersão não sejam interrompidos.
- 🔒 **Boot & Tela de Bloqueio** — Interação inicial com animações pulsantes e interceptação global de eventos de teclado.
- 🌐 **Área de Trabalho Cibernética** — Wallpaper em camadas utilizando `mix-blend-mode` para mesclar imagens da banda com malhas de dados corrompidos.
- 🪟 **Sistema de Janelas K.A.T.** — Janelas flutuantes com opacidade estrita e desfoque, além de barra de tarefas funcional simulando um ambiente desktop.
- 👾 **Máscara ASCII Dinâmica** — Efeito especial no campo de senha onde os caracteres se embaralham freneticamente a cada 50ms durante a digitação.
- ⚠️ **Sequência de Glitch Temporizada** — Bloqueio de UI por 15 segundos com chuva de logs falsos, distorção de tela e aberração cromática.
- 🎬 **Reveal Cinematográfico** — Player de vídeo fullscreen minimalista acionado automaticamente após o colapso do sistema.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia               | Função                                                                                   |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| **Next.js (App Router)** | Framework principal para estruturação do ambiente React.                                 |
| **React**                | Construção de interfaces e hooks customizados (ex: `useAsciiMask`).                      |
| **TypeScript (strict)**  | Tipagem estática para garantir a integridade dos estados da máquina.                     |
| **Tailwind CSS**         | Estilização utilitária com uso intensivo de gradientes, filtros e blend modes nativos.   |
| **shadcn/ui**            | Componentes base desconstruídos e customizados para remover bordas e aplicar brutalismo. |
| **Zustand**              | Gerenciamento global e leve da Máquina de Estados (Views 1 a 6) do sistema operacional.  |
| **pnpm**                 | Gerenciador de pacotes eficiente e rápido.                                               |

---

## 🧩 Destaques Técnicos

- **Regra Estrita de Transparência de UI** — A arquitetura garante que qualquer janela em foco no sistema operacional mantenha rigidamente **90% de opacidade (`bg-black/90`)** combinada com `backdrop-blur-sm`. A transparência nunca é perdida, garantindo que a malha corrompida do wallpaper continue dando profundidade à interface.
- **Confinamento de Viewport Dinâmico** — Utilização de `100dvh` e `overflow-hidden` na raiz do projeto para impedir rolagens nativas do navegador, emulando com perfeição a trava de tela de um sistema operacional real, mesmo em navegadores mobile.
- **Padrão Rigoroso de Internacionalização de Código** — As regras de desenvolvimento exigem que a documentação (como este README e o arquivo de regras) seja escrita em **Português**, enquanto o versionamento (mensagens de commit geradas) deve ser obrigatoriamente escrito em **Inglês** seguindo o padrão Conventional Commits.
- **Otimização de Classes Tailwind** — Uso rigoroso das classes canônicas do Tailwind CSS para espaçamentos e filtros, evitando valores arbitrários soltos e garantindo um CSS compilado extremamente leve.

---

## 📁 Estrutura do Projeto

```text
eskoria-os/
├── docs/
│   └── regras-de-commit.md       # Regras do projeto (PT-BR) e padrão de commits (EN)
├── public/
│   ├── fonts/                    # Fontes monoespaçadas (JetBrains Mono, etc.)
│   └── images/                   # Assets da banda e texturas cibernéticas
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Injeção de fontes, metadados e trava de viewport
│   │   ├── page.tsx              # O "Cérebro" SPA: Controla a máquina de estados (Views 1-6)
│   │   └── globals.css           # Tailwind base, variáveis e scanlines CRT
│   │
│   ├── components/
│   │   ├── os/                   # Componentes estruturais do SO (BootScreen, Desktop, Taskbar)
│   │   ├── kat/                  # Componentes do Software interno (LoginForm, ProtocolMenu)
│   │   └── media/                # Player do clímax (VideoPlayer)
│   │
│   ├── hooks/
│   │   ├── useAsciiMask.ts       # Lógica do useEffect para a senha caótica
│   │   └── useOsState.ts         # Zustand store para gerenciar o avanço das telas
│   │
│   └── lib/
│       └── utils.ts              # Utilitários do Tailwind e shadcn
├── .claude/
│   └── rules                     # Diretrizes de IA para manutenção do design brutalista
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json

```

---

## 🚀 Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/GLemes25/eskoria-os.git

# Acesse a pasta
cd eskoria-os

# Instale as dependências
pnpm install

# Rodar projeto localmente
pnpm dev

```

> Acesse http://localhost:3000 para vivenciar a imersão.

---

### 👤 Autor

## Gabriel Lemes de Oliveira

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/gabriel-lemes-G25)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gabriellemes924@gmail.com)
[![Whatsapp](https://img.shields.io/badge/Whatsapp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5567991179190)
