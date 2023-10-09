let gridCardContainer = document.querySelector('.grid_card_container')
let gridProductCardContainer = document.querySelector('.grid_product_card_container')


function showBasket(basket) {
    gridCardContainer.innerHTML = ""
    basket.forEach(data => {
        gridCardContainer.innerHTML += `
                        <div class="card_basket basket_content">
                            <div class="basket_img_icon">
                                <img src="${data.img}" alt="">
                                <div class="heart_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18"
                                        fill="none">
                                        <path
                                            d="M20.1046 9.26959C22.2642 7.14738 22.2642 3.69662 20.1046 1.59166C17.9451 -0.530554 14.4336 -0.530554 12.2741 1.59166L11.2206 2.62689L10.1672 1.59166C8.00763 -0.530554 4.49616 -0.530554 2.35417 1.59166C1.30073 2.60963 0.738892 3.98994 0.738892 5.43925C0.738892 6.88857 1.31828 8.25162 2.35417 9.28685L11.2206 18L20.1046 9.26959ZM2.12592 5.43925C2.12592 4.35226 2.5473 3.33429 3.33738 2.57513C4.14502 1.78145 5.19846 1.38462 6.2519 1.38462C7.30534 1.38462 8.35878 1.78145 9.16642 2.57513L11.2206 4.57656L13.2748 2.55787C14.8901 0.970525 17.5062 0.970525 19.1039 2.55787C19.8764 3.31704 20.3153 4.33501 20.3153 5.422C20.3153 6.50899 19.894 7.52696 19.1039 8.28613L11.2206 16.0503L3.33738 8.30338C2.56486 7.52696 2.12592 6.50899 2.12592 5.43925Z"
                                            fill="black" />
                                    </svg>
                                </div>                        
                            </div>
                            <p class="basket_product">${data.title} </p>
                            <div class="b_buttons">
                                <button  onclick= "plus(${data.id})">+</button>
                                <span>${data.count}</span>
                                <button onclick = "minus(${data.id})">-</button>
                            </div> 
                            <div class="basket_price">
                            <span>Qiymet: ${(data.count * data.price).toFixed(2)} <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12"
                                fill="none">
                                <path
                                    d="M10.7819 6.42857V11.1429C10.7819 11.6167 10.3751 12 9.87343 12C9.37179 12 8.96497 11.6167 8.96497 11.1429V6.42857C8.96497 5.07429 8.00257 3.94018 6.69382 3.56786V11.1429C6.69382 11.6167 6.287 12 5.78535 12C5.28371 12 4.87689 11.6167 4.87689 11.1429V3.56786C3.56814 3.94018 2.60574 5.07321 2.60574 6.42857V11.1429C2.60574 11.6167 2.19892 12 1.69728 12C1.19564 12 0.788818 11.6167 0.788818 11.1429V6.42857C0.788818 4.12259 2.55464 2.20179 4.87689 1.79732V0.857143C4.87689 0.383304 5.28371 0 5.78535 0C6.287 0 6.69382 0.383304 6.69382 0.857143V1.79625C9.01607 2.20179 10.7819 4.12232 10.7819 6.42857Z"
                                    fill="black" />
                            </svg></span>
                            </div>                
                        </div>
                         
        
        `
    })
}

// function showPrBasket(prBasket){
//     prBasket.forEach(data=>{
//         gridProductCardContainer.innerHTML+=`
//         <div class="product_card">
//             <img src="${data.img}" alt="">
//             <p class="title">${data.title}</p>
//             <span>Say: ${data.count}</span> <span>
//             <p class="product_price">Qiymet: ${data.count*data.price}
//                 <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12"
//                     fill="none">
//                     <path
//                         d="M10.7993 6.42857V11.1429C10.7993 11.6167 10.3925 12 9.89089 12C9.38925 12 8.98242 11.6167 8.98242 11.1429V6.42857C8.98242 5.07429 8.02002 3.94018 6.71127 3.56786V11.1429C6.71127 11.6167 6.30445 12 5.80281 12C5.30117 12 4.89435 11.6167 4.89435 11.1429V3.56786C3.5856 3.94018 2.6232 5.07321 2.6232 6.42857V11.1429C2.6232 11.6167 2.21638 12 1.71474 12C1.21309 12 0.806274 11.6167 0.806274 11.1429V6.42857C0.806274 4.12259 2.5721 2.20179 4.89435 1.79732V0.857143C4.89435 0.383304 5.30117 0 5.80281 0C6.30445 0 6.71127 0.383304 6.71127 0.857143V1.79625C9.03353 2.20179 10.7993 4.12232 10.7993 6.42857Z"
//                         fill="black" />
//                 </svg>
//             </p>
//             <div class="icon_btn">
//                 <div class="heart_card_icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18"
//                         fill="none">
//                         <path
//                             d="M20.1046 9.26959C22.2642 7.14738 22.2642 3.69662 20.1046 1.59166C17.9451 -0.530554 14.4336 -0.530554 12.2741 1.59166L11.2206 2.62689L10.1672 1.59166C8.00763 -0.530554 4.49616 -0.530554 2.35417 1.59166C1.30073 2.60963 0.738892 3.98994 0.738892 5.43925C0.738892 6.88857 1.31828 8.25162 2.35417 9.28685L11.2206 18L20.1046 9.26959ZM2.12592 5.43925C2.12592 4.35226 2.5473 3.33429 3.33738 2.57513C4.14502 1.78145 5.19846 1.38462 6.2519 1.38462C7.30534 1.38462 8.35878 1.78145 9.16642 2.57513L11.2206 4.57656L13.2748 2.55787C14.8901 0.970525 17.5062 0.970525 19.1039 2.55787C19.8764 3.31704 20.3153 4.33501 20.3153 5.422C20.3153 6.50899 19.894 7.52696 19.1039 8.28613L11.2206 16.0503L3.33738 8.30338C2.56486 7.52696 2.12592 6.50899 2.12592 5.43925Z"
//                             fill="black" />
//                      </svg>
//                 </div>
//             </div>
//         </div>
//         `
//     })
// }

function plus(x) {
    console.log(x);
    let checkBasket = basket.find(a => a.id === x)
    checkBasket.count += 1
    showBasket(basket)
    localStorage.setItem('sebet', JSON.stringify(basket))
}

function minus(b) {
    let checkBasket = basket.find(y => y.id === b)
    checkBasket.count -= 1
    if (checkBasket.count === 0) {
        let index = basket.findIndex(a => a.id === b)
        basket.splice(index, 1)
    }
    showBasket(basket)
    localStorage.setItem('sebet', JSON.stringify(basket))
}

window.addEventListener('load', () => {
    showBasket(basket)
    // showPrBasket(prBasket)
})