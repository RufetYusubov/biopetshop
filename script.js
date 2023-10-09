let animals = document.querySelector('#animals')
let leftIcon = document.querySelector('.left_icon')
let rightIcon = document.querySelector('.right_icon')
let gridCardContainer = document.querySelector('.grid_card_container')
let basketIconContainer = document.querySelector('.basket_icon_container')
let basketCount = document.querySelector('.basket_count')
let gridProductCardContainer = document.querySelector('.grid_product_card_container')
let newBtn = document.querySelectorAll('.new_btn')
let btns = document.querySelector('.btns')
let selectFilter = document.querySelector('.select_filter')
let barsIcon = document.querySelector('bars_icon')
let closeIcon = document.querySelector('close_icon')
let nav = document.querySelector('nav')

basketCount.innerHTML = basket.length
let products = [
    {
        id: 1,
        img: './images/pisik2.png',
        title: 'Pişik evi',
        price: 42
    },
    {
        id: 2,
        img: './images/itucunkoynek.png',
        title: 'İt üçün köynək',
        price: 60
    },
    {
        id: 3,
        img: './images/petsfood.png',
        title: 'Yemək qabları',
        price: 35
    },
    {
        id: 4,
        img: './images/muxteliftasmalar.png',
        title: 'Müxtəlif tasmalar',
        price: 22
    },
]

let foodProducts = [
    {
        id: 5,
        img: './images/pisiklerucunlasos.png',
        title: 'Pişiklər üçün quru və nəm lasos',
        price: 45,
        dataX: 'enCoxSatilan'
    },
    {
        id: 6,
        img: './images/quslarucuncerez.png',
        title: 'Quşlar üçün çərəz',
        price: 9.90,
        dataX: 'yeni'
    },
    {
        id: 7,
        img: './images/image 5.png',
        title: 'Balıqlar üçün quru toyuq',
        price: 19,
        dataX: 'enCoxSatilan'
    },
    {
        id: 8,
        img: './images/itlerucunsumukler.png',
        title: 'İtlər üçün sümüklər',
        price: 33,
        dataX: 'yeni'

    },
    {
        id: 9,
        img: './images/itlerucunet.png',
        title: 'İtlər üçün quru yemək və ət',
        price: 40,
        dataX: 'secilen'

    },
    {
        id: 10,
        img: './images/pisiklerucuncubuq.png',
        title: 'Pişiklər üçün çubuq',
        price: 13.9,
        dataX: 'yeni'
    },
    {
        id: 11,
        img: './images/dovsanlarucunet.png',
        title: 'Dovşanlar üçün dəri ət',
        price: 10,
        dataX: 'secilen'
    },
    {
        id: 12,
        img: './images/tetramin.png',
        title: 'Balıqlar üçün quru çörək',
        price: 25,
        dataX: 'secilen'
    }
]


// foodProducts.forEach(x=>{
//     selectFilter.innerHTML+=`
//         <option>${x.title}</option>
//     `
// })

let count = 0
function slider() {
    for (let i = 0; i < animals.children.length; i++) {
        animals.children[i].style.transform = `translateX(${-300 * count}px)`
        animals.children[i].classList.remove('card_middle')
        animals.children[count + 1].classList.add('card_middle')
    }
}

setInterval(() => {
    if (count < animals.children.length - 3) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
}, 3000);

rightIcon.addEventListener('click', () => {
    if (count < animals.children.length - 3) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
})

leftIcon.addEventListener('click', () => {
    if (count > 0) {
        count--
        slider()
    } else {
        count = 0
        slider()
    }
})

let serviceCard = document.querySelector('#card_service')
let leftIcon2 = document.querySelector('.left_2_icon')
let rightIcon2 = document.querySelector('.right_2_icon')

let count1 = 0;
function endSlider() {
    for (let i = 0; i < serviceCard.children.length; i++) {
        serviceCard.children[i].style.transform = `translateX(${-297 * count1}px)`
    }
}

setInterval(() => {
    if (count1 < serviceCard.children.length - 4) {
        count1++
        endSlider()
    } else {
        count1 = 0
        endSlider()
    }
}, 3000);

