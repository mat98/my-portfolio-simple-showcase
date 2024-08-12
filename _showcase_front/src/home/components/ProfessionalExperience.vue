<template>
    <q-page-container class="column">
        <span class="q-pb-sm">
            {{ sevenCommFirstExperience }}
        </span>
        <span class="q-pb-sm">
            {{ talentFirstExperience }}
        </span>
        <span class="q-pb-sm">
            {{ sevenCommSecondExperience }}
        </span>
    </q-page-container>
</template>

<script>
export default {
    name: 'ProfessionalExperience',
    data() {
        return {
            sevenCommFirstExperience: "Onde tudo começou... 🚀 Iniciei minha carreira como desenvolvedor a partir da 7COMm, onde abriu minhas portas acreditando no meu potencial, entrei para uma vaga de estagiário, onde atuei em um programa de reconhecimento de funcionários, onde serviu com uma base de grande aprendizado, trabalhei com tecnologias como AngularJS no frontend (sim o Angular 1) rs, e também com o Nodejs no backend.",
            talentFirstExperience: "Em busca de novos desafios, migrei para uma nova empresa, também sendo uma consultoria atuei junto ao cliente Qualicorp, onde encontrei um desafio enorme que seria criar um sistema para venda de planos de saúde, tive meu primeiro contato profissional com tecnologias Mobile, atuando em Flutter, onde me apaixonei por esse mundo, além disso atuei no backend de novos recursos, além do site de vendas utilizando o Vuejs.",
            sevenCommSecondExperience: "Em construção 👷"
        }
    }
}
</script>