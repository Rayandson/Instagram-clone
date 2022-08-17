function ativarLike(elemento) {
   const hearts = elemento.parentNode;
   hearts.innerHTML = '<ion-icon class="like-red mouse-pointer"  onclick="desativarLike(this)" name="heart"></ion-icon>';
   //console.log(elemento);
}

function desativarLike(elemento) {
    const hearts = elemento.parentNode;
    
    hearts.innerHTML = '<ion-icon class="like mouse-color" onclick="ativarLike(this)" name="heart-outline"></ion-icon>';
} 