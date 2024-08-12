<template>
    <q-layout>
        <!-- Header -->
        <q-header class="dark-page">
            <q-toolbar>
                <q-toolbar-title>
                    <span>{{ titulo }}</span>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <div class="q-ml-md q-mt-lg">
            <q-page-container class="column">
                <span class="q-pb-sm">{{ topicoPrincipal }}</span>
                <span class="q-pb-sm">{{ descricaoGeral }}</span>
                <span class="q-pb-sm">{{ descricaoExperiencia }}</span>

                <span class="q-pt-md q-pb-md">{{ descricaoStacksPrincipais }}</span>
                <div v-for="stack in stacksPrincipais" :key="stack" class="row items-center">
                    <q-icon name="coffee" size="2rem" color="white" />
                    <span class="q-ml-sm">{{ stack }}</span>
                </div>

                <span class="q-pt-md q-pb-md">{{ descricaoStacksSecundarias }}</span>
                <div v-for="stack in stacksSecundarias" :key="stack" class="row items-center">
                    <q-icon name="coffee" size="2rem" color="white" />
                    <span class="q-ml-sm">{{ stack }}</span>
                </div>
            </q-page-container>
            <!-- <q-page-container class="column">
                <span>{{ topicoPrincipal }}</span>
                <span>{{ descricaoGeral }}</span>
            </q-page-container> -->

            <ProfessionalExperience />
        </div>
    </q-layout>
</template>

<script>
import ProfessionalExperience from './components/ProfessionalExperience.vue';

export default {
    components: {
        ProfessionalExperience
    },
    data() {
        return {
            titulo: "MatDevFolio</>",
            topicoPrincipal: "Sobre mim",
            descricaoGeral: "Me chamo Mateus, tenho 26 anos e sou um desenvolvedor que busca frequentemente se aperfeiçoar!",
            descricaoExperiencia: "No momento tenho 5 anos de experiência e tento dividir meus conhecimentos da seguinte maneira:\n",
            descricaoStacksPrincipais: 'Para trabalhar com plataforma robustas, utilizo essas ferramentas:',
            stacksPrincipais: ['Angular', 'Dotnet ( ASP.NET Core )', 'Nodejs ( Nestjs )'],
            descricaoStacksSecundarias: 'Para desenvolvimento de projetos menores e que me permitem mais liberdade criativa utilizo:',
            stacksSecundarias: ['Vuejs <3', 'Pyhton', 'Nodejs ( Nestjs ) ( com menos regras  estruturais )'],
        }
    }
}
</script>

<style lang="scss">
body {
    background-color: #13131f;
}

span {
    color: #fff
}
</style>