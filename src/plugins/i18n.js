import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        welcome: 'Welcome',
        goodbye: 'Goodbye',
        introduction: 'Hi, I’m Matt. Nice to meet you.',
        timelineTitle: '! My Work Experience ',
        introductionHome: "I'm 26 years old and I'm a developer who often seeks to improve myself! I currently have 5 years of experience and I try to share my knowledge as follows:",
        sevenCommFirstExperience: "Where it all began... 🚀 I started my career as a developer at 7COMm, where they opened their doors to me, believing in my potential. I joined as an intern, where I worked on an employee recognition program, which served as a great learning base, I worked with technologies such as AngularJS on the frontend (yes Angular 1) lol, and also with Nodejs on the backend.",
        qualicorpFirstExperience: 'In search of new challenges, I migrated to a new company, also being a consultancy I worked with the client Qualicorp, where I found a huge challenge that would be to create a system for selling health plans, I had my first professional contact with Mobile technologies, working in Flutter, where I fell in love with this world, in addition I worked in the backend of new resources, in addition to the sales site using Vuejs.',
        sevenCommSecondExperience: 'Returning to 7COMm with a new perspective, I first worked on a project where I was part of the team that created and implemented a payment scanning system in .NET, focused on improving payment dynamics and increasing efficiency in financial operations. A rules engine was also developed that automatically updates the rates of banking correspondents according to predefined criteria.',
        descricaoStacksPrincipais: 'I use these tools to work with robust platforms:',
        descricaoStacksSecundarias: 'I use smaller projects that allow me more creative freedom:'
    },
    pt: {
        welcome: 'Bem-vindo',
        goodbye: 'Adeus',
        introduction: 'Olá, me chamo Mateus. Prazer em conhecer você.',
        timelineTitle: '! Experiência Profissional',
        introductionHome: "Tenho 26 anos e sou um desenvolvedor que busca frequentemente se aperfeiçoar! No momento tenho 5 anos de experiência e tento dividir meus conhecimentos da seguinte maneira:",
        sevenCommFirstExperience: "Onde tudo começou... 🚀 Iniciei minha carreira como desenvolvedor a partir da 7COMm, onde abriu as portas acreditando no meu potencial, entrei para uma vaga de estagiário, onde atuei em um programa de reconhecimento de funcionários, onde serviu com uma base de grande aprendizado, trabalhei com tecnologias como AngularJS no frontend (sim o Angular 1) rs, e também com o Nodejs no backend.",
        qualicorpFirstExperience: 'Em busca de novos desafios, migrei para uma nova empresa, também sendo uma consultoria atuei junto ao cliente Qualicorp, onde encontrei um desafio enorme que seria criar um sistema para venda de planos de saúde, tive meu primeiro contato profissional com tecnologias Mobile, atuando em Flutter, onde me apaixonei por esse mundo, além disso atuei no backend de novos recursos, além do site de vendas utilizando o Vuejs.',
        sevenCommSecondExperience: 'Voltando para a 7COMm com uma nova perpectiva, trabalhei primeiro em um projeto onde fiz parte do time que criou e implementou um sistema de varrimento de pagamentos em .NET, focado em melhorar a dinâmica de pagamento e aumentar a eficiência nas operações financeiras. Também foi desenvolvido um motor de regras que atualiza automaticamente as taxas das correspondentes bancárias conforme critérios pré-definidos.',
        descricaoStacksPrincipais: 'Para trabalhar com plataforma robustas, utilizo essas ferramentas:',
        descricaoStacksSecundarias: 'Para desenvolvimento de projetos menores e que me permitem mais liberdade criativa utilizo:'
    }
}

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    messages,
})

export default i18n