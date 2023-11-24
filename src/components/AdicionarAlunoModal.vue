<template>
    <div class="modal" v-if="modalAberto">
        <div class="modal-content">
            <form @submit.prevent="adicionarAluno">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="novoAluno.nome" required>

                <label for="sobrenome">Sobrenome:</label>
                <input type="text" id="sobrenome" v-model="novoAluno.sobrenome" required>

                <label for="email">Email:</label>
                <input type="email" id="email" v-model="novoAluno.email" required>

                <label for="login">Login:</label>
                <input type="text" id="login" v-model="novoAluno.login" required>

                <label for="senha">Senha:</label>
                <input type="password" id="senha" v-model="novoAluno.senha" required>

                <br>
                <button click="adicionarAluno" type="submit">Adicionar Aluno</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            novoAluno: {
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
        adicionarAluno() {
            axios.post('https://localhost:7127/api/Aluno', this.novoAluno)
                .then(response => {
                    console.log('Aluno adicionado com sucesso:', response.data);
                })
                .catch(error => {
                    console.error('Erro ao adicionar aluno:', error);
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
      window.location.reload(); // Recarrega a página
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
