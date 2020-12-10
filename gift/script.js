var app = new Vue({
    el: '#app',
    data: {
        click: false,
    },
    methods: {
        link() {
            this.click = true;
            setTimeout(() => {
                document.location.href = 'https://www.ozon.ru/context/detail/id/141571364/';
            }, 2000);
        }
    }
});