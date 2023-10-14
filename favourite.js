let favouriteCard = document.querySelector('.favourite_card_grid')
let basketIconContainer = document.querySelector('.basket_icon_container')


function showFavouriteList(favourite) {
    favouriteCard.innerHTML = ""
    favourite.forEach(data => {
        favouriteCard.innerHTML += `
        <div class="card_favourite">
            <img src="${data.img}" alt="">
            <i onclick = "deleteBtn(${data.id})" class="fa-solid fa-x"></i>
            <div class="favourite_content">
                <p class="favourite_product">${data.title} </p>
                <div class="favourite_price">
                <span>Qiymet: ${(data.price)} <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12"
                    fill="none">
                    <path
                        d="M10.7819 6.42857V11.1429C10.7819 11.6167 10.3751 12 9.87343 12C9.37179 12 8.96497 11.6167 8.96497 11.1429V6.42857C8.96497 5.07429 8.00257 3.94018 6.69382 3.56786V11.1429C6.69382 11.6167 6.287 12 5.78535 12C5.28371 12 4.87689 11.6167 4.87689 11.1429V3.56786C3.56814 3.94018 2.60574 5.07321 2.60574 6.42857V11.1429C2.60574 11.6167 2.19892 12 1.69728 12C1.19564 12 0.788818 11.6167 0.788818 11.1429V6.42857C0.788818 4.12259 2.55464 2.20179 4.87689 1.79732V0.857143C4.87689 0.383304 5.28371 0 5.78535 0C6.287 0 6.69382 0.383304 6.69382 0.857143V1.79625C9.01607 2.20179 10.7819 4.12232 10.7819 6.42857Z"
                        fill="black" />
                </svg></span>
                </div>
            </div>                       
        </div>
        
        `
    })
}

basketIconContainer.addEventListener('click', () => {
    window.location.href = './basket.html'
})
function deleteBtn(id){
    let index= favourite.findIndex(x=>x.id===id)

    console.log(index);
    // favourite.splice(index,1)
    // showFavouriteList(favourite)
    // localStorage.setItem('favorilerim',JSON.stringify(favourite))
    
    // console.log(index);
    //         // let isHeartActive = Array.from(heartIcons[index].classList).includes('active_heart');
    //         // console.log(isHeartActive);
    //         if(localStorage.getItem(`heart${index}`)=='true'){
    //             localStorage.setItem(`heart${index}`, 'false');
    //         }else{
    //             localStorage.setItem(`heart${index}`, 'true');
    //         }
    //         // localStorage.setItem(`heart${index}`, );
    
}

window.addEventListener('load', () => {
    showFavouriteList(favourite)
})