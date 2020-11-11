var app = new Vue({
    el: '#app',
    data: {
        page: 'intro',
        timelineBtn: 'life',
        birthDate: new Date('06-28-1990'),
        lifetimeDate: new Date('03-20-2070'),
        workDate: new Date('11-10-2017'),
        currentDate: new Date(),
        timelineItem: [],
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        amountWeek() {
            let amount = Math.floor(Math.abs(this.lifetimeDate.getTime() - this.birthDate.getTime()) / (1000 * 3600 * 24 * 7));
            return amount;
        },
    }
})