

const app = Vue.createApp({
    data() {
        return {
            greeting: 'hello there'
        }
    },
})

app.mount('#app')






// const title = document.querySelector('h1');
// const pic = document.querySelector('img');
// getData();
// async function getData() {
//   const res = await fetch('http://localhost:5000/api');
//   const data = await res.json();

//   try {
//     console.log(data);
//     title.innerHTML = data.title;
//   } catch {
//     console.log('error...');
//   }
// }
