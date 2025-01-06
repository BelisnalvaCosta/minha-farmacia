// Função de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    if (role === 'cliente') {
      window.location.href = './buscar_medicamento.html';
    } else if (role === 'admin') {
      window.location.href = './cadastro_medicamento.html';
    } else {
      alert('Tipo de usuário inválido!');
    }
  }
  
  // Função para cadastrar cliente
  function cadastrarCliente() {
    alert('Cliente cadastrado com sucesso!');
  }
  
  // Função para cadastrar medicamento
  function cadastrarMedicamento() {
    alert('Medicamento cadastrado com sucesso!');
  }
  
  // Redireciona para a página do cadastro com base no IdCadastro
function navigateToCadastro(cadastroId) {
  // Define o mapeamento dos cadastros fictícios para suas páginas
  const cadastroPages = {
    '101': 'cadastro_cliente.html',
    '102': 'cadastro_medicamento.html',
    '103': 'buscar_medicamentos.html',
    '104': 'central_medicamentos.html',
  };

  // Verifica se o ID do cadastro está mapeado
  if (cadastroPages[cadastroId]) {
    window.location.href = cadastroPages[cadastroId];
  } else {
    alert('Página do cadastro não encontrada!');
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('#carrossel');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % carrossel.children.length;
        carrossel.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);
});
