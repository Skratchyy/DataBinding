const app = Vue.createApp({
    data(){
        return {
            myName: 'Zurabi',
            myAge: 19,
            myImg: 'https://i.pinimg.com/474x/9d/37/25/9d372501b80931202325cd719da01045.jpg'
        }
    },
    methods: {
        futureAge(){
            return this.myAge + 5;
        },
        favNum(){
            return Math.random()
        }
    }
})
app.mount('#assignment')