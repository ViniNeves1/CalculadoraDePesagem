const pbtInput = document.getElementById("pbt");
const pbInput = document.getElementById("pb");
const plInput = document.getElementById("pl");
const tCxInput = document.getElementById("tCx");
const ttInput = document.getElementById("tt");
const ppInput = document.getElementById("pp");
const cxInput = document.getElementById("cx");
const btn = document.getElementById("btnCalc");
const valInput = document.getElementById("val");


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

function calcularNovaValidade() {
  // 1. Pega o elemento input
  const inputValidade = document.getElementById('val');

  // 2. Obtém o valor do input (ex: "2025-09-15")
  const dataString = inputValidade.value;

  // Verifica se o campo não está vazio
  if (dataString) {
    // 3. Cria um objeto Date a partir da string
    const dataObjeto = new Date(dataString);

    // Usa setDate() para subtrair 10 dias.
    // O JavaScript lida automaticamente com a mudança de mês e ano.
    dataObjeto.setDate(dataObjeto.getDate() - 10);

    // 4. Converte a data de volta para o formato YYYY-MM-DD
    // O .toISOString().substring(0, 10) é a maneira mais segura para isso.
    const novaDataParaInput = dataObjeto.toISOString().substring(0, 10);
    
    // 5. Exibe o resultado no próprio input
    inputValidade.value = novaDataParaInput;
  } else {
    // Caso o usuário não tenha selecionado uma data
    alert("Por favor, selecione uma data.");
  }
}

btn.addEventListener('click', calcularPesos);