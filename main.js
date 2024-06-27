const { createApp } = Vue

createApp({
    //dati della app
    data() {

        return {
            //aggiungo un array de e-mails
            arrayMails: [
                
            ],

        }
    },
    //comportamenti della app
    methods: {

    },
    //ancora non ho capito a caosa serve :v 
    mounted() {
        console.log('ancora non ho capito a  cosa servi');

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(mails => {
                const array = mails.data.response;
                console.log('hey', array);
                this.arrayMails.push(array);

            });

    }

}).mount('#app')

