const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const counter = document.querySelector('#zero')
const thumbs = document.querySelector('.thumbs')
const thumbsPop = document.querySelector('.thumbs-pop')
const bad = document.querySelectorAll('.bad')
const best = document.querySelectorAll('.best')
const img1 = document.querySelector('.img1')
const fall = document.querySelector('.fall')
const cart = document.querySelector('#cart')
const check = document.querySelector('.check')
const cartPop = document.querySelector('.cart-pop')
const ul = document.querySelector('.ul')
const overlay = document.querySelector('.overlay')
const deleteBtn = document.querySelectorAll('.delete')
const itemArray = []

const your = document.querySelector('.your')
const tool = document.querySelector('.tool')
let current = 0
const close = document.querySelector('.close')
const next = document.querySelector('.next')
const prev = document.querySelector('.previous')
const imgPop = document.querySelector('.img-pop')
const add = document.querySelector('.add')
const imgMain = document.querySelector('.img-pop-main')
const imgArray = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg',
]
tool.textContent = itemArray.length
// if(itemArray.length === 0){
//     check.style.display = 'none';
// }
class Cart {
  id = (Date.now() + '').slice(0, 10)
  constructor(name, quantity, price, total, currentImg) {
    this.name = name
    this.quantity = quantity
    this.price = price
    this.total = total
    this.currentImg = currentImg
  }
}
img1.addEventListener('click', function (e) {
  imgPop.classList.remove('hidden')
  overlay.classList.remove('hidden')
})
close.addEventListener('click', function (e) {
  imgPop.classList.add('hidden')
  overlay.classList.add('hidden')
})
// function move(){
//     next.addEventListener("click", function(e){
//         if(current > 3){
//             current = 0;
//         }
//         imgMain.src = `${imgArray[current]}`;
//         current++;
//     })
//     prev.addEventListener("click", function(e){
//         if(current < 0){
//             current = 3;
//         }
//         imgMain.src = `${imgArray[current]}`;
//         current--;
//     })
// }
// move();
function deleten() {
  const deleteBtn = document.querySelectorAll('.delete')
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function () {
      const madder = deleteBtn[i].parentElement
      madder.style.display = 'none'
      index = itemArray.findIndex((item) => item.id === madder.dataset.id)
      if (index >= 0) {
        itemArray.splice(index, 1)
        if (itemArray.length === 0) {
          check.classList.add('hidden')
        }
        tool.textContent = itemArray.length
      }
      if (itemArray.length === 0) {
        your.style.display = 'block'
        // cartPop.classList.add('hidden')
      }

      //   localStorage.removeItem('todo-list') ;
      //   localStorage.setItem('todoList', JSON.stringify(todos))
    })
  }
}
overlay.addEventListener('click', function (e) {
  overlay.classList.add('hidden')
  imgPop.classList.add('hidden')
})
let count = 0
counter.textContent = count
function counter2() {
  minus.addEventListener('click', function (e) {
    if (count > 0) {
      count--
      counter.textContent = count
    }
  })
  plus.addEventListener('click', function (e) {
    if (count < 100) {
      count++
      counter.textContent = count
    }
  })
}
console.log(count)
counter2()
thumbs.addEventListener('click', function (e) {
  const key = e.target.closest('.bad')
  if (!key) return
  const logg = key.dataset.num
  img1.src = `images/image-product-${logg}.jpg`
  bad.forEach(function (bads, i) {
    bads.classList.remove('thumbs-active')
  })
  key.classList.add('thumbs-active')
})
let loggs = 0
thumbsPop.addEventListener('click', function (e) {
  const key = e.target.closest('.best')
  if (!key) return
  loggs = key.dataset.num
  current = loggs - 1
  imgMain.src = `images/image-product-${loggs}.jpg`
  best.forEach(function (bads, i) {
    bads.classList.remove('thumbs-active')
  })
  key.classList.add('thumbs-active')
})
const maddds = document.querySelector('.thumbs-active')
function move() {
  next.addEventListener('click', function (e) {
    current++
    best.forEach(function (bad) {
      bad.classList.remove('thumbs-active')
    })
    if (current > 3) {
      current = 0
    }
    imgMain.src = `${imgArray[current]}`
    best[current].classList.add('thumbs-active')
  })
  prev.addEventListener('click', function (e) {
    current--
    best.forEach(function (bad) {
      bad.classList.remove('thumbs-active')
    })
    if (current < 0) {
      current = 3
    }
    imgMain.src = `${imgArray[current]}`
    best[current].classList.add('thumbs-active')
  })
}
move()
cart.addEventListener('click', function (e) {
  cartPop.classList.toggle('hidden')
})
add.addEventListener('click', function (e) {
  addBuy()
})
function addBuy() {
  const quantity = count
  const name2 = fall.textContent
  const price = 125.0
  const currentImg = img1.getAttribute('src')
  const total = quantity * price
  if (count > 0) {
    const newItem = new Cart(name2, quantity, price, total, currentImg)

    itemArray.push(newItem)
    tool.textContent = itemArray.length
    if (itemArray.length > 0) {
      your.style.display = 'none'
      check.classList.remove('hidden')
    }
    renderCart(newItem)
    deleten()
  }
  count = 0
  counter.textContent = count
}
function renderCart(newItem) {
  const html = `
    <div class="project" data-id="${newItem.id}">
    <img class="img2" src="${newItem.currentImg}" alt="">
    <div class="cart-text">
      <p>${newItem.name}</p>
      <p>$${newItem.price} x ${newItem.quantity} <span>$${newItem.total}.00</span></p>
    </div>
    <img class="delete" src="images/icon-delete.svg" alt="">
  </div>
    `
  ul.insertAdjacentHTML('beforeend', html)
}
const sit = document.querySelector('.img1')
const sits = document.querySelector('.pictures')

// window.addEventListener('scroll', () => {
//   const kill = sit.getBoundingClientRect()
//   console.log(window.scrollY, kill.top)
//   if (window.scrollY > kill.top) {
//     sits.style.backgroundColor = 'green'
//   }
// })
// if(itemArray.length === 0){
//     check.style.display = 'none';
// }

// cart.addEventListener('mouseover', function(e){
//     cartPop.classList.remove('hidden')
// });
// cartPop.addEventListener('mouseout', function(e){
//     cartPop.classList.add('hidden')
// });
