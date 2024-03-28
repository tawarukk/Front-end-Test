<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="/"><img  src="@/assets/IMG/polo-shirt.png" class="card-img-top" alt="..."> Laundromat</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
            <span class="navbar-toggler-icon"></span>
            Menu
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/About">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/Manage">Manage</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/Test">PROGRAMMING TESTING</a>
                </li>
            </ul>
            <form class="d-flex custom-form" @submit.prevent="search">
                <input v-model="searchTerm" class="form-control me-2" type="search" placeholder="Search by ID or Brand" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
</template>
  
<script>
import Swal from 'sweetalert2'
import { useWashingMachineStore } from '../stores/washingMachineStore.js'

export default {
    name: 'Navbar',
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }
    },
    search() {
    if (this.searchTerm.trim() !== '') {
        const foundMachine = this.allWashingMachines.find(machine => {
            return machine.id.toLowerCase() === this.searchTerm.toLowerCase() || machine.brand.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
        if (foundMachine) {
            Swal.fire({
                icon: 'info',
                title: 'ข้อมูลเครื่องซักผ้า',
                html: `
                    <div>
                        <p>ID: ${foundMachine.id}</p>
                        <p>ยี่ห้อ: ${foundMachine.brand}</p>
                        <p>สถานะ: ${foundMachine.status}</p>
                    </div>
                `
            });
        
        } else {
            Swal.fire({
                icon: 'error',
                title: 'ไม่พบข้อมูล',
                text: 'กรุณาลองค้นหาใหม่'
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'ไม่พบข้อมูล',
            text: 'กรุณาใส่คำที่ต้องการค้นหา'
        });
    }
    this.searchTerm = ''; 
},


    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
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
.container img{
    max-width: 50px;
    max-height: 50px;
}
.navbar-scroll {
    background-color: rgba(0, 0, 0, 0.8);
}
.navbar {
    margin: 5px 20px 5px 20px; 
    padding: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between; 
    align-items: center; 
}

.container {
    margin: auto;
    padding: 5px;
    border-radius: 10px;
}
.nav-item {
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
}
.nav-item:hover {
    border-radius: 10px;
}
.custom-form {
    background-color: #76ABAE; 
    padding: 10px; 
    border-radius: 10px; 
}
.custom-form input[type="search"] {
    background-color: white; 
    border-color: transparent;
    border-radius: 5px; 
}
.custom-form button[type="submit"] {
    background-color: #76ABAE; 
    color: white; 
    border-color: transparent; 
    border-radius: 5px;
}

</style>

