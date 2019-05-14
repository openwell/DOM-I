"strict"

const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};



// Array.from(document.getElementsByTagName('nav')[0].children)
// for(element in siteContent.nav){
//   document.getElementsByTagName('nav')[0].children[element].innerText = siteContent.nav[element]
// }
const index1 = document.getElementsByTagName('nav')[0].children;
let element = Object.values(siteContent.nav)
for(let i=0; i <=  index1.length -1; i++){
  index1[i].innerText = element[i];
  index1[i].style.color = 'green'
}
//Append
let navTag = document.getElementsByTagName('nav')[0];
let history = document.createElement('a')
history.innerText = 'History';
history.style.color = 'green'
let github= document.createElement('a')
github.innerText = 'Github';
github.style.color = 'green'
navTag.appendChild(history)
navTag.appendChild(github)



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let addBr =  siteContent.cta.h1.split(' ')
let addBrr = addBr.join('<br/>') 

let headerImage = document.getElementById("cta-img");
let ctaText = document.querySelector('.cta-text');
headerImage.setAttribute("src", siteContent["cta"]["img-src"]);
ctaText.children[0].innerHTML= addBrr
ctaText.children[1].innerText= siteContent.cta.button;


let mainContentImage= document.getElementById("middle-img");
mainContentImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]); 



let element1 = Object.values(siteContent['main-content'])
let topContent = document.querySelectorAll('.top-content')[0];
let topBottom = document.querySelectorAll('.bottom-content')[0];

const index2 = topContent .children[0].children;
for(let i=0; i <=  index2.length -1; i++){
  index2[i].innerText = element1[i];
}

topContent.children[1].children[0].innerText = siteContent["main-content"]['about-h4']
topContent.children[1].children[1].innerText = siteContent["main-content"]['about-content']

topBottom.children[0].children[0].innerText = siteContent["main-content"]['services-h4']
topBottom.children[0].children[1].innerText = siteContent["main-content"]['services-content']

topBottom.children[1].children[0].innerText = siteContent["main-content"]['product-h4']
topBottom.children[1].children[1].innerText = siteContent["main-content"]['product-content']

topBottom.children[2].children[0].innerText = siteContent["main-content"]['vision-h4']
topBottom.children[2].children[1].innerText = siteContent["main-content"]['vision-content']




const index4 = document.querySelector('.contact').children
let element4 = Object.values(siteContent.contact)
for(let i=0; i <=  index4.length -1; i++){
  index4[i].innerText = element4[i]
}

document.getElementsByTagName('footer')[0].children[0].innerText = siteContent.footer.copyright;



