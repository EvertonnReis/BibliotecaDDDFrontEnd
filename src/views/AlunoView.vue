<script setup>
</script>

<template>
  <div>
    <table>
      <tr>
        <td>nome</td>
        <td>sobrenome</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      alunos: []
    };
  },
  methods: {

  }
}
</script>

<style>
.container, .card{
  margin-top: 20px;
}
.card{
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
}
.card-img-top{
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
</style>
