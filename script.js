// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:

// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// // ano, cor, preco
// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.

let menu = 1;
let veiculos = [];

// 1 - Cadastrar veículo

function case1() {
  let veiculo = {
    id: veiculos.length + 1,
    modelo: prompt("Digite o modelo do veículo:"),
    marca: prompt("Digite a marca do veículo:"),
    ano: prompt("Digite o ano do veículo:"),
    cor: prompt("Digite a cor do veículo:"),
    preco: prompt("Digite o preço do veículo:"),
  };
  veiculos.push(veiculo);
}

// 2 - Listar todos os veículos

function case2() {
  veiculos.map((veiculo) => {
    veiculo.id,
      veiculo.modelo,
      veiculo.marca,
      veiculo.ano,
      veiculo.cor,
      veiculo.preco;
    console.log(
      "ID:",
      veiculo.id,
      "|",
      "Modelo:",
      veiculo.modelo,
      "|",
      "Marca:",
      veiculo.marca,
      "|",
      "Ano:",
      veiculo.ano,
      "|",
      "Cor:",
      veiculo.cor,
      "|",
      "Preço:",
      veiculo.preco
    );
  });
}

// 3 - Filtrar veículos por marca

function case3() {
  let veiculosFiltrados = prompt(
    "Digite a Marca do Veiculo que voce deseja filtrar"
  );

  veiculos
    .filter((veiculo) => {
      return veiculo.marca === veiculosFiltrados;
    })
    .map((veiculo) => {
      veiculo.id;
      veiculo.modelo;
      veiculo.cor;
      veiculo.preco;
      console.log(veiculo.id, veiculo.modelo, veiculo.cor, veiculo.preco);
    });
}

// 4 - Atualizar veículo

function case4() {
  let veiculoAtualizado = Number(
    prompt("Digite o  ID do Veiculo que voce deseja atualizar ")
  );
  let veiculoEncontrado = veiculos.filter((veiculo) => {
    return veiculo.id === veiculoAtualizado;
  });

  if (veiculoEncontrado.find((veiculo) => veiculo.id === veiculoAtualizado)) {
    veiculos.map((veiculo) => {
      veiculo.cor = prompt("digite a nova cor do seu veiculo");
      veiculo.preco = prompt("Digite o novo preco do seu veiculo");
      console.log(veiculo.cor, veiculo.preco);
    });
  } else {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial "
    );
    return;
  }
}

// 5 - Remover veículo

function case5() {
  let veiculoIdentificador = Number(
    prompt("Digite o  ID do Veiculo que voce deseja atualizar ")
  );
  let ConsultarId = veiculos.filter((veiculo) => {
    return veiculo.id === veiculoIdentificador;
  });
  let apagarId = veiculos.findIndex((veiculo) => veiculo.id);
  if (ConsultarId.find((veiculo) => veiculo.id === veiculoIdentificador)) {
    veiculos.splice(apagarId, 1);
    console.log("voce apagou seu veiculo");
  } else {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial "
    );
  }
  return;
}

// 6 - Sair do sistema

function lacoDeRepeticao() {
  while (true) {
    const opcao = Number(
      prompt(
        "Escolha uma opção:\n1 - Cadastrar veículo\n2 - Listar veículos\n3 - Filtrar veículos por marca\n4 - Atualizar veículo\n5 - Remover veículo\n6 - Sair"
      )
    );
    switch (opcao) {
      case 1:
        case1();
        break;
      case 2:
        case2();
        break;
      case 3:
        case3();
        break;
      case 4:
        case4();
        break;
      case 5:
        case5();
        break;
      case 6:
        return false;
        break;
      default:
        alert("Opcao invalida");
        break;
    }
  }
}
lacoDeRepeticao();
