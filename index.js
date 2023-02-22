let product01 = document.getElementById("Edyoda");
let product02 = document.getElementById("id01");



let productlist = [{
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799629/01.image_j3jfuw.webp",
        b: "Men Navy Blue Solid Sweatshirt",
        c: "United Colors of Benetton",
        d: "Rs 2599"
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799627/02.image_tfyysb.webp",
        b: "Men Black MAMGP T7 Sweat Sporty Jacket",
        c: "Puma",
        d: "Rs 7999"
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799627/03.image_pcxsxo.webp",
        b: "Men Black Action Parkview Lifestyle Shoes",
        c: "Hush Puppies",
        d: "Rs 6999"
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799629/04.image_q3qof2.webp",
        b: "Women Black Solid Lightweight Leather Jacket",
        c: "BARESKIN",
        d: "Rs 9999"
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799628/05.image_cmlet5.webp",
        b: "Women Blue Solid Shirt Dress",
        c: "SASSAFRAS",
        d: "Rs 5200"
    }
]

function multiple(assign01) {
    let card01 = document.createElement("div");
    card01.classList.add("card");
    //card01.setAttribute("style", "width: 25rem;");
    product02.appendChild(card01);

    let image01 = document.createElement("img");
    image01.classList.add("card-img-top");
    image01.src = assign01.a;
    card01.appendChild(image01);

    let headingE = document.createElement("h3");
    headingE.classList.add("heading02");
    headingE.textContent = assign01.b;
    card01.appendChild(headingE);


    let headinge = document.createElement("h4");
    headinge.classList.add("heading03");
    headinge.textContent = assign01.c;
    card01.appendChild(headinge);


    let headingU = document.createElement("h5");
    headingU.classList.add("heading04");
    headingU.textContent = assign01.d;
    card01.appendChild(headingU);

}


for (let assign01 of productlist) {
    multiple(assign01)
}







let productlist02 = document.getElementById("id02");



let productlist03 = [{
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/06.image_qdoqlo.webp",
        B: "Unisex Silver-Toned Series 3 Smart Watch",
        C: "Apple",
        D: "Rs 31999"
    },
    {
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/07.image_x5tijn.webp",
        B: "Unisex Black & Green Reflex 2.0 Smart Band",
        C: "Fastrack",
        D: "Rs 1999"
    },
    {
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/08.image_mfxnmh.webp",
        B: "Unisex Black Galaxy Fit Fitness Band",
        C: "Samsung",
        D: "Rs 9990"
    },
    {
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/09.image_jznp4h.webp",
        B: "Gear IconX Black Cord-free Fitness Earbuds",
        C: "Samsung",
        D: "Rs 13990"
    },
    {
        A: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/10.image_tlrrpr.webp",
        B: "White 2nd Gen AirPods with Charging Case",
        C: "Apple",
        D: "Rs 14999"
    }
]

function multiple02(assign02) {
    let card01 = document.createElement("div");
    card01.classList.add("card");
    //card01.setAttribute("style", "width: 25rem;");
    productlist02.appendChild(card01);

    let image01 = document.createElement("img");
    image01.classList.add("card-img-top");
    image01.src = assign02.A;
    card01.appendChild(image01);

    let headingE = document.createElement("h3");
    headingE.classList.add("heading02");
    headingE.textContent = assign02.B;
    card01.appendChild(headingE);


    let headinge = document.createElement("h4");
    headinge.classList.add("heading03");
    headinge.textContent = assign02.C;
    card01.appendChild(headinge);


    let headingU = document.createElement("h5");
    headingU.classList.add("heading04");
    headingU.textContent = assign02.D;
    card01.appendChild(headingU);

}


for (let assign02 of productlist03) {
    multiple02(assign02)
}
