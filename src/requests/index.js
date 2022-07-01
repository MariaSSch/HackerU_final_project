
export const allBooks = (resolve, reject = ()=>{}) =>{
    fetch("http://localhost:7000/api/book/all") 
        .then(data=>data.json(), reject)
        .then(resolve);
}

export const allPartners = (resolve, reject = ()=>{}) =>{
    fetch("http://localhost:7000/api/partner/all") 
        .then(data=>data.json(), reject)
        .then(resolve);
}

export const allLearnings = (resolve, reject = ()=>{}) =>{
    fetch("http://localhost:7000/api/learning/all") 
        .then(data=>data.json(), reject)
        .then(resolve);
}

export const allArticles = (resolve, reject = ()=>{}) =>{
    fetch("http://localhost:7000/api/article/all") 
        .then(data=>data.json(), reject)
        .then(resolve);
}
