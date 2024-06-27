const { createApp } = Vue

createApp({
  data() {
    return {
        //aggiungo un array de e-mails
      arrayMails: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
      ],
    }
  }
}).mount('#app')