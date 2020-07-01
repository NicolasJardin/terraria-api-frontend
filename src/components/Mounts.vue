<template>
  <div class="mount">

    <nav>
      <div class="nav-wrapper green darken-2">
        <a href="#" class="brand-logo center">Cadastro de montarias</a>
      </div>
    </nav>



    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <form @submit.prevent="saveAndUpdateMount">
      <div>
        <input type="text" v-model="mount.mountName" placeholder="Digite o nome da montaria" autofocus>
      </div>
      <div>
        <input type="text" v-model="mount.itemName" placeholder="Digite o nome do item">
      </div>
      <div>
        <input type="text" v-model="mount.description"  placeholder="Digite a descrição da montaria">
      </div>
      <div>
        <input type="number" v-model="mount.mountSpeed" placeholder="Digite a velocidade da montaria">
      </div>
      <div>
        <input type="number" v-model="mount.jumpHeight" placeholder="Digite a altura do pulo">
      </div>
      <button class="waves-effect waves-light btn-small" >Salvar</button>
      <button  v-show="mount.id" @click="cancelUpdate" class="waves-effect waves-light btn-small" >Cancelar</button>
    </form>




    <form @submit.prevent="findById">
      <div>
        <input type="text" v-model="mount.id" placeholder="Digite o id da montaria">
      </div>
      <button class="waves-effect waves-light btn-small" >Buscar</button>
    </form>

    <div v-show="findMount.id">
      <h1>Montaria encontrada</h1>
      <p>
        Código : {{findMount.id}} <br>
        Nome da montaria: {{findMount.mountName}} <br>
        Nome do item: {{findMount.itemName}} <br>
        Descrição: {{findMount.description}} <br>
        Velocidade: {{findMount.mountSpeed}} <br>
        Altura do pulo: {{findMount.id}} <br>
      </p>
    </div>




    <p>Quantidade de montarias: {{mounts.length}}</p>
    <table v-show="mounts.length > 0">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome da montaria</th>
          <th>Nome do item</th>
          <th>Descrição</th>
          <th>Velocidade da montaria</th>
          <th>Altura do pulo</th>
          <th>Excluir</th>
          <th>Alterar</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Código</th>
          <th>Nome da montaria</th>
          <th>Nome do item</th>
          <th>Descrição</th>
          <th>Velocidade da montaria</th>
          <th>Altura do pulo</th>
          <th>Excluir</th>
          <th>Alterar</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="mount in mounts"  :key="mount.id">
          <td>{{mount.id}}</td>
          <td>{{mount.mountName}}</td>
          <td>{{mount.itemName}}</td>
          <td>{{mount.description}}</td>
          <td>{{mount.mountSpeed}}</td>
          <td>{{mount.jumpHeight}}</td>
          <td>
            <button type="button" @click="deleteMount(mount)" class="waves-effect waves-light btn-small">Excluir</button>
          </td>
          <td>
            <button type="button" @click="updateMount(mount)" class="waves-effect waves-light btn-small">Alterar</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

import MountServices from '../services/mountservices'

export default {
  data() {
    return {
      mount : {
        id : '',
        mountName: '',
        itemName: '',
        description: '',
        mountSpeed: '',
        jumpHeight: ''
      },
      findMount : {
        id : '',
        mountName: '',
        itemName: '',
        description: '',
        mountSpeed: '',
        jumpHeight: ''
      },
      mounts: []
    }
  },
  name: 'Mount',
  components: {
  },
  mounted() {
    this.listMounts();
  },
  methods: {
    listMounts() {
      MountServices.findAll().then(response => {
        this.mounts = response.data;
      });
    },
    saveAndUpdateMount() {
      if(!this.mount.id) {
        MountServices.save(this.mount).then(response => {
          this.listMounts();
          this.mount = {};
          alert("Montaria adicionada com sucesso! ");
          return response;
        });
      } else {
        MountServices.update(this.mount).then(response => {
          this.listMounts();
          this.mount = {};
          alert("Montaria atualizado com sucesso! ");
          return response;
        });
      }
    },
    deleteMount(mount) {
      if(confirm("Deseja excluir esta montaria?")) {
        MountServices.delete(mount).then(response => {
          this.listMounts();
          alert("Montaria excluida com sucesso!");
          return response;
        });
      }
    },
    findById() {
      MountServices.findById(this.mount).then(response => {
        this.findMount = response.data;
      });
    },
    updateMount(mount) {
      this.mount = mount;
    },
    cancelUpdate() {
      this.mount = {};
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
