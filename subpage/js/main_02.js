import productList01 from "./data.js";

const nomal = document.querySelector('.sort01');
const pop =document.querySelector('.sort02');
const lowTohigh = document.querySelector('.sort03');
const highTolow = document.querySelector('.sort04');
const section = document.querySelector('.product_sheet');
const popSheet = document.querySelector('.pop_sheet');
const lowSheet = document.querySelector('.low_to_high');
const highSheet = document.querySelector('.high_to_low');

nomal.addEventListener('click', () => {
  section.style.display = 'flex'
  popSheet.style.display = 'none'
  lowSheet.style.display = 'none'
  highSheet.style.display = 'none'
})

for(let i=0; i<productList01.length; i++) {
  let proDiv = document.createElement('div')
  proDiv.setAttribute('class', 'pro_box')
  
  let proImgBox = document.createElement('div')
  proImgBox.setAttribute('class', 'pro_img_box')
  proDiv.appendChild(proImgBox)

  let proImg = document.createElement('img')
  proImg.setAttribute('src', productList01[i].src)
  proImgBox.appendChild(proImg)

  let proImgOn = document.createElement('img')
  proImgOn.setAttribute('src', productList01[i].hover)
  proImgBox.appendChild(proImgOn)

  proImgOn.style.display = 'none'
  proDiv.addEventListener('mouseover', () => {
    proImg.style.display = 'none'
    proImgOn.style.display = 'block'
    iconBox.style.display = 'block'
  })
  proDiv.addEventListener('mouseout', () => {
    proImg.style.display = 'block'
    proImgOn.style.display = 'none'
    iconBox.style.display = 'none'
  })

  let iconBox = document.createElement('div')
  iconBox.setAttribute('class', 'icon_box')
  let icon = document.createElement('div')
  icon.setAttribute('class', 'icon')
  let cart = document.createElement('div')
  cart.setAttribute('class','cart')
  let cartImg = document.createElement('img')
  cartImg.setAttribute('src', productList01[i].cart)
  cart.appendChild(cartImg)
  icon.appendChild(cart)
  iconBox.appendChild(icon)
  
  let heartOn = document.createElement('div')
  heartOn.setAttribute('class', 'heart_on')
  let heartOff = document.createElement('div')
  heartOff.setAttribute('class', 'heart_off')
  let heartOnImg = document.createElement('img')
  let heartOffImg = document.createElement('img')
  heartOnImg.setAttribute('src', productList01[i].heart_on)
  heartOffImg.setAttribute('src', productList01[i].heart_off)
  heartOff.appendChild(heartOffImg)
  heartOn.appendChild(heartOnImg)
  icon.appendChild(heartOn)
  icon.appendChild(heartOff)
  proDiv.appendChild(iconBox)
  heartOff.addEventListener('click', function() {
    this.style.display = 'none'
    heartOn.style.display = 'block'
  })
  heartOn.addEventListener('click', function() {
    this.style.display = 'none'
    heartOff.style.display = 'block'
  })
  let proNameDiv = document.createElement('div')
  proNameDiv.setAttribute('class', 'pro_name')
  let proNameText = document.createTextNode(productList01[i].name)
  proNameDiv.appendChild(proNameText)
  proDiv.appendChild(proNameDiv)
  let proPrice = document.createElement('div')
  proPrice.setAttribute('class', 'pro_price')
  let proPriceText = document.createTextNode(productList01[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+'원')
  proPrice.appendChild(proPriceText)
  proDiv.appendChild(proPrice)
  section.appendChild(proDiv)
  proDiv.addEventListener('click', () => {
    window.location.href='../detail/detail.html'
  })
}

pop.addEventListener('click', () => {
  section.style.display = 'none'
  popSheet.style.display = 'flex'
  lowSheet.style.display = 'none'
  highSheet.style.display = 'none'
});
  const sortProd01 = productList01.sort((proA, proB) => {
  return proA.popularity - proB.popularity
  })
  for(let i=0; i<productList01.length; i++) {
    let proDiv = document.createElement('div')
    proDiv.setAttribute('class', 'pro_box')
    
    let proImgBox = document.createElement('div')
    proImgBox.setAttribute('class', 'pro_img_box')
    proDiv.appendChild(proImgBox)

    let proImg = document.createElement('img')
    proImg.setAttribute('src', productList01[i].src)
    proImgBox.appendChild(proImg)

    let proImgOn = document.createElement('img')
    proImgOn.setAttribute('src', productList01[i].hover)
    proImgBox.appendChild(proImgOn)

    proImgOn.style.display = 'none'
    proDiv.addEventListener('mouseover', () => {
      proImg.style.display = 'none'
      proImgOn.style.display = 'block'
      iconBox.style.display = 'block'
    })
    proDiv.addEventListener('mouseout', () => {
      proImg.style.display = 'block'
      proImgOn.style.display = 'none'
      iconBox.style.display = 'none'
    })

    let iconBox = document.createElement('div')
    iconBox.setAttribute('class', 'icon_box')
    let icon = document.createElement('div')
    icon.setAttribute('class', 'icon')
    let cart = document.createElement('div')
    cart.setAttribute('class','cart')
    let cartImg = document.createElement('img')
    cartImg.setAttribute('src', productList01[i].cart)
    cart.appendChild(cartImg)
    icon.appendChild(cart)
    iconBox.appendChild(icon)
    
    let heartOn = document.createElement('div')
    heartOn.setAttribute('class', 'heart_on')
    let heartOff = document.createElement('div')
    heartOff.setAttribute('class', 'heart_off')
    let heartOnImg = document.createElement('img')
    let heartOffImg = document.createElement('img')
    heartOnImg.setAttribute('src', productList01[i].heart_on)
    heartOffImg.setAttribute('src', productList01[i].heart_off)
    heartOff.appendChild(heartOffImg)
    heartOn.appendChild(heartOnImg)
    icon.appendChild(heartOn)
    icon.appendChild(heartOff)
    proDiv.appendChild(iconBox)
    heartOff.addEventListener('click', function() {
      this.style.display = 'none'
      heartOn.style.display = 'block'
    })
    heartOn.addEventListener('click', function() {
      this.style.display = 'none'
      heartOff.style.display = 'block'
    })
    let proNameDiv = document.createElement('div')
    proNameDiv.setAttribute('class', 'pro_name')
    let proNameText = document.createTextNode(productList01[i].name)
    proNameDiv.appendChild(proNameText)
    proDiv.appendChild(proNameDiv)
    let proPrice = document.createElement('div')
    proPrice.setAttribute('class', 'pro_price')
    let proPriceText = document.createTextNode(productList01[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+'원')
    proPrice.appendChild(proPriceText)
    proDiv.appendChild(proPrice)
    popSheet.appendChild(proDiv)
    proDiv.addEventListener('click', () => {
      window.location.href='../detail/detail.html'
    })
  }

lowTohigh.addEventListener('click', () => {
  section.style.display = 'none'
  popSheet.style.display = 'none'
  lowSheet.style.display = 'flex'
  highSheet.style.display = 'none'
})
  const sortProd02= productList01.sort((proA, proB) => {
    return proA.price - proB.price
  })
  for(let i=0; i<productList01.length; i++) {
    let proDiv = document.createElement('div')
    proDiv.setAttribute('class', 'pro_box')
    
    let proImgBox = document.createElement('div')
    proImgBox.setAttribute('class', 'pro_img_box')
    proDiv.appendChild(proImgBox)
  
    let proImg = document.createElement('img')
    proImg.setAttribute('src', productList01[i].src)
    proImgBox.appendChild(proImg)
  
    let proImgOn = document.createElement('img')
    proImgOn.setAttribute('src', productList01[i].hover)
    proImgBox.appendChild(proImgOn)
  
    proImgOn.style.display = 'none'
    proDiv.addEventListener('mouseover', () => {
      proImg.style.display = 'none'
      proImgOn.style.display = 'block'
      iconBox.style.display = 'block'
    })
    proDiv.addEventListener('mouseout', () => {
      proImg.style.display = 'block'
      proImgOn.style.display = 'none'
      iconBox.style.display = 'none'
    })
  
    let iconBox = document.createElement('div')
    iconBox.setAttribute('class', 'icon_box')
    let icon = document.createElement('div')
    icon.setAttribute('class', 'icon')
    let cart = document.createElement('div')
    cart.setAttribute('class','cart')
    let cartImg = document.createElement('img')
    cartImg.setAttribute('src', productList01[i].cart)
    cart.appendChild(cartImg)
    icon.appendChild(cart)
    iconBox.appendChild(icon)
    
    let heartOn = document.createElement('div')
    heartOn.setAttribute('class', 'heart_on')
    let heartOff = document.createElement('div')
    heartOff.setAttribute('class', 'heart_off')
    let heartOnImg = document.createElement('img')
    let heartOffImg = document.createElement('img')
    heartOnImg.setAttribute('src', productList01[i].heart_on)
    heartOffImg.setAttribute('src', productList01[i].heart_off)
    heartOff.appendChild(heartOffImg)
    heartOn.appendChild(heartOnImg)
    icon.appendChild(heartOn)
    icon.appendChild(heartOff)
    proDiv.appendChild(iconBox)
    heartOff.addEventListener('click', function() {
      this.style.display = 'none'
      heartOn.style.display = 'block'
    })
    heartOn.addEventListener('click', function() {
      this.style.display = 'none'
      heartOff.style.display = 'block'
    })
    let proNameDiv = document.createElement('div')
    proNameDiv.setAttribute('class', 'pro_name')
    let proNameText = document.createTextNode(productList01[i].name)
    proNameDiv.appendChild(proNameText)
    proDiv.appendChild(proNameDiv)
    let proPrice = document.createElement('div')
    proPrice.setAttribute('class', 'pro_price')
    let proPriceText = document.createTextNode(productList01[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+'원')
    proPrice.appendChild(proPriceText)
    proDiv.appendChild(proPrice)
    lowSheet.appendChild(proDiv)
    proDiv.addEventListener('click', () => {
      window.location.href='../detail/detail.html'
    })
  }


highTolow.addEventListener('click', () => {
  section.style.display = 'none'
  popSheet.style.display = 'none'
  lowSheet.style.display = 'none'
  highSheet.style.display = 'flex'
})

  const sortProd03= productList01.sort((proA, proB) => {
    return proB.price - proA.price 
  })
  for(let i=0; i<productList01.length; i++) {
    let proDiv = document.createElement('div')
    proDiv.setAttribute('class', 'pro_box')
    
    let proImgBox = document.createElement('div')
    proImgBox.setAttribute('class', 'pro_img_box')
    proDiv.appendChild(proImgBox)
  
    let proImg = document.createElement('img')
    proImg.setAttribute('src', productList01[i].src)
    proImgBox.appendChild(proImg)
  
    let proImgOn = document.createElement('img')
    proImgOn.setAttribute('src', productList01[i].hover)
    proImgBox.appendChild(proImgOn)
  
    proImgOn.style.display = 'none'
    proDiv.addEventListener('mouseover', () => {
      proImg.style.display = 'none'
      proImgOn.style.display = 'block'
      iconBox.style.display = 'block'
    })
    proDiv.addEventListener('mouseout', () => {
      proImg.style.display = 'block'
      proImgOn.style.display = 'none'
      iconBox.style.display = 'none'
    })
  
    let iconBox = document.createElement('div')
    iconBox.setAttribute('class', 'icon_box')
    let icon = document.createElement('div')
    icon.setAttribute('class', 'icon')
    let cart = document.createElement('div')
    cart.setAttribute('class','cart')
    let cartImg = document.createElement('img')
    cartImg.setAttribute('src', productList01[i].cart)
    cart.appendChild(cartImg)
    icon.appendChild(cart)
    iconBox.appendChild(icon)
    
    let heartOn = document.createElement('div')
    heartOn.setAttribute('class', 'heart_on')
    let heartOff = document.createElement('div')
    heartOff.setAttribute('class', 'heart_off')
    let heartOnImg = document.createElement('img')
    let heartOffImg = document.createElement('img')
    heartOnImg.setAttribute('src', productList01[i].heart_on)
    heartOffImg.setAttribute('src', productList01[i].heart_off)
    heartOff.appendChild(heartOffImg)
    heartOn.appendChild(heartOnImg)
    icon.appendChild(heartOn)
    icon.appendChild(heartOff)
    proDiv.appendChild(iconBox)
    heartOff.addEventListener('click', function() {
      this.style.display = 'none'
      heartOn.style.display = 'block'
    })
    heartOn.addEventListener('click', function() {
      this.style.display = 'none'
      heartOff.style.display = 'block'
    })
    let proNameDiv = document.createElement('div')
    proNameDiv.setAttribute('class', 'pro_name')
    let proNameText = document.createTextNode(productList01[i].name)
    proNameDiv.appendChild(proNameText)
    proDiv.appendChild(proNameDiv)
    let proPrice = document.createElement('div')
    proPrice.setAttribute('class', 'pro_price')
    let proPriceText = document.createTextNode(productList01[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+'원')
    proPrice.appendChild(proPriceText)
    proDiv.appendChild(proPrice)
    highSheet.appendChild(proDiv)
    proDiv.addEventListener('click', () => {
      window.location.href='../detail/detail.html'
    })
  }


