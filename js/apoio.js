function obterRecomendacao2(){
  const url1 = `http://suggeri.anvil.app/_/api/produtos/`;
  const url = `http://viacep.com.br/ws/02316050/json`;
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


function obterRecomendacao(){
  //var url = `http://viacep.com.br/ws/02316050/json`;
  var url = "js/arqapoio.json";
  var tabela = document.getElementById("tbRecomendados")
  fetch(url)
    .then( (response) => response.json())
      .then( (data) => {
        data.forEach(element => {
          tabela.innerHTML +=`
          <tr>
            <td>${element.id}</td>
            <td>${element.nome}</td>
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

