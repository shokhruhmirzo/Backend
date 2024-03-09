// fetch('https://jsonplaceholder.typicode.com/users')

// .then((res)=> res.json())
// .then((data)=> console.log(data))

function setBooks(e) {
    e.preventDefault()
    console.log(e.target.title.value);
    console.log(e.target.img.value);
    console.log(e.target.price.value);

    let books = {
        title: e.target.title.value,
        img: e.target.img.value,
        price: e.target.price.value
    }
    fetch('https://65eb326743ce1641893373f6.mockapi.io/OtkanKunlar', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(books)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}
let elListcha = document.querySelector('.list')

fetch('https://65eb326743ce1641893373f6.mockapi.io/OtkanKunlar')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(element => {
            let newLi = document.createElement('li')
            newLi.innerHTML = `
            <img src=${element.img} width="150"  alt="">
            <p>${element.title}</p>
             <p>${element.price}</p>
            <button class="delete" onclick="removeInf(${element.id})">delete</button>`
            elListcha.appendChild(newLi)
        });
    })

function removeInf(id) {
    console.log(id);
    fetch(`https://65eb326743ce1641893373f6.mockapi.io/OtkanKunlar/${id}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}