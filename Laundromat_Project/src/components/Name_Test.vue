<template>
    <div class="container mt-5">
        <label for="numberInput" class="form-label mt-2">ข้อที่ 2 แสดงรายชื่อจาก input<br></label>
    <label for="nameInput" class="form-label mt-2">Name:</label>
    <input type="text" v-model="nameQuery" id="nameInput" class="form-control">
    
    <label for="positionInput" class="form-label mt-2">Position:</label>
    <input type="text" v-model="positionQuery" id="positionInput" class="form-control">
    
    <button @click="searchData" class="btn btn-primary mt-3">Search</button>
    
    
    <div v-if="searchResults.length > 0" class="mt-3">
        <h4>Search Results:</h4>
        <ul class="list-group">
        <li v-for="(result, index) in searchResults" :key="index" class="list-group-item">
            Name: {{ result.name }} | Position: {{ result.position }}
        </li>
        </ul>
    </div>
    <div v-else-if="searchPerformed" class="mt-3" style="color: aliceblue;">ไม่พบข้อมูล</div>
    <div v-else class="mt-3" style="color: aliceblue;">กรุณาค้นหาข้อมูล</div>
    </div>
</template>

<script>
export default {
data() {
    return {
    input: [
        { name: 'Arm', position: 'Front End' },
        { name: 'Game', position: 'Back End' },
        { name: 'Arm2', position: 'Front End' },
        { name: 'Game2', position: 'Back End' },
        ],
        nameQuery: '', 
        positionQuery: '', 
        searchResults: [], 
        searchPerformed: false 
    };
    },
    methods: {
    searchData() {
    this.searchResults = this.input.filter(item => {
        const nameMatch = item.name.toLowerCase().includes(this.nameQuery.toLowerCase());
        const positionMatch = item.position.toLowerCase().includes(this.positionQuery.toLowerCase());
        return nameMatch && positionMatch;
    });
    this.searchPerformed = true;
    }
    }
};
</script>


<style scoped>
.container{
    background-color: #31363F;
    border-radius: 20px;
    padding: 10px;
    margin: auto;
}

.container label,p{
    color: #EEEEEE;
    font-size: medium;
}

</style>