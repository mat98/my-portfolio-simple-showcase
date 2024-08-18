<template>
    <div class="dark-page-secondary q-mb-mb">
        <div class="q-px-lg q-py-md">
            <q-timeline :layout="layout" color="secondary">
                <q-timeline-entry heading>
                    <span></span>
                    <br>
                    <span>
                        {{ $t('timelineTitle') }}
                    </span>
                </q-timeline-entry>

                <q-timeline-entry heading class="custom-timeline-title">Junior Software Engineer</q-timeline-entry>

                <q-timeline-entry title="7COMm" subtitle="16/09/2019" side="left" class="custom-timeline-title">
                    <span>
                        {{ $t('sevenCommFirstExperience') }}
                    </span>
                </q-timeline-entry>

                <q-timeline-entry title="Qualicorp" subtitle="20/09/2020" side="right" icon="delete"
                    class="custom-timeline-title">
                    <span>
                        {{ $t('qualicorpFirstExperience') }}
                    </span>
                </q-timeline-entry>

                <q-timeline-entry heading class="custom-timeline-title">Mid-Level Software Engineer</q-timeline-entry>

                <q-timeline-entry title="7COMm" subtitle="17/03/2022" side="right" icon="delete"
                    class="custom-timeline-title">
                    <span>
                        {{ $t('sevenCommSecondExperience') }}
                    </span>
                </q-timeline-entry>
            </q-timeline>
        </div>
    </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { computed } from 'vue';

export default {
    name: 'ProfessionalExperience',
    setup() {
        const $q = useQuasar();

        return {
            layout: computed(() => {
                return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
            })
        }
    },
    data() {
        return {
            talentFirstExperience: "Em busca de novos desafios, migrei para uma nova empresa, também sendo uma consultoria atuei junto ao cliente Qualicorp, onde encontrei um desafio enorme que seria criar um sistema para venda de planos de saúde, tive meu primeiro contato profissional com tecnologias Mobile, atuando em Flutter, onde me apaixonei por esse mundo, além disso atuei no backend de novos recursos, além do site de vendas utilizando o Vuejs.",
            sevenCommSecondExperience: "Em construção 👷"
        }
    }
}
</script>

<style>
.custom-timeline-title {
    color: #fff
}
</style>