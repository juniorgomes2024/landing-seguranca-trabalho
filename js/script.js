const elementos = document.querySelectorAll('.sobre-img, .sobre-texto, .card, .diferencial-card, .objetivo-texto, .objetivo-imagem, .contato-info, .formulario');
const observador = new IntersectionObserver((entradas) => {
     entradas.forEach((entrada) => {
         if (entrada.isIntersecting) {
             entrada.target.classList.add('aparecer');
             }

            });
}, {threshold: 0.2});

elementos.forEach((elemento) => {

    observador.observe(elemento);
});

const formulario=document.querySelector("#formulario");
 formulario.addEventListener("submit",function(event){
    event.preventDefault();
    const nome= document.querySelector("#nome").value;
    const email= document.querySelector("#email").value;
    const telefone = document.querySelector("#telefone").value;
    const mensagem= document.querySelector("#mensagem").value;
    const numerowhatszap="5562985130557"
    const texto= ` Olá Gostaria de solicitar informações sobre os serviços de segurança do tarabalho.
    
    nome: ${nome}
    email: ${email}
    telefone: ${telefone}

    mensagem:${mensagem}
    `;

    const url = `https://wa.me/${numerowhatszap}?text=${encodeURIComponent(texto)}`;

    window.open(url,"_blank");

    
});

const telefone=document.querySelector("#telefone");
telefone.addEventListener("input",function(){
    let valor=telefone.value.replace(/\D/g,"");

    if (valor.length>11){
        valor = valor.substring(0,11);
    }

    if (valor.length<=2){
        telefone.value=`(${valor})`;

    }else if (valor.length<=7){
        telefone.value=`(${valor.substring(0,2)})${valor.substring(2, 7)}-${valor.substring(7)}`;
    }
});