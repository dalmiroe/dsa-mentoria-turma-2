//erroMessage = getElement('.error');
var suggeri;
var divReco = document.querySelector('.divRecomendacaox');


var listaImagens = ["image/product-1.png","image/product-2.png","image/product-3.png", "image/product-4.png",
                    "image/product-5.png","image/product-6.png", "image/product-7.png","image/product-8.png",
                    "image/product-9.png","image/product-10.png","image/product-11.png","image/product-12.png",
                    "image/product-13.png","image/product-14.png","image/product-15.png","image/product-16.png"
                  ];

var listaValores = ["R$971,00","R$502", "R$58","R$888",
                    "R$702", "R$158","R$742","R$202,20",
                    "R$602,00","R$100,00","R$200,00","200,00",
                    "R$45,00","R$25,00","R$15,00","78,00"
];

const urlSuggeri = 'https://cd7jwv2auk4wzkrn.anvil.app/_/private_api/NAUJWAV2RPBGYXSGAHBTFQXI/predict_item/fca413d5/A39HTATAQ9V7YF';

function getNr() {
  return  Math.floor(Math.random() *  16);
}



function MontaListaProduto (usuario) {
  lista = `
    <div class="pokemon-info">
        <h1 class="name">Produto 1: ${suggeri[0]}</h1>
        <h1 class="name">Produto 2: ${suggeri[1]}</h1>
        <h1 class="name">Produto 3: ${suggeri[2]}</h1>
        <h1 class="name">Produto 4: ${suggeri[3]}</h1>
        <h1 class="name">Produto 5: ${suggeri[4]}</h1>
    </div>`;

    document.getElementById("p1").innerText = "Produto   " + suggeri[0];
    document.getElementById("v1").innerText = listaValores[getNr()];
    document.getElementById("i1").src = listaImagens[getNr()];

    document.getElementById("p2").innerText = "Produto   " + suggeri[1];
    document.getElementById("v2").innerText = listaValores[getNr()];
    document.getElementById("i2").src = listaImagens[getNr()];

    document.getElementById("p3").innerText = "Produto   " + suggeri[2];
    document.getElementById("v3").innerText = listaValores[getNr()];
    document.getElementById("i3").src = listaImagens[getNr()];

    document.getElementById("p4").innerText = "Produto   " + suggeri[3];
    document.getElementById("v4").innerText = listaValores[getNr()];
    document.getElementById("i4").src = listaImagens[getNr()];

    document.getElementById("p5").innerText = "Produto   " + suggeri[4];
    document.getElementById("v5").innerText = listaValores[getNr()];
    document.getElementById("i5").src = listaImagens[getNr()];
    document.getElementById("rec").innerText = "Recomendações do Usuário " +usuario;

  return lista;
}

function obterRecomendacao(usuario){

  //Obter dados da api
  fetch(urlSuggeri)
    .then(response => response.json())
    .then(data => {
      suggeri = data;
    })
    .catch(err => console.log(err));

  //Temporizador
  setTimeout(function () {
   console.log(suggeri);
   if(suggeri.detail) {
     //informar erro
   }else{
     divReco.innerHTML = MontaListaProduto(usuario);
   }
 }, 2000);
}


function obterRecomendacao2(){
  const url1 = `http://suggeri.anvil.app/_/api/produtos/`;
  //const url = `http://viacep.com.br/ws/02316050/json`;
  fetch(url).then(responde =>  responde.json()).then(console.log);

  /*
  console.log();
  let url = "https://suggeri.anvil.app/_/api/produtos/";
  let request = new XMLHttpRequest();
  request.open("GET",url,false);
  request.send();
  let recomendacao = JSON.parse(request.responseText);
  let tabelaRecomencacao = document.getElementById("tabela")

  recomendacao.forEach(element => {
    let linha = novalinha(element);
    tabelaRecomencacao.appendChild(linha);

  });

  //console.log(https://suggeri.anvil.app/_/api/produtos/)
  */
}

const obterRecomendacaox = async() => {
  const url1 = `http://suggeri.anvil.app/_/api/produtos/`;
  const url2 = `http://viacep.com.br/ws/02316050/json`;
  //url = `https://direct-unwieldy-desk.anvil.app/_/api/dave`;

  //fetch(url,{mode: 'no cors'}).then(responde =>  responde.json()).then(console.log);
  //const dados = await fetch(url,{mode: 'no-cors'});
  const dados = await fetch(url2);
  const reco = await dados.json();
  console.log(reco);

}

function novaLinha(itemRecomendado){
  let linha = document.createElement("tr");
  let tdId = document.createElement("tr");
  tdId.innerHTML = itemRecomendado.logradouro;
  let tdNome = document.createElement("tr");
  tdNome.innerHTML = itemRecomendado.cep;

  linha.appendChild(tdId);
  linha.appendChild(tdNome);
  return linha;
}

function obterRecomendacao1(){
  var url = `http://cd7jwv2auk4wzkrn.anvil.app/_/private_api/NAUJWAV2RPBGYXSGAHBTFQXI/predict_item/fca413d5/A39HTATAQ9V7YF`;
  //var url = "js/arqapoio.json";
  var tabela = document.getElementById("tbRecomendados")

    fetch(url)
    .then( (response) => response.json())
      .then( (data) => {
        data.forEach(element => {
          tabela.innerHTML +=`
          <tr>
            <td>${element.id}</td>

          </tr>
        `;
        });
      })
  .catch((error)=> console.log("Deu algum problema para localizar as recomendações"))

}

async function obterRecomendacao1308(){
  const url1 = `http://suggeri.anvil.app/_/api/produtos/`;
  const url = `http://viacep.com.br/ws/02316050/json`;

  //fetch(url).then(responde =>  responde.json()).then(console.log);
  const dados = await fetch(url);
  var reco = await dados.json();
console.log(reco);


var jsontext = '{ "name":"John", "age":31, "city":"New York" }';
var contact = JSON.parse(jsontext);
console.log(contact);


  const tabelaRecomencacao = document.getElementById("tabela");
  let linha = document.createElement("tr");
  let tdId = document.createElement("td");
  tdId.innerHTML = "1";
  linha.appendChild(tdId);
  tabelaRecomencacao.appendChild(linha);

/*
  var re = await JSON.parse(url);
  for(var i=0;i<re.length;i++){

    console.log(re[i].cep);
    }
  console.log(reco.length);
*/



  /*
  const tabelaRecomencacao = document.getElementById("tabela")
  reco.forEach(element => {
    let ItemReco = novalinha(element);
    tabelaRecomencacao.appendChild(ItemReco);
  });
*/
/*
  console.log();
  let url = "https://suggeri.anvil.app/_/api/produtos/";
  let request = new XMLHttpRequest();
  request.open("GET",url,false);
  request.send();
  let recomendacao = JSON.parse(request.responseText);
  let tabelaRecomencacao = document.getElementById("tabela")

  recomendacao.forEach(element => {
    let linha = novalinha(element);
    tabelaRecomencacao.appendChild(linha);
*/

/*
  var datas = [{"id":28,"Title":"Sweden"}, {"id":56,"Title":"USA"}, {"id":89,"Title":"England"}];
  document.writeln("<table border = '1' width = 100 >");
  document.writeln("<tr><td>No Id</td><td>Title</td></tr>");
  for(var i=0;i<datas.length;i++){
  document.writeln("<tr><td>"+datas[i].id+"</td><td>"+datas[i].Title+"</td></tr>");
  }
  document.writeln("</table>");
 */
};

