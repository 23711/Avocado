
// const url = "http://platzi-avo.vercel.app/api/avo";
const baseUrl = "http://platzi-avo.vercel.app"
const appNode = document.querySelector("div#container")

appNode.addEventListener("click" , (e)=> {
    console.log(e)
    if(e.target.nodeName === "H2"){
        alert("hola")
    }
})

const formatPrice = (price) => {
    //https://developer.mozilla.org/en-US/docs/web/Javascript/Reference/Global_Objects/Intl
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price)

    return newPrice
}

//intl



//web api
//
window.fetch(`${baseUrl}/api/avo`)
    .then(response => { return response.json() })
    .then(response =>{
        console.log(response);
        const elements = [];
        response.data.forEach(item => {
            //creat IMG
            const image = document.createElement("img");
            image.src = `${baseUrl}${item.image}`
            image.className = "img"
            //creat title
            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "text"
            // title.style.fontSize = "3rem"
            title.className = "so-big"
            //creat price 
            const price = document.createElement("span");
            price.textContent = formatPrice(item.price);


            //creat container
            const container = document.createElement("div");
            container.append(image, title, price);
            container.className = "container"
            elements.push(container)
        })
        appNode.append(...elements);
    })
