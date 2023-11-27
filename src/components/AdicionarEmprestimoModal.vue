<template>
    <div class="modal" v-if="modalAberto">
        <div class="modal-content">
            <form @submit.prevent="adicionarEmprestimo">
                <label for="alunoId">ID do Aluno:</label>
                <input type="text" id="alunoId" v-model="emprestimo.alunoId" required>

                <label for="livroId">ID do Livro:</label>
                <input type="text" id="livroId" v-model="emprestimo.livroId" required>

                <label for="bibliotecariaId">ID da Bibliotecária:</label>
                <input type="text" id="bibliotecariaId" v-model="emprestimo.bibliotecariaId" required>

                <br>
                <button type="submit">Adicionar Empréstimo</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            emprestimo: {
                alunoId: '',
                livroId: '',
                bibliotecariaId: ''
            },
            modalAberto: false
        };
    },
    methods: {
        adicionarEmprestimo() {
            axios.post('https://localhost:7127/api/Emprestimo', this.emprestimo)
                .then(response => {
                    console.log('Empréstimo adicionado com sucesso:', response.data);
                })
                .catch(error => {
                    console.error('Erro ao adicionar empréstimo:', error);
                })
                .finally(() => {
                    this.fecharModal();
                });
        },
        fecharModal() {
            this.modalAberto = false;
            this.limparCampos();
        },
        mostrarModal() {
            this.modalAberto = true;
        },
        limparCampos() {
            this.emprestimo = {
                alunoId: '',
                livroId: '',
                bibliotecariaId: ''
            };
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
  