<template>
    <q-layout>
        <q-header class="dark-page fixed-top" position="fixed">
            <q-toolbar>
                <q-toolbar-title class="text-center text-h5">
                    <span v-if="$q.screen.lt.md" class="text-h6">{{ titulo }}</span>
                    <span v-else class="text-h4">{{ titulo }}</span>
                </q-toolbar-title>

                <q-btn @click="changeLanguage('en')" round flat>
                    <img src="~assets/usa.png" alt="English" width="24">
                </q-btn>
                <q-btn @click="changeLanguage('pt')" round flat>
                    <img src="~assets/brazil.png" alt="Português" width="24">
                </q-btn>
            </q-toolbar>
        </q-header>
        <div class="q-mt-lg">
            <q-page-container class="column q-ml-md q-mb-md text-left">
                <div class="text-left q-mx-auto" style="max-width: 60rem; text-align: left;">
                    <p class="row text-h3" style="text-align: left; justify-content: start">
                        <span class="q-pb-sm text-h6 topic">{{ $t('introduction') }}</span>
                    </p>

                    <p class="row" style="text-align: left;">
                        <span class="q-pb-sm">{{ $t('introductionHome') }}</span>
                    </p>

                    <p class="row" style="text-align: left; justify-content: start">
                        <span class="q-pt-sm"> {{ $t('descricaoStacksPrincipais') }}</span>
                    </p>

                    <div v-for="stack in stacksPrincipais" :key="stack" class="row items-start"
                        style="justify-content: flex-start; text-align: left;">
                        <q-icon name="coffee" size="2rem" color="white" />
                        <span class="q-ml-sm">{{ stack }}</span>
                    </div>

                    <p class="row" style="text-align: left; justify-content: start">
                        <span class="q-pt-sm"> {{ $t('descricaoStacksSecundarias') }}</span>
                    </p>

                    <div v-for="stack in stacksSecundarias" :key="stack" class="row items-start"
                        style="justify-content: flex-start; text-align: left;">
                        <q-icon name="coffee" size="2rem" color="white" />
                        <span class="q-ml-sm">{{ stack }}</span>
                    </div>
                </div>
            </q-page-container>

            <ProfessionalExperience />
        </div>

    </q-layout>
</template>

<script>
import ProfessionalExperience from './components/ProfessionalExperience.vue';
import { changeLanguage as setLanguage } from 'src/_translate/i18nService';

export default {
    components: {
        ProfessionalExperience
    },
    data() {
        return {
            changeLanguage(lang) {
                setLanguage(lang)
            },
            titulo: "MatDevFolio</>",
            stacksPrincipais: ['Angular', 'Dotnet ( ASP.NET Core )', 'Nodejs ( Nestjs )', 'Flutter', 'Vuejs'],
            stacksSecundarias: ['AWS Cloud', 'Azure Cloud'],
        }
    }
}
</script>

<style lang="scss">
body {
    background-color: #13131f;
}

span {
    color: #fff;
    font-size: 1rem;
}

.topic {
    color: $secondary
}
</style>