const bookEl = document.getElementById('book')
const tripEl = document.getElementById('trip')
const checkInEl = document.getElementById('checkIn')
const flightStatus = document.getElementById('flightStatus')

const privEl = document.getElementById('priv')
const baggageEl = document.getElementById('baggage')
const mobileEl = document.getElementById('mobile')
const torontoEl = document.getElementById('toronto')

// select btns
const bookBtn = document.querySelector('.tab1')
const tripBtn = document.querySelector('.tab2')
const checkBtn = document.querySelector('.tab3')
const flightBtn = document.querySelector('.tab4')

const privBtn = document.querySelector('.tab5')
const bagBtn = document.querySelector('.tab6')
const mobiBtn = document.querySelector('.tab7')
const TorBtn = document.querySelector('.tab8')

// add event listeners
bookBtn.addEventListener('click', function(){
    show(bookEl)
    hide([tripEl, checkInEl,flightStatus])
    active(bookBtn)
    inActive([tripBtn, checkBtn,flightBtn])
})

tripBtn.addEventListener('click', function(){
    show(tripEl)
    hide([bookEl, checkInEl,flightStatus])
    active(tripBtn)
    inActive([bookBtn, checkBtn,flightBtn])
})

checkBtn.addEventListener('click', function(){
    show(checkInEl)
    hide([tripEl, bookEl,flightStatus])
    active(checkBtn)
    inActive([tripBtn, bookBtn,flightBtn])
})

flightBtn.addEventListener('click', function(){
    show(flightStatus)
    hide([tripEl, checkInEl,bookEl])
    active(flightBtn)
    inActive([tripBtn, checkBtn,bookBtn])
})

// second tab switch
privBtn.addEventListener('click', function(){
    show(privEl)
    hide([baggageEl, mobileEl,torontoEl])
    active1(privBtn)
    inActive1([bagBtn, mobiBtn,TorBtn])
})

bagBtn.addEventListener('click', function(){
    show(baggageEl)
    hide([privEl, mobileEl,torontoEl])
    active1(bagBtn)
    inActive1([privBtn, mobiBtn,TorBtn])
})

mobiBtn.addEventListener('click', function(){
    show(mobileEl)
    hide([privEl, baggageEl,torontoEl])
    active1(mobiBtn)
    inActive1([privBtn, bagBtn,TorBtn])
})

TorBtn.addEventListener('click', function(){
    show(torontoEl)
    hide([privEl, baggageEl,mobileEl])
    active1(TorBtn)
    inActive1([privBtn, mobiBtn, bagBtn])
})

// functions
function show(element){
    element.classList.remove('hide')
}

function hide(elements){
    elements.forEach( element => {
        element.classList.add('hide')})
}

function active(element){
    element.classList.add('active')
}

function active1(element){
    element.classList.add('active1')
}

function inActive(elements){
    elements.forEach( element => {
        element.classList.remove('active')})
}

function inActive1(elements){
    elements.forEach( element => {
        element.classList.remove('active1')})
}




