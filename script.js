const pbtInput = document.getElementById("pbt");
const pbInput = document.getElementById("pb");
const tCxInput = document.getElementById("tCx");
const ppInput = document.getElementById("pp");
const cxInput = document.getElementById("cx");
const btn = document.getElementById("btnCalc");

function calcularPesos() {
  //Pegando os VALORES dos inpu ts e convertendo para número
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
    pbInput.value = pb.toFixed(3); // .toFixed(3) para formatar com 3 casas decimais
  }

  //Calcula a Tara Total
  tt = tCx * cx;

  // Calcula o Peso Líquido
  pl = pb - tt;

  // Exibe os resultados no console
  console.log("--------------------");
  console.log("Peso Bruto Total (PBT):", pbt);
  console.log("Peso do Palete:", pp);
  console.log("Peso Bruto (PB):", pb);
  console.log("Tara por Caixa:", tCx);
  console.log("Quantidade de Caixas:", cx);
  console.log("Sua Tara Total (TT) é:", tt);
  console.log("Seu Peso Líquido (PL) é:", pl);
  console.log("--------------------");
}

btn.addEventListener('click', calcularPesos);