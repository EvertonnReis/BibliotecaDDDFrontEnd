<template>
    <div class="modal" v-if="modalAberto">
        <div class="modal-content">
            <form @submit.prevent="editarBibliotecaria">

                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="bibliotecaria.nome" required>

                <label for="sobrenome">Sobrenome:</label>
                <input type="text" id="sobrenome" v-model="bibliotecaria.sobrenome" required>

                <label for="email">Email:</label>
                <input type="email" id="email" v-model="bibliotecaria.email" required>

                <label for="login">Login:</label>
                <input type="text" id="login" v-model="bibliotecaria.login" required>

                <label for="senha">Senha:</label>
                <input type="password" id="senha" v-model="bibliotecaria.senha" required>

                <br>
                <button type="submit">Editar Bibliotecária</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            bibliotecaria: {
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
        editarBibliotecaria() {
            axios.put('https://localhost:7127/api/Bibliotecaria', this.bibliotecaria)
                .then(response => {
                    console.log('Bibliotecária editada com sucesso:', response.data);
                })
                .catch(error => {
                    console.error('Erro ao editar bibliotecária:', error);
                })
                .finally(() => {
                    this.fecharModal();
                });
        },
        fecharModal() {
            this.modalAberto = false;
        },
        abrirModal(bibliotecaria) {
            this.modalAberto = true;

            // Preencher os campos do modal com os dados da bibliotecária selecionada
            this.bibliotecaria = {
                nome: bibliotecaria.nome,
                sobrenome: bibliotecaria.sobrenome,
                email: bibliotecaria.email,
                login: bibliotecaria.login,
                senha: bibliotecaria.senha
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
  