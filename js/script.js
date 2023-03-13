// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Vue!',
        secondMessage: "Hello world!",
        imgSrc: "img/hello.png"
      }
    }
}).mount('#app')

