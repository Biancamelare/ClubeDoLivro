
let comentario = document.getElementById("coment");

comentario.addEventListener('blur', mostrar())
comentario.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        mostrar()
    }
}); 

function mostrar()
{
    //var texto = document.createElement('p');
    var user=sessionStorage.getItem('user')
    //texto.innerText= `${user}: ${comentario.value}`
   //document.getElementById("coment2").appendChild(texto);
   document.getElementById("coment2").value +=`\n${user}: ${comentario.value}`
}

function logar(){
  usuarioE= document.getElementById('Login').value;
  document.getElementById('user').value = usuarioE;
  sessionStorage.setItem('user', usuarioE);
  localStorage.setItem(user, usuarioE);
}