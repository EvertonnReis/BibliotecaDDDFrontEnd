<template>
    <div class="modal" v-if="modalAberto">
        <div class="modal-content">
            <form @submit.prevent="adicionarBibliotecaria">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="novaBibliotecaria.nome" required>

                <label for="sobrenome">Sobrenome:</label>
                <input type="text" id="sobrenome" v-model="novaBibliotecaria.sobrenome" required>

                <label for="email">Email:</label>
                <input type="email" id="email" v-model="novaBibliotecaria.email" required>

                <label for="login">Login:</label>
                <input type="text" id="login" v-model="novaBibliotecaria.login" required>

                <label for="senha">Senha:</label>
                <input type="password" id="senha" v-model="novaBibliotecaria.senha" required>

                <br>
                <button type="submit">Adicionar Bibliotecária</button>
            </form>
        </div>
    </div>
</template>  
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            novaBibliotecaria: {
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
        adicionarBibliotecaria() {
            axios.post('https://localhost:7127/api/bibliotecaria', this.novaBibliotecaria)
                .then(response => {
                    console.log('Bibliotecária adicionada com sucesso:', response.data);
                })
                .catch(error => {
                    console.error('Erro ao adicionar bibliotecária:', error);
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
  