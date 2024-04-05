

document.body.classList.toggle('dark')


const elemento = document.querySelector("#escreverauto")
const textoArray = elemento.innerHTML.split('');

elemento.innerHTML = '';
textoArray.forEach((letra, i) => {

    setTimeout(function () {
        elemento.innerHTML += letra
    }, 80 * i)


    const hdbtn = document.getElementById("hiddenbutton")
});
document.getElementById("divhdbutton").onclick = function () { myFunction() };
let seila = 0;
function myfuction() {
    if (seila == 0) {
        document.getElementById("divcima").style.display = "block";

        seila = 1;
    }
    else {
        document.getElementById("divcima").style.display = "none";
        seila = 0;
    }
};
const chk = document.getElementById('chk')
let tela = 0;
chk.addEventListener('change', () => {
    if (tela = 0) {
        document.body.classList.toggle('white')
        document.body.classList.toggle('dark') = false;
        tela = 1;
    }
    else {
        tela = 0;
        document.body.classList.toggle('dark')
        document.body.classList.toggle('white') = false;
    }
})
// function mascaratelefone() {
    // var tel = document.getElementById("telefo").value
    // console.log(tel)
    // tel = tel.slice(0, 17)
    // console.log(tel)
    // document.getElementById("telefo").value = tel
    // var tel_formatado = document.getElementById("telefo").value
    // if (tel_formatado[0] != "+") {
    //     if (tel_formatado[0] != undefined) {
    //         document.getElementById("telefo").value = "+" + tel_formatado[0];
    //     }
    // }
    // if (tel_formatado[3] != "(") {
    //     if (tel_formatado[3] != undefined) {
    //         document.getElementById("telefo").value = tel_formatado.slice(0, 3) + "(" + tel_formatado[3];
    //     }
    // }
    // if (tel_formatado[6] != ")") {
    //     if (tel_formatado[6] != undefined) {
    //         document.getElementById("telefo").value = tel_formatado.slice(0, 6) + ")" + tel_formatado[6];
    //     }
    // }
    // if (tel_formatado[12] != "-") {
    //     if (tel_formatado[12] != undefined) {
    //         document.getElementById("telefo").value = tel_formatado.slice(0, 12) + "-" + tel_formatado[12];
    //     }
    // }
//}
function mascaranome() {
    var input = document.getElementById("txtfirstname");
    var valorInput = input.value;

    // Certifique-se de que há algum texto no input antes de capitalizar
    if (valorInput.length > 0) {
        // Divida o texto em palavras
        var palavras = valorInput.split(' ');

        // Capitalize a primeira letra de cada palavra
        for (var i = 0; i < palavras.length; i++) {
            palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
        }

        // Junte as palavras de volta em uma string
        input.value = palavras.join(' ');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const growingBars = document.querySelectorAll('.growing-bar');
    growingBars.forEach(bar => {
        bar.classList.add('visible');
    });
});

const txtname = document.getElementById("txtfirstname");
const txtemail = document.getElementById("ema");
const txttelefone = document.getElementById("telefo");
const txtmessagem = document.getElementById("Messagem");
const formu = document.getElementById("formu");

if (txtname && txtemail && txttelefone && txtmessagem && formu) {
    formu.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita o envio do formulário tradicional

        console.log(formu);

        const r = await fetch("https://backend-nine-weld.vercel.app:3000/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                subject: txtname.value,
                text: txtmessagem.value + " - " + txttelefone.value + " - " + txtemail.value 
            })
        });

        const data = await r.json();
        if(r.status == 200){
            alert("email enviado")
            txtemail.value = "";
            txttelefone.value = "";
            txtname.value = "";
            txtmessagem.value = "";
        }else{
            alert("email nao enviado")
        }
    });
} else {
    console.error("Um ou mais elementos não foram encontrados.");
}
