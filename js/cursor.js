const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY -10)+"px; left:"+
    (e.pageX -10)+"px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add("expand");

    setTimeout(()=>{                                              //pour enlever la class que l'on vient de rajouter 'expand' a un moment voulu
    cursor.classList.remove("expand");
    }, 800);

})
