<template>
  <div>
  <nav>
    <div class="nav-wrapper green darken-2">
      <a href="#" class="brand-logo center">Sobre</a>
    </div>
  </nav>

  <div class="about">
    <p>Nome: Nícolas Jardin dos Santos </p>
    <p>Data de nascimento: 02/02/2002 </p>
    <p>Idade: 18 </p>
    <a href="https://github.com/NicolasJardin">GitHub</a>
    <p>E-mail: nicolasjardindosantos@gmail.com </p>

    <img alt="Vue logo" src="../assets/Nicolas.jpeg" width="230px" height="250px">
  </div>

    <div class="about">
      <p>Nome: Gustavo da Silva James </p>
      <p>Data de nascimento: 18/05/2001 </p>
      <p>Idade: 19 </p>
      <a href="https://github.com/Gustavo-James">GitHub</a>
      <p>E-mail: gustavo.s.james@gmail.com </p>

      <img alt="Vue logo" src="../assets/James.png" width="230px" height="250px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
  }
}
</script>


<style scoped>
.about {
  text-align: left;
}
a {
  margin: 0px;
}
</style>
