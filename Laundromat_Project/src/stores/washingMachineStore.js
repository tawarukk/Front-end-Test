import { defineStore } from 'pinia'

export const useWashingMachineStore = defineStore('washingMachine', {
  state: () => ({
    washingMachines: [
      {
        "id": "A1",
        "brand": "Samsung",
        "size": "Medium",
        "capacity": "8 kg",
        "status": "Available",
        "price": 50.00
      },
      {
        "id": "A2",
        "brand": "LG",
        "size": "Large",
        "capacity": "10 kg",
        "status": "UnAvailable",
        "price": 60.00
      },
      {
        "id": "A3",
        "brand": "Electrolux",
        "size": "Medium",
        "capacity": "8 kg",
        "status": "Occupied",
        "price": 55.00
      },
      {
        "id": "A4",
        "brand": "Electrolux",
        "size": "Large",
        "capacity": "12 kg",
        "status": "Available",
        "price": 70.00
      },
      {
        "id": "B1",
        "brand": "Bosch",
        "size": "Small",
        "capacity": "6 kg",
        "status": "Available",
        "price": 45.00
      },
      {
        "id": "B2",
        "brand": "Bosch",
        "size": "Medium",
        "capacity": "8 kg",
        "status": "Available",
        "price": 50.00
      },
      {
        "id": "B3",
        "brand": "Panasonic",
        "size": "Large",
        "capacity": "10 kg",
        "status": "Occupied",
        "price": 65.00
      },
      {
        "id": "B4",
        "brand": "Panasonic",
        "size": "Medium",
        "capacity": "8 kg",
        "status": "UnAvailable",
        "price": 50.00
      },
      {
        "id": "C1",
        "brand": "Panasonic",
        "size": "Large",
        "capacity": "10 kg",
        "status": "UnAvailable",
        "price": 65.00
      },
      {
        "id": "C2",
        "brand": "LG",
        "size": "Medium",
        "capacity": "8 kg",
        "status": "Available",
        "price": 55.00
      },
      {
        "id": "D1",
        "brand": "Samsung",
        "size": "Large",
        "capacity": "10 kg",
        "status": "Unailable",
        "price": 60.00
      },
      {
        "id": "D2",
        "brand": "LG",
        "size": "Medium",
        "capacity": "8 kg",
        "status": "Available",
        "price": 55.00
      },
      {
        "id": "F1",
        "brand": "Samsung",
        "size": "Small",
        "capacity": "6 kg",
        "status": "Available",
        "price": 45.00
      },
      {
        "id": "F2",
        "brand": "Electrolux",
        "size": "Medium",
        "capacity": "8 kg",
        "status": "UnAvailable",
        "price": 50.00
      }
            ]
  }),
  actions: {
    fetchWashingMachines() {
    }
  },
  getters: {
    availableWashingMachines: state => {
      return state.washingMachines.filter(machine => machine.status !== 'Occupied')
    },
    occupiedWashingMachines: state => {
      return state.washingMachines.filter(machine => machine.status === 'Occupied')
    },
    allWashingMachines: state => {
      return state.washingMachines;
    }
  }
})
