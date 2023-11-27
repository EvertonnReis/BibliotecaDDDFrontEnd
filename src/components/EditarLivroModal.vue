<template>
    <div class="modal" v-if="modalAberto">
      <div class="modal-content">
        <form @submit.prevent="editarLivro">
          <label for="titulo">Título:</label>
          <input type="text" id="titulo" v-model="livro.titulo" required>
  
          <label for="autor">Autor:</label>
          <input type="text" id="autor" v-model="livro.autor" required>
  
          <label for="emprestado">Emprestado:</label>
          <input type="checkbox" id="emprestado" v-model="livro.emprestado">
  
          <br>
          <button type="submit">Editar Livro</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        livro: {
          titulo: '',
          autor: '',
          emprestado: false
        },
        modalAberto: false
      };
    },
    methods: {
      editarLivro() {
        axios.put(`https://localhost:7127/api/Livro`, this.livro)
          .then(response => {
            console.log('Livro editado com sucesso:', response.data);
            this.fecharModal();
          })
          .catch(error => {
            console.error('Erro ao editar livro:', error);
          });
      },
      fecharModal() {
        this.modalAberto = false;
      },
      abrirModal(livro) {
        this.modalAberto = true;
  
        this.livro = {
          livroId: livro.livroId,
          titulo: livro.titulo,
          autor: livro.autor,
          emprestado: livro.emprestado
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
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  