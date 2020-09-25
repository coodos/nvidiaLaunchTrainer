const ready = document.getElementById('Ready');
const trainer = document.getElementById('Notify');

ready.addEventListener('click', () => {
    ready.style.display = 'none';
    trainer.style.display = 'block'
    let randomTime = Math.floor(Math.random() * 10);
    setTimeout(() => {
        trainer.innerText = 'Buy Now';
        trainer.disabled = false;
    }, randomTime*1000);
    setTimeout(() => {
        trainer.innerText = 'Out of Stock ';
        trainer.disabled = true;
    }, (randomTime*1000) + 300);
});

trainer.addEventListener('click', () => {
    alert('Wow you are fast, congrats on the GPU')
});