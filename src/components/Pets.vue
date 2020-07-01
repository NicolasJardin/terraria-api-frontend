<template>
  <div class="pet">

    <nav>
      <div class="nav-wrapper green darken-2">
        <a href="#" class="brand-logo center">Cadastro de pets</a>
      </div>
    </nav>



    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <form @submit.prevent="saveAndUpdatePet">
      <div>
        <input type="text" v-model="pet.petName" placeholder="Digite o nome do pet" autofocus>
      </div>
      <div>
        <input type="text" v-model="pet.itemName" placeholder="Digite o nome do item">
      </div>
      <div>
        <input type="text" v-model="pet.tooltip"  placeholder="Digite a descrição do pet">
      </div>
      <button class="waves-effect waves-light btn-small" >Salvar</button>
      <button  v-show="pet.id" @click="cancelUpdate" class="waves-effect waves-light btn-small" >Cancelar</button>
    </form>




    <form @submit.prevent="findById">
      <div>
        <input type="text" v-model="pet.id" placeholder="Digite o id do pet">
      </div>
      <button class="waves-effect waves-light btn-small" >Buscar</button>
    </form>

    <div v-show="findPet.id">
      <h1>Pet encontrado</h1>
      <p>
        Código : {{findPet.id}} <br>
        Nome do pet: {{findPet.petName}} <br>
        Nome do item: {{findPet.itemName}} <br>
        Descrição do pet: {{findPet.tooltip}} <br>
      </p>
    </div>




    <p>Quantidade de pets: {{pets.length}}</p>
    <table v-show="pets.length > 0">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome do pet</th>
          <th>Nome do item</th>
          <th>Descrição</th>
          <th>Excluir</th>
          <th>Alterar</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Código</th>
          <th>Nome do pet</th>
          <th>Nome do item</th>
          <th>Descrição</th>
          <th>Excluir</th>
          <th>Alterar</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="pet in pets"  :key="pet.id">
          <td>{{pet.id}}</td>
          <td>{{pet.petName}}</td>
          <td>{{pet.itemName}}</td>
          <td>{{pet.tooltip}}</td>
          <td>
            <button type="button" @click="deletePet(pet)" class="waves-effect waves-light btn-small">Excluir</button>
          </td>
          <td>
            <button type="button" @click="updatePet(pet)" class="waves-effect waves-light btn-small">Alterar</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

import PetServices from '../services/petservices'

export default {
  data() {
    return {
      pet : {
        id : '',
        petName: '',
        itemName: '',
        tooltip: ''
      },
      findPet : {
        id : '',
        petName: '',
        itemName: '',
        tooltip: ''
      },
      pets: []
    }
  },
  name: 'Pet',
  components: {
  },
  mounted() {
    this.listPets();
  },
  methods: {
    listPets() {
      PetServices.findAll().then(response => {
        this.pets = response.data;
      });
    },
    saveAndUpdatePet() {
      if(!this.pet.id) {
        PetServices.save(this.pet).then(response => {
          this.listPets();
          this.pet = {};
          alert("Pet adicionado com sucesso! ");
          return response;
        });
      } else {
        PetServices.update(this.pet).then(response => {
          this.listPets();
          this.pet = {};
          alert("Pet atualizado com sucesso! ");
          return response;
        });
      }
    },
    deletePet(pet) {
      if(confirm("Deseja excluir este pet?")) {
        PetServices.delete(pet).then(response => {
          this.listPets();
          alert("Pet excluido com sucesso!");
          return response;
        });
      }
    },
    findById() {
      PetServices.findById(this.pet).then(response => {
        this.findPet = response.data;
      });
    },
    updatePet(pet) {
      this.pet = pet;
    },
    cancelUpdate() {
      this.pet = {};
      alert("Alteração cancelada!");
    }

  }

}
</script>

<style>
button {
  margin: 5px;
}
a {
  margin: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
