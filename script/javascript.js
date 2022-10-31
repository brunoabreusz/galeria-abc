function logar() {
    let usuario = document.querySelector('#usuario').value;
    let senha = document.querySelector('#senha').value;
   

    if(usuario == "admin" & senha == "admin"){
       return window.location.href = "galery.html";
    }else{
        alert('Conta não cadastrada');
    }
}

