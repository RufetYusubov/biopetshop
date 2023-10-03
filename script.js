let animals = document.querySelector('#animals')
let leftIcon = document.querySelector('.left_icon')
let rightIcon = document.querySelector('.right_icon')

let count = 0
function slider(){
    for(let i=0;i<animals.children.length;i++){
        animals.children[i].style.transform = `translateX(${-300*count}px)`
    }
}

setInterval(() => {
    if(count<animals.children.length-3){
        count++
        slider()
    }else{
        count=0
        slider()
    }
}, 3000);

rightIcon.addEventListener('click',()=>{
    if(count<animals.children.length-3){
        count++
        slider()
    }else{
        count=0
        slider()
    }
})

leftIcon.addEventListener('click',()=>{
    if(count>0){
        count--
        slider()
    }else{
        count=0
        slider()
    }
})

let serviceCard = document.querySelector('#card_service')
let leftIcon2 = document.querySelector('.left_2_icon')
let rightIcon2 = document.querySelector('.right_2_icon')

let count1 = 0;
function endSlider(){
    for(let i=0;i<serviceCard.children.length;i++){
        serviceCard.children[i].style.transform = `translateX(${-297*count1}px)`
    }
}

setInterval(() => {
    if(count1<serviceCard.children.length-4){
        count1++
        endSlider()
    }else{
        count1=0
        endSlider()
    }
}, 3000);

rightIcon2.addEventListener('click',()=>{
    if(count1<serviceCard.children.length-4){
        count1++
        endSlider()
    }else{
        count1=0
        endSlider()
    }
})

leftIcon2.addEventListener('click',()=>{
    if(count1>0){
        count1--
        endSlider()
    }else{
        count1=0
        endSlider()
    }
})