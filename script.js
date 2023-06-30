// AJAX: Asynchronous JavaScript And XML
import {addQuoteCardToContainer} from './function.js'
const quoteURL = 'https://type.fit/api/quotes'
const imageURL = 'https://picsum.photos/v2/list'

const sendHTTPRequest = (method, url)=>{
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            // console.log(xhr.status)
            if (xhr.status >= 300){
                reject(`Error, status code ${xhr.status}: ${xhr.statusText}`)
            } else{
                let data = JSON.parse(xhr.response)
                resolve(data)
            }
        }
        xhr.open(method, url)
        xhr.send()
    })
}

sendHTTPRequest('GET', quoteURL)
.then(response=>{
    // console.log(response[0].author)
    let quotes = response
    quotes.sort((a,b)=>a.author < b.author ? -1: 1);
    console.log(quotes)
    sendHTTPRequest('GET', imageURL)
    .then(response=>{
        console.log(response)
        for (let i=0; i<response.length;i++){
            // create the element and append to DOM
            addQuoteCardToContainer(quotes[i].text, quotes[i].author, response[i].download_url)
        }
    })
})




