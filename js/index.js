myUPButton=document.querySelector('.buttonup')
/* console.log(myUPButton) */
window.onscroll=function () {
    if (window.scrollY >= 600) {
        myUPButton.style.display="block"
    }else{
        myUPButton.style.display="none"
    }
}
myUPButton.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})
/* start rotate section */
let mystorecolor=window.localStorage.getItem("storecolor")
console.log(mystorecolor)
if(mystorecolor !== null){
    document.querySelector(':root').style.setProperty("--mainColor", mystorecolor)
}
document.querySelector('.switcher-btn').addEventListener('click' ,()=>{
    document.querySelector('.color-switcher').classList.toggle('active')
})
let mybuttons=document.querySelectorAll('.theme-buttons')
for (let index = 0; index < mybuttons.length; index++) {
    mybuttons[index].addEventListener('click',(e)=>{
        /* let datacolor=mybuttons[index].getAttribute('data-color') */
        let datacolor=e.target.dataset.color;
        document.querySelector(':root').style.setProperty("--mainColor", datacolor)
        window.localStorage.setItem("storecolor", datacolor)
        document.querySelector('.color-switcher').classList.toggle('active')
    })
}
/* end rotate section */