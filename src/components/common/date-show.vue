<template>
    <section class="date-progress">
        <date-pq
            :year="'2017'"
            :month="'10'"
            :no-click="true"
            :select-data="selectData"></date-pq>

        <date-pq
            :year="'2017'"
            :month="'11'"
            :no-click="true"
            :select-data="selectData"></date-pq>
    </section>
</template>
<script>
import datePq from './date-pq.vue'

export default {
    data () {
        return {
            selectData: [
                {
                    date: '2017-10-20',
                    isHold: 1
                },
                {
                    date: '2017-10-19',
                    isHold: 0
                },
                {
                    date: '2017-10-22',
                    isHold: 0
                },
                {
                    date: '2017-11-16',
                    isHold: 0
                }
            ]
        }
    },
    components: {
        datePq
    }
}
</script>
<style lang="scss">
.date-progress {
    background: #ffffff;
}
</style>