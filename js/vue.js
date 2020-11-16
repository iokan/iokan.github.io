var app = new Vue({
    el: '#app',
    data: {
        page: 'intro',
        timeline: 'life',
        timelineNav: false,
        timelinePeriod: false,

        birthDate: new Date('06-28-1990'),
        lifetimeDate: new Date('03-20-2070'),
        weddingDate: new Date('02-28-2018'),
        birthDateDaughter: new Date('07-05-2019'),
        workDateBuilding: new Date('09-11-2013'),
        workDateIt: new Date('05-10-2017'),
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
            let amount = Math.floor(Math.abs(end.getTime() - start.getTime()) / (1000 * 3600 * 24 * 7));
            return amount;
        },

        amountPeriod(start, end) {
            let coef = 0.019165;
            this.timelinePeriod = Math.floor(this.amountItem(start, end) * coef);
        },

        getPeriod() {
            let coef = 0.019165;
            if(this.timeline === 'life'){
                this.amountPeriod(this.birthDate, this.currentDate);

                if (this.timelineNav === 'wedding'){
                    this.amountPeriod(this.weddingDate, this.currentDate);
                }

                else if (this.timelineNav === 'parent'){
                    this.amountPeriod(this.birthDateDaughter, this.currentDate);
                }
            }

            else if(this.timeline === 'job'){
                this.amountPeriod(this.workDateBuilding, this.currentDate);

                if (this.timelineNav === 'building'){
                    this.amountPeriod(this.workDateBuilding, this.workDateIt);
                }

                else if (this.timelineNav === 'it'){
                    this.amountPeriod(this.workDateIt, this.currentDate);
                }
            }
        }
    }
})