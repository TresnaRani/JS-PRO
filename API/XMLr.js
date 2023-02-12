

// XML = Extensible Markup Language
const getData = () =>{
    const xhr = new XMLHttpRequest();
    console.log(xhr);

   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

   xhr.onload = () =>{
    let data = xhr.response;
    console.log(JSON.parse(data))
   }

   xhr.onerror = () =>{
    console.log('error is here');
   }
   xhr.send();
}
getData();