const pbtInput = document.getElementById("pbt");
const pbInput = document.getElementById("pb");
const plInput = document.getElementById("pl");
const tCxInput = document.getElementById("tCx");
const ttInput = document.getElementById("tt");
const ppInput = document.getElementById("pp");
const cxInput = document.getElementById("cx");
const btn = document.getElementById("btnCalc");


function calcularPesos() {
  //Pegando os VALORES dos inputs e convertendo para número
  const pbt = parseFloat(pbtInput.value) || 0;
  let pb = parseFloat(pbInput.value) || 0;
  const tCx = parseFloat(tCxInput.value) || 0;
  const pp = parseFloat(ppInput.value) || 0;
  const cx = parseFloat(cxInput.value) || 0;

  //Declarando as váriaveis para os resultados
  let tt = 0; // Tara Total
  let pl = 0; //Peso Líquido

  // Verifica se o Peso Bruto Total foi preenchido e o Peso Bruto não
  if (pbt > 0 && pb === 0) {
    //Calcula o Peso Bruto
    pb = pbt - pp;
    //Atualiza o campo no HTML para o usuário ver o resultado
    pbInput.value = pb.toFixed(3);
     // .toFixed(3) para formatar com 3 casas decimais
  } else {
    pl = pb - tt;


  }

  //Calcula a Tara Total
  tt = tCx * cx;
  ttInput.value = tt.toFixed(3);

  // Calcula o Peso Líquido
  pl = pb - tt;
  plInput.value = pl.toFixed(3);
}

function rightDate() {

  // 1. Pega o elemento input
  const dataInput = document.getElementById("val");

  //2. Obtém o valor do input (ex: "2025-09-01")
  const valorData = dataInput.value;

  //3. Cria um novo objeto Date com base no valor do input
  const dataObjeto = new Date(valorData);

  //4. Extrai o dia, mês e ano
  const dia = dataObjeto.getDate(); //retorna o dia do mês (1-31)
  const mes = dataObjeto.getMonth() +  1; // Retorna o mês (0-11), por isso somamos 1
  const ano = dataObjeto.getFullYear(); // Retorna o ano com 4 dígitos

  let data = new Date(dataInput);
  data.setDate(data.getDate() - 10);
}

btn.addEventListener('click', calcularPesos);