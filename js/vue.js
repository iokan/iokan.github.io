var app = new Vue({
    el: '#app',
    data: {
        page: 'intro',
        timeline: 'life',
        timelineNav: false,
        timelinePeriod: false,
        timelinePeriodText: '',
        birthDate: new Date('06-28-1990'),
        lifetimeDate: new Date('06-28-2070'),
        weddingDate: new Date('02-28-2018'),
        birthDateDaughter: new Date('07-05-2019'),
        workDateBuilding: new Date('09-10-2013'),
        workDateIt: new Date('09-18-2017'),
        currentDate: new Date()
    },
    mounted() {
        this.getPeriod();
    },
    watch: {
        page: function () {
            console.log('страница: ' + this.page);
        },
        timeline: function () {
            console.log('таймлайн: ' + this.timeline);
            this.getPeriod();
        },
        timelineNav: function () {
            this.getPeriod();
        }
    },
    methods: {
        amountItem(start, end) {
            let k = 7.609; // дней в 1/4 месяца
            let amount = Math.floor(Math.abs(end.getTime() - start.getTime()) / (1000 * 3600 * 24 * k));
            return amount;
        },

        amountPeriod(start, end) {
            let k = 0.083 / 4; // годов в 1/4 месяца
            this.timelinePeriod = Math.floor(this.amountItem(start, end) * k);

            if (this.timelinePeriod >= 5 && this.timelinePeriod <= 20) {
                this.timelinePeriodText = 'лет';
            } else {
                let txt = this.timelinePeriod;
                txt = txt % 10;
                if (txt === 1) {
                    this.timelinePeriodText = 'год';
                } else if (txt >= 2 && txt <= 4) {
                    this.timelinePeriodText = 'года';
                } else {
                    this.timelinePeriodText = 'лет';
                }
            }
        },

        getPeriod() {
            if (this.timeline === 'life') {
                this.amountPeriod(this.birthDate, this.currentDate);

                if (this.timelineNav === 'wedding') {
                    this.amountPeriod(this.weddingDate, this.currentDate);
                } else if (this.timelineNav === 'parent') {
                    this.amountPeriod(this.birthDateDaughter, this.currentDate);
                }
            } else if (this.timeline === 'job') {
                this.amountPeriod(this.workDateBuilding, this.currentDate);

                if (this.timelineNav === 'building') {
                    this.amountPeriod(this.workDateBuilding, this.workDateIt);
                } else if (this.timelineNav === 'it') {
                    this.amountPeriod(this.workDateIt, this.currentDate);
                }
            }
        }
    }
})