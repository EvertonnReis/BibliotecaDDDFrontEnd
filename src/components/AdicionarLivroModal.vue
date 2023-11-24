<template>
    <div class="modal" v-if="modalAberto">
      <div class="modal-content">
        <form @submit.prevent="adicionarLivro">
          <label for="titulo">Título:</label>
          <input type="text" id="titulo" v-model="novoLivro.titulo" required>
  
          <label for="autor">Autor:</label>
          <input type="text" id="autor" v-model="novoLivro.autor" required>
  
          <label for="emprestado">Emprestado:</label>
          <select id="emprestado" v-model="novoLivro.emprestado" required>
            <option value=true>Sim</option>
            <option value=false>Não</option>
          </select>
  
          <br>
          <button type="submit">Adicionar Livro</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        novoLivro: {
          livroId: 0,
          titulo: '',
          autor: '',
          emprestado: false
        },
        modalAberto: false
      };
    },
    methods: {
      adicionarLivro() {
        this.novoLivro.emprestado = this.novoLivro.emprestado === 'true';
        
        axios.post('https://localhost:7127/api/Livro', this.novoLivro)
          .then(response => {
            console.log('Livro adicionado com sucesso:', response.data);
            this.atualizarPagina(); // Atualiza a página após a adição do livro
          })
          .catch(error => {
            console.error('Erro ao adicionar livro:', error);
          })
          .finally(() => {
            this.fecharModal();
          });
      },
      fecharModal() {
        this.modalAberto = false;
      },
      abrirModal() {
        this.modalAberto = true;
      },
      atualizarPagina() {
        this.$emit('livroAdicionado', this.novoLivro); // Emitir um evento para notificar o componente pai
        this.novoLivro = { titulo: '', autor: '', emprestado: 'false' }; // Limpar os dados do novo livro
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 50%;
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
  
  input,
  select {
    width: 50%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  
  button {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  