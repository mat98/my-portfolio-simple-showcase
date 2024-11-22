<template>
    <div class="dark-page-secondary q-mb-mb">
        <div class="q-px-lg q-py-md">
            <q-timeline :layout="layout" color="secondary">
                <q-timeline-entry heading>
                    <span></span>
                    <br>
                    <span v-if="$q.screen.lt.md" class="text-h5">{{ $t('timelineTitle') }}</span>
                    <span v-else class="text-h4">{{ $t('timelineTitle') }}</span>
                </q-timeline-entry>

                <q-timeline-entry heading class="custom-timeline-title">
                    <span :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'">
                        Junior Software Engineer
                    </span>
                </q-timeline-entry>


                <q-timeline-entry title="7COMm" subtitle="16/09/2019" side="left" class="custom-timeline-title">
                    <span>
                        {{ $t('sevenCommFirstExperience') }}
                    </span>
                </q-timeline-entry>

                <q-timeline-entry title="Qualicorp" subtitle="20/09/2020" side="right" class="custom-timeline-title">
                    <span>
                        {{ $t('qualicorpFirstExperience') }}
                    </span>
                </q-timeline-entry>


                <q-timeline-entry heading class="custom-timeline-title">
                    <span :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'">
                        Mid-Level Software Engineer
                    </span>
                </q-timeline-entry>

                <q-timeline-entry title="7COMm" subtitle="17/03/2022" side="right" class="custom-timeline-title">
                    <span>
                        {{ $t('sevenCommSecondExperience') }}
                    </span>
                </q-timeline-entry>
            </q-timeline>
        </div>

        <!-- <div class="container">
            <div class="sliding-background"></div>
        </div> -->
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
            slide: 0,
            slides: [
                // {
                //     name: 'slide-1',
                //     title: 'CSS Functions and Mixins',
                //     subtitle: 'By Geoff Graham',
                //     image: 'https://via.placeholder.com/300x400.png?text=Slide+1',
                // },
                // {
                //     name: 'slide-2',
                //     title: 'CSS Olympic Rings',
                //     subtitle: 'By Amit Sheen',
                //     image: 'https://via.placeholder.com/300x400.png?text=Slide+2',
                // },
                // {
                //     name: 'slide-3',
                //     title: 'Pop(over) the Balloons',
                //     subtitle: 'By John Rhea',
                //     image: 'https://via.placeholder.com/300x400.png?text=Slide+3',
                // },
                // // Adicione mais slides conforme necessário
            ],
        }
    }
}
</script>

<style>
.custom-timeline-title {
    color: #fff
}

.container {
    overflow: hidden;
}


.sliding-background {
    background: url("https://http2.mlstatic.com/D_NQ_NP_712518-MLU72827508365_112023-O.webp") repeat-x;
    height: 560px;
    width: 5076px;
    animation: slide 60s linear infinite;
}

@keyframes slide {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-1692px, 0, 0);
        /* The image width */
    }
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
}


.card {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 3px 3px 12px 2px rgba(black, 0.6);
    transition: 0.2s;
    font-size: 0.6rem;
}

.card:not(:first-child) {
    margin-left: -2rem;
}

.card:not(:last-child):hover,
.card:not(:last-child):focus-within {
    transform: translateY(-1rem);

    ~.card {
        transform: translateX(2rem);
    }
}
</style>