rightIcon2.addEventListener('click', () => {
    if (count1 < serviceCard.children.length - 4) {
        count1++
        endSlider()
    } else {
        count1 = 0
        endSlider()
    }
})

leftIcon2.addEventListener('click', () => {
    if (count1 > 0) {
        count1--
        endSlider()
    } else {
        count1 = 0
        endSlider()
    }
})



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // slidesPerView: 4,
    // breakpoints :{
    //     768:{
    //         slidesPerView: 4,
    //     },
    //     576:{
    //         slidesPerView: 3,
    //     },
    //     300:{
    //         slidesPerView: 1,
    //     }
    //   }
});

basketIconContainer.addEventListener('click', () => {
    window.location.href = './basket.html'
})


products.forEach(data => {
    gridCardContainer.innerHTML += `
                    <div class="card_basket">
                            <div class="card_basket_content">
                            <img src="${data.img}" alt="">
                                <div class="heart_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18"
                                    fill="none">
                                    <path
                                        d="M20.1046 9.26959C22.2642 7.14738 22.2642 3.69662 20.1046 1.59166C17.9451 -0.530554 14.4336 -0.530554 12.2741 1.59166L11.2206 2.62689L10.1672 1.59166C8.00763 -0.530554 4.49616 -0.530554 2.35417 1.59166C1.30073 2.60963 0.738892 3.98994 0.738892 5.43925C0.738892 6.88857 1.31828 8.25162 2.35417 9.28685L11.2206 18L20.1046 9.26959ZM2.12592 5.43925C2.12592 4.35226 2.5473 3.33429 3.33738 2.57513C4.14502 1.78145 5.19846 1.38462 6.2519 1.38462C7.30534 1.38462 8.35878 1.78145 9.16642 2.57513L11.2206 4.57656L13.2748 2.55787C14.8901 0.970525 17.5062 0.970525 19.1039 2.55787C19.8764 3.31704 20.3153 4.33501 20.3153 5.422C20.3153 6.50899 19.894 7.52696 19.1039 8.28613L11.2206 16.0503L3.33738 8.30338C2.56486 7.52696 2.12592 6.50899 2.12592 5.43925Z"
                                        fill="black" />
                                    </svg>
                                </div>
                                <button onclick="addToBasket(${data.id})" class="basket_btn">
                                İndi al
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17"
                                    fill="none">
                                    <path
                                        d="M1.47245 0H3.83407C3.85639 0 3.87535 0.0102163 3.89705 0.012459C3.94234 0.016994 3.98467 0.0243697 4.02711 0.0382241C4.06264 0.0497361 4.09471 0.0639393 4.12709 0.0811826C4.16435 0.101067 4.19794 0.122646 4.23042 0.149508C4.26031 0.174126 4.28567 0.20034 4.31037 0.229893C4.33584 0.260342 4.35759 0.29134 4.37691 0.326624C4.39688 0.362855 4.41091 0.400032 4.42316 0.4402C4.42982 0.461978 4.4442 0.479471 4.44847 0.502345L4.80614 2.41898L20.0902 3.29475C20.1487 3.29076 20.2004 3.29913 20.2658 3.30511C20.6054 3.33541 20.8575 3.62725 20.8322 3.96055C20.8302 3.98567 20.827 4.00999 20.8221 4.03391L19.7572 9.72875C19.5136 10.6118 18.7634 11.5033 17.635 11.5033H6.50152L6.7399 12.7807H16.1082C17.2943 12.7807 18.2596 13.7272 18.2596 14.8902C18.2596 16.0535 17.2943 17 16.1082 17C14.9221 17 13.9568 16.0535 13.9568 14.8902C13.9568 14.5732 14.0336 14.2754 14.1619 14.0055H8.40916C8.53745 14.2754 8.61425 14.5732 8.61425 14.8902C8.61425 16.0535 7.64894 17 6.46284 17C5.27675 17 4.31144 16.0535 4.31144 14.8902C4.31144 14.0632 4.80395 13.3531 5.51238 13.0075L3.31345 1.22477H1.47245C1.12764 1.22477 0.847885 0.950469 0.847885 0.612383C0.847885 0.274296 1.12764 0 1.47245 0ZM5.82598 7.88338L8.47265 7.92415L8.3285 6.4202L5.53759 6.33817L5.82598 7.88338ZM19.0482 6.73531L16.4034 6.65757L16.2304 8.04355L18.7966 8.08307L19.0482 6.73531ZM15.5679 6.633L12.6609 6.54758V7.98858L15.3934 8.0307L15.5679 6.633ZM12.6609 5.73032L15.6696 5.81878L15.8618 4.27935L12.6609 4.09586V5.73032ZM11.8281 4.04812L8.92165 3.88146L9.08877 5.62532L11.8281 5.70585V4.04812ZM12.6609 8.80529V10.2785H15.1127L15.2916 8.84581L12.6609 8.80529ZM11.8281 8.79249L9.3887 8.75496L9.53473 10.2785H11.8281V8.79249ZM11.8281 7.97578V6.52311L9.1673 6.44487L9.31033 7.937L11.8281 7.97578ZM5.38425 5.51643L8.24997 5.60065L8.08062 3.83327L5.03755 3.6588L5.38425 5.51643ZM16.6945 4.3271L16.5051 5.8433L19.2 5.92254C19.3136 5.31763 19.404 4.84753 19.4811 4.48682L16.6945 4.3271ZM18.5397 9.45884L18.6446 8.89744L16.1286 8.85872L15.9513 10.2785H17.635C18.1701 10.2785 18.4682 9.71001 18.5397 9.45884ZM8.69827 10.2785L8.55102 8.74205L5.97882 8.70243L6.27296 10.2785H8.69827ZM15.2059 14.8902C15.2059 15.3781 15.6105 15.7752 16.1082 15.7752C16.6059 15.7752 17.0105 15.3781 17.0105 14.8902C17.0105 14.4022 16.6059 14.0055 16.1082 14.0055C15.6105 14.0055 15.2059 14.4022 15.2059 14.8902ZM6.46284 15.7752C6.96054 15.7752 7.36513 15.3781 7.36513 14.8902C7.36513 14.4022 6.96054 14.0055 6.46284 14.0055C5.96515 14.0055 5.56056 14.4022 5.56056 14.8902C5.56056 15.3781 5.96515 15.7752 6.46284 15.7752Z"
                                        fill="#1D1D1B" />
                                </svg>
                                </button>
                            </div>
                            
                        
                        <p class="price">${data.title} <span>${data.price}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12"
                                    fill="none">
                                    <path
                                        d="M10.7819 6.42857V11.1429C10.7819 11.6167 10.3751 12 9.87343 12C9.37179 12 8.96497 11.6167 8.96497 11.1429V6.42857C8.96497 5.07429 8.00257 3.94018 6.69382 3.56786V11.1429C6.69382 11.6167 6.287 12 5.78535 12C5.28371 12 4.87689 11.6167 4.87689 11.1429V3.56786C3.56814 3.94018 2.60574 5.07321 2.60574 6.42857V11.1429C2.60574 11.6167 2.19892 12 1.69728 12C1.19564 12 0.788818 11.6167 0.788818 11.1429V6.42857C0.788818 4.12259 2.55464 2.20179 4.87689 1.79732V0.857143C4.87689 0.383304 5.28371 0 5.78535 0C6.287 0 6.69382 0.383304 6.69382 0.857143V1.79625C9.01607 2.20179 10.7819 4.12232 10.7819 6.42857Z"
                                        fill="black" />
                                </svg>
                        </p>
                    </div>
    `
})

