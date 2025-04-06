const mesAtual = document.getElementById('mes&ano'),
    diaTag = document.querySelector('#dias'),
    iconeAntesDepois = document.querySelectorAll('.icone span');

var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

let data = new Date(),
    mes = data.getMonth(),
    indMes = data.getMonth(),
    ano = data.getFullYear();

function displayData() {
    let diaAtual = new Date(ano, mes + 1, 0).getDate(), //abril - 30
        primeirosDiasMes = new Date(ano, mes, 1).getDay(),//março - 2
        ultimosDiasMesAnterior = new Date(ano, mes, 0).getDate(), //março - 31
        primeirosDiasProxMes = new Date(ano, mes, diaAtual).getDay(); // maio - 3
    let liDia = "";

    for (let i = primeirosDiasMes; i > 0; i--) {
        let anterior = i === data.getDate();
        liDia += `<li class="desativo">${ultimosDiasMesAnterior - i + 1}</li>`;
    }


    for (let i = 1; i <= diaAtual; i++) {

        let hoje = i === data.getDate() && mes === new Date().getMonth() && ano === new Date().getFullYear() ? 'ativo cad' :
            i < data.getDate() && mes === new Date().getMonth() && ano === new Date().getFullYear() ? 'desativo' : 'cad';

        liDia += `<li class="${hoje}">${i}</li>`;
    }

    for (let i = primeirosDiasProxMes; i < 6; i++) {
        let anterior = i === data.getDate();
        liDia += `<li class="desativo">${i - primeirosDiasProxMes + 1}</li>`;
    }

    mesAtual.innerText = `${meses[mes]} ${ano}`;
    diaTag.innerHTML = liDia;
}

displayData();

iconeAntesDepois.forEach(icone => {
    icone.addEventListener("click", () => {
        let ind;
        mes = icone.id === "antes" ? mes - 1 === indMes - 1 ? mes : mes - 1 : ind = mes + 1;

        if (mes < 0 || mes > 11) {
            data = new Date(ano, mes),
                mes = data.getMonth(),
                ano = data.getFullYear();
        } else {
            data = new Date();
        }
        displayData();
    })
})