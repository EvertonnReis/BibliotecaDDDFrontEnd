<template>
    <div class="modal" v-if="modalAberto">
      <div class="modal-content">
        <form @submit.prevent="editarAluno">
          <label for="id">ID:</label>
          <input type="text" id="id" v-model="aluno.id" readonly>
  
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="aluno.nome" required>
  
          <label for="sobrenome">Sobrenome:</label>
          <input type="text" id="sobrenome" v-model="aluno.sobrenome" required>
  
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="aluno.email" required>
  
          <label for="login">Login:</label>
          <input type="text" id="login" v-model="aluno.login" required>
  
          <label for="senha">Senha:</label>
          <input type="password" id="senha" v-model="aluno.senha" required>
  
          <br>
          <button type="submit">Editar Aluno</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        aluno: {
          id: '',
          nome: '',
          sobrenome: '',
          email: '',
          login: '',
          senha: ''
        },
        modalAberto: false
      };
    },
    methods: {
      editarAluno() {
        axios.put('https://localhost:7127/api/Aluno/' + this.aluno.id, this.aluno)
          .then(response => {
            console.log('Aluno editado com sucesso:', response.data);
          })
          .catch(error => {
            console.error('Erro ao editar aluno:', error);
          })
          .finally(() => {
            this.fecharModal();
          });
      },
      fecharModal() {
        this.modalAberto = false;
      },
      abrirModal(aluno) {
        this.modalAberto = true;
  
        // Preencher os campos do modal com os dados do aluno selecionado
        this.aluno = {
          id: aluno.id,
          nome: aluno.nome,
          sobrenome: aluno.sobrenome,
          email: aluno.email,
          login: aluno.login,
          senha: aluno.senha
        };
      }
    }
  };
  </script>

<style scoped>
.modal {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    padding: 20px;
    border-radius: 8px;
    width: 50%;
}

form {
    text-align: center;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 50%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button {
    background-color: #3498db;
    /* Cor de fundo do botão */
    color: #fff;
    /* Cor do texto do botão */
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
