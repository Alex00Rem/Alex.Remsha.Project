const cards = document.querySelectorAll('.five__card');

for (let i = 0; i < cards.length; i++) {
    const five__card = cards [i];
    five__card.addEventListener('mousemove', startRotate);
    five__card.addEventListener('mouseout', stopRotate);
}

function startRotate(event){
    const sectionfivecardimg = this.querySelector('.section__five-card img');
    const halfheight = sectionfivecardimg.offsetheight / 2;
    sectionfivecardimg.style.transform = 'rotateX(' + -(event.offsetY - 
    halfheight) / 5 + 'deg) rotateY(' + (event.offsetX - 
    halfheight) / 5 + 'deg)';
}

function stopRotate(event){
    const sectionfivecardimg = this.querySelector('.section__five-card img');
    sectionfivecardimg.style.transform = 'rotate(0)';
}
