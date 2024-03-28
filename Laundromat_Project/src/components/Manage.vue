<template>
    <div class="background-image"></div>
    <div class="container bg-dark">
      <div class="table-responsive">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Size</th>
              <th>Capacity</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="washingMachine in washingMachines" :key="washingMachine.id">
              <td>{{ washingMachine.id }}</td>
              <td>{{ washingMachine.brand }}</td>
              <td>{{ washingMachine.size }}</td>
              <td>{{ washingMachine.capacity }}</td>
              <td>{{ washingMachine.status }}</td>
              <td>{{ washingMachine.price }}</td>
              <td>
                <button class="btn btn-primary" @click="editMachine(washingMachine)" style="margin-right: 20px; width: 100%; min-width: 100px; max-width: 120px;">Edit</button>
                <button class="btn btn-danger"  @click="deleteMachine(washingMachine.id)" style=" width: 100%; min-width: 100px; max-width: 120px;">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2'
  import { useWashingMachineStore } from '../stores/washingMachineStore.js'
  
  export default {
    setup() {
      const washingMachineStore = useWashingMachineStore()
  
      
      const washingMachines = washingMachineStore.allWashingMachines
  
      
      const editMachine = (machine) => {
       
      }

      const deleteMachine = (id) => {
        
      }
  
      return {
        washingMachines,
        editMachine,
        deleteMachine
      }
    }
  }
  </script>
  
  <style scoped>
  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/IMG/02.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .container {
    background-color: #222831;
    width: 100%;
    margin-top: 100px;
    padding-top: 15px;
    padding: 10px;
    position: relative;
    min-height: 540px;
    max-width: 1875px;
    border-radius: 10px;
    z-index: 2;
  }
  
  .table-responsive {
    overflow-x: auto;
  }
  </style>
  