foodProducts.forEach(data=>{
    gridProductCardContainer.innerHTML += `
    <div class="product_card" data-name="${data.dataX}">
        <img src="${data.img}" alt="">
        <p class="title">${data.title}</p>
        <p class="product_price">${data.price}
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12"
             fill="none">
                <path
                 d="M10.7993 6.42857V11.1429C10.7993 11.6167 10.3925 12 9.89089 12C9.38925 12 8.98242 11.6167 8.98242 11.1429V6.42857C8.98242 5.07429 8.02002 3.94018 6.71127 3.56786V11.1429C6.71127 11.6167 6.30445 12 5.80281 12C5.30117 12 4.89435 11.6167 4.89435 11.1429V3.56786C3.5856 3.94018 2.6232 5.07321 2.6232 6.42857V11.1429C2.6232 11.6167 2.21638 12 1.71474 12C1.21309 12 0.806274 11.6167 0.806274 11.1429V6.42857C0.806274 4.12259 2.5721 2.20179 4.89435 1.79732V0.857143C4.89435 0.383304 5.30117 0 5.80281 0C6.30445 0 6.71127 0.383304 6.71127 0.857143V1.79625C9.03353 2.20179 10.7993 4.12232 10.7993 6.42857Z"
                 fill="black" />
            </svg>
        </p>
        <div class="icon_btn">
            <button onclick="addToPrBasket(${data.id})" class="basket_button">
                İndi al
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17"
                    fill="none">
                    <path
                        d="M1.47245 0H3.83407C3.85639 0 3.87535 0.0102163 3.89705 0.012459C3.94234 0.016994 3.98467 0.0243697 4.02711 0.0382241C4.06264 0.0497361 4.09471 0.0639393 4.12709 0.0811826C4.16435 0.101067 4.19794 0.122646 4.23042 0.149508C4.26031 0.174126 4.28567 0.20034 4.31037 0.229893C4.33584 0.260342 4.35759 0.29134 4.37691 0.326624C4.39688 0.362855 4.41091 0.400032 4.42316 0.4402C4.42982 0.461978 4.4442 0.479471 4.44847 0.502345L4.80614 2.41898L20.0902 3.29475C20.1487 3.29076 20.2004 3.29913 20.2658 3.30511C20.6054 3.33541 20.8575 3.62725 20.8322 3.96055C20.8302 3.98567 20.827 4.00999 20.8221 4.03391L19.7572 9.72875C19.5136 10.6118 18.7634 11.5033 17.635 11.5033H6.50152L6.7399 12.7807H16.1082C17.2943 12.7807 18.2596 13.7272 18.2596 14.8902C18.2596 16.0535 17.2943 17 16.1082 17C14.9221 17 13.9568 16.0535 13.9568 14.8902C13.9568 14.5732 14.0336 14.2754 14.1619 14.0055H8.40916C8.53745 14.2754 8.61425 14.5732 8.61425 14.8902C8.61425 16.0535 7.64894 17 6.46284 17C5.27675 17 4.31144 16.0535 4.31144 14.8902C4.31144 14.0632 4.80395 13.3531 5.51238 13.0075L3.31345 1.22477H1.47245C1.12764 1.22477 0.847885 0.950469 0.847885 0.612383C0.847885 0.274296 1.12764 0 1.47245 0ZM5.82598 7.88338L8.47265 7.92415L8.3285 6.4202L5.53759 6.33817L5.82598 7.88338ZM19.0482 6.73531L16.4034 6.65757L16.2304 8.04355L18.7966 8.08307L19.0482 6.73531ZM15.5679 6.633L12.6609 6.54758V7.98858L15.3934 8.0307L15.5679 6.633ZM12.6609 5.73032L15.6696 5.81878L15.8618 4.27935L12.6609 4.09586V5.73032ZM11.8281 4.04812L8.92165 3.88146L9.08877 5.62532L11.8281 5.70585V4.04812ZM12.6609 8.80529V10.2785H15.1127L15.2916 8.84581L12.6609 8.80529ZM11.8281 8.79249L9.3887 8.75496L9.53473 10.2785H11.8281V8.79249ZM11.8281 7.97578V6.52311L9.1673 6.44487L9.31033 7.937L11.8281 7.97578ZM5.38425 5.51643L8.24997 5.60065L8.08062 3.83327L5.03755 3.6588L5.38425 5.51643ZM16.6945 4.3271L16.5051 5.8433L19.2 5.92254C19.3136 5.31763 19.404 4.84753 19.4811 4.48682L16.6945 4.3271ZM18.5397 9.45884L18.6446 8.89744L16.1286 8.85872L15.9513 10.2785H17.635C18.1701 10.2785 18.4682 9.71001 18.5397 9.45884ZM8.69827 10.2785L8.55102 8.74205L5.97882 8.70243L6.27296 10.2785H8.69827ZM15.2059 14.8902C15.2059 15.3781 15.6105 15.7752 16.1082 15.7752C16.6059 15.7752 17.0105 15.3781 17.0105 14.8902C17.0105 14.4022 16.6059 14.0055 16.1082 14.0055C15.6105 14.0055 15.2059 14.4022 15.2059 14.8902ZM6.46284 15.7752C6.96054 15.7752 7.36513 15.3781 7.36513 14.8902C7.36513 14.4022 6.96054 14.0055 6.46284 14.0055C5.96515 14.0055 5.56056 14.4022 5.56056 14.8902C5.56056 15.3781 5.96515 15.7752 6.46284 15.7752Z"
                        fill="#1D1D1B" />
                </svg>
            </button>
            <div class="heart_card_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18"
                    fill="none">
                    <path
                        d="M20.1046 9.26959C22.2642 7.14738 22.2642 3.69662 20.1046 1.59166C17.9451 -0.530554 14.4336 -0.530554 12.2741 1.59166L11.2206 2.62689L10.1672 1.59166C8.00763 -0.530554 4.49616 -0.530554 2.35417 1.59166C1.30073 2.60963 0.738892 3.98994 0.738892 5.43925C0.738892 6.88857 1.31828 8.25162 2.35417 9.28685L11.2206 18L20.1046 9.26959ZM2.12592 5.43925C2.12592 4.35226 2.5473 3.33429 3.33738 2.57513C4.14502 1.78145 5.19846 1.38462 6.2519 1.38462C7.30534 1.38462 8.35878 1.78145 9.16642 2.57513L11.2206 4.57656L13.2748 2.55787C14.8901 0.970525 17.5062 0.970525 19.1039 2.55787C19.8764 3.31704 20.3153 4.33501 20.3153 5.422C20.3153 6.50899 19.894 7.52696 19.1039 8.28613L11.2206 16.0503L3.33738 8.30338C2.56486 7.52696 2.12592 6.50899 2.12592 5.43925Z"
                        fill="black" />
                </svg>
            </div>
        </div>
    </div>

`
})

