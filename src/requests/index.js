export const addBook = (resolve, reject = ()=>{}) =>{
        fetch("http://localhost:7000/api/book/add", {
            method: "POST",
           // body: JSON.stringify(data)
        })
            .then(data=>data.json(), reject)
            .then(resolve);
}

export const allBooks = (resolve, reject = ()=>{}) =>{
    fetch("http://localhost:7000/api/book/all") 
        .then(data=>data.json(), reject)
        .then(resolve);
}