<template>
    <div class="background-image"></div>
    <div class="container bg-dark">
        <div class="container-custom">
            <div class="card mb-3" v-for="washingMachine in allWashingMachines" :key="washingMachine.id" 
            :class="{ 'occupied-card': washingMachine.status === 'Occupied' , 'unAvailable-card': washingMachine.status === 'UnAvailable'} ">
                <div class="card-body">
                    <img v-if="washingMachine.brand == 'Samsung'" src="@/assets/IMG/02.jpg" class="card-img-top mb-2" alt="...">
                    <img v-else-if="washingMachine.brand == 'LG'" src="@/assets/IMG/04.jpg" class="card-img-top mb-2" alt="...">
                    <img v-else-if="washingMachine.brand == 'Electrolux'" src="@/assets/IMG/05.jpg" class="card-img-top mb-2" alt="...">
                    <img v-else-if="washingMachine.brand == 'Bosch'" src="@/assets/IMG/06.jpg" class="card-img-top mb-2" alt="...">
                    <img v-else-if="washingMachine.brand == 'Panasonic'" src="@/assets/IMG/07.jpg" class="card-img-top mb-2" alt="...">
                    <h5 class="card-title">เครื่องซักผ้า : {{ washingMachine.id }}</h5>
                    <p class="card-text">ยี่ห้อ: {{ washingMachine.brand }} </p>
                    <p class="card-text">ขนาด: {{ washingMachine.size }}</p>
                    <p class="card-text">ความจุ: {{ washingMachine.capacity }}</p>
                    <p v-if="washingMachine.status == 'Available' " class="card-text">สถานะ: พร้อมให้บริการ</p>
                    <p v-else-if="washingMachine.status == 'UnAvailable' " class="card-text">สถานะ: กำลังให้บริการ</p>
                    <p v-else-if="washingMachine.status == 'Occupied' " class="card-text">สถานะ: ไม่พร้อมให้บริการ</p>
                    <p class="card-text">ราคา: {{ washingMachine.price }} บาท</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useWashingMachineStore } from '../stores/washingMachineStore.js'

export default {
    data() {
        return {
            
        };
    },
    methods: {
    },
    setup() {
    const washingMachineStore = useWashingMachineStore()

    washingMachineStore.fetchWashingMachines()

    const availableWashingMachines = washingMachineStore.availableWashingMachines
    const occupiedWashingMachines = washingMachineStore.occupiedWashingMachines
    const allWashingMachines = washingMachineStore.allWashingMachines

    return {
      availableWashingMachines,
      occupiedWashingMachines,
      allWashingMachines
    }
  }
}
</script>

<style scoped>
.card img{
    max-width: 250px;
    border-radius: 10px;
}
.card-body h3 p{
    border-radius: 10px;
    margin: 10px;
}
.Topic{
    color: #EEEEEE;
}
.Topic-H{
    color: #76ABAE;
}
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
    margin: 120px auto 10px auto; 
    padding: 15px 20px;
    position: relative;
    min-height: 540px;
    max-width: 95%; 
    border-radius: 10px;
    z-index: 2;
}
.custom-btn {
    background-color: #76ABAE; 
    border-color: #76ABAE; 
    margin: 10px;
}
.custom-btn:hover {
    background-color: #5C8797; 
    border-color: #5C8797; 
}
.line-btn {
    background-color: #4CC764; 
    border-color: #4CC764; 
    margin: 10px;
}
.line-btn:hover {
    background-color: #06C755; 
    border-color: #06C755; 
}
.container-custom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* จัดให้อยู่ตรงกลาง */
    gap: 1rem; 
}
.card {
    width: 100%;
    max-width: 300px;
    background-color: #76ABAE;
    padding: 5px;
}

@media (min-width: 576px) { 
    .container-custom {
        justify-content: center; 
    }
}

@media (min-width: 992px) { 
    .container-custom {
        justify-content: center; 
    }
}

.video-wrapper {
    display: flex;
    justify-content: center;
}

.card-body {
    background-color: #EEEEEE;
    border-radius: 10px;
    margin: 20px;
    height: 90%;
    
}

.occupied-card {
    background-color: #e35252;
}

.unAvailable-card {
    background-color: #e3b752;
}

</style>
