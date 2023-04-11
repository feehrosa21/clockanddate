function clock () {
   
    var img= document.getElementById('imagem')

    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date(); //tudo que se refere a tempo, graças a isso ele sabe a hora.
    const horas = horaAgora.getHours (); //vai pegar apenas a hora da constante horaAgora.
    const minutos = horaAgora.getMinutes (); 
    const segundos = horaAgora.getSeconds ();
    
    const formatoHoras = horas.toString ().padStart(2, "0"); //para definir o começo da string, quantos caracteres terá e por onde ela vai começar.


    const formatoMinutos = minutos.toString ().padStart(2, '0');
    const formatoSegundos = segundos.toString ().padStart(2, '0');
    
    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`; //a crase serve para usar placeholder (maneira mais fácil de concatenar).

    const frase = document.querySelector('.frase');

    dia = new Array ('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'); //na prática é uma variavel que armaena varios dados. Arranjo (variedade) que vai armazenar vários elementos, como uma coleção.

    mes = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]},  ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`
    

    if (formatoHoras >= 0 && formatoHoras <12){
        document.body.style.backgroundImage="url(img/fundosol.jpg)"
        document.body.style.backgroundSize="cover"
        document.body.style.backgroundPosition= "0px -80px"

        img.src = "img/borboleta.gif" 

    }

    else if (formatoHoras >=12 && formatoHoras <18){
        document.body.style.backgroundImage="url(https://c.wallhere.com/photos/a2/22/minimalism_landscape_Firewatch-9512.jpg!d)"
        document.body.style.backgroundSize="cover"
        document.body.style.backgroundPosition= "0px -40px"
        document.querySelector('#frase').style.color ="#e9f4aa"
      

        img.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2liNWdnYzh3aHJtcDd3Zm9xcDJ4bnpjaW4zZGExMXA5cHlhM3h0dSZjdD1z/ghiMEnnnIE5xe/giphy.gif"
    }

    else {
        document.body.style.backgroundImage= "url(img/flornoite.jpg)"
        document.body.style.backgroundSize="cover"
        document.body.style.backgroundPosition= "0px -20px"
        document.querySelector('h1').style.color ="#f2dfb1"
        document.querySelector('span').style.color ="#d15b55fb"
        document.querySelector('#frase').style.color ="#b38ca4"

        img.src = "https://media2.giphy.com/media/f8hNMi8xjX8fVbNhet/giphy.gif?cid=790b7611hwrhj4l1p0cqgm0bk3zt4hbzru4m90l3sqsr1azm&rid=giphy.gif&ct=s"
    }

}

setInterval (clock, 1000);

//https://pt.stackoverflow.com/questions/354209/mudar-fundo-de-site-com-script-conforme-horario-do-dia.