let productCard=document.querySelectorAll('.product_card')

function addToBasket(id) {
    console.log(id);
    let checkBasket = basket.find(y => y.id === id);

    if (checkBasket) {
        checkBasket.count += 1
    } else {
        let checkPr = products.find(y => y.id === id)
        checkPr.count = 1
        basket.push(checkPr)
    }
    basketCount.innerHTML = basket.length
    localStorage.setItem('sebet', JSON.stringify(basket))
    console.log(basket);
}

function addToPrBasket(id) {
    let checkBasket = basket.find(y => y.id === id);

    if (checkBasket) {
        checkBasket.count += 1
    } else {
        let checkfoodPr = foodProducts.find(y => y.id === id)
        checkfoodPr.count = 1
        basket.push(checkfoodPr)
    }
    localStorage.setItem('sebet', JSON.stringify(basket))
    basketCount.innerHTML = basket.length

}


for(let i=0;i<newBtn.length;i++){
    newBtn[i].addEventListener('click',()=>{
        btns.querySelector('.active_btn').classList.remove('active_btn')
        newBtn[i].classList.add('active_btn')

        let dataBtn=newBtn[i].getAttribute('data-name')

        for(let i=0;i<productCard.length;i++){
            let dataCard=productCard[i].getAttribute('data-name')

            if(dataBtn===dataCard || dataBtn==='butun'){
                productCard[i].classList.add('show')
                productCard[i].classList.remove('hide')
            }else{
                productCard[i].classList.add('hide')
                productCard[i].classList.remove('show')
            }
        }

    })
}

// barsIcon.addEventListener('click',()=>{
  
// })