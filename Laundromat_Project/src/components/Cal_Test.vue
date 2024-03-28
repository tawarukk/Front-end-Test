<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <label for="numberInput" class="form-label mt-2">ข้อที่ 1  เรียงตัวเลขใน Array<br></label>
                <label for="numberInput" class="form-label mt-2"> ป้อนตัวเลข:</label>
                <input type="number" v-model.number="numberInput" class="form-control" id="numberInput">

                <button @click="addNumber" class="btn btn-primary mt-2">เพิ่ม</button>
                <button @click="clearNumbers" class="btn btn-danger mt-2">เคลียร์</button>
                <button @click="sortNumbers" class="btn btn-success mt-2">เรียง</button>
            </div>
        </div>
        <ul class="list-group mt-3">
            <li v-for="(number, index) in numbers" :key="index" class="list-group-item">{{ number }}</li>
        </ul>
            <p class="mt-3">Array ที่เก็บตัวเลข: {{ numbers }}</p>
            <p class="mt-3">กดปุ่มเคลียเพื่อใส่ข้อมูลชุดใหม่ (ข้อมูลเริ่มต้นเป็นเพียงข้อมูลตัวอย่างจากโจทย์)</p>
            <p class="mt-3">กดปุ่มเรียงเพื่อแสดงผลลัพธ์ และ จัดเรียงตัว้ลขตามเงื่อนไขที่โจทย์ต้องการ</p>
    </div>
</template>

<script>
export default {
    data() {
    return {
        numberInput: null,
        numbers: [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8]
    };
    },
methods: {
        addNumber() {
            if (this.numberInput !== null && !isNaN(this.numberInput)) {
            this.numbers.push(parseInt(this.numberInput));
            this.numberInput = null;
            }
        },
        clearNumbers() {
            this.numbers = [];
        },
        sortNumbers() {
            this.numbers = this.mergeAndSort(this.numbers);
        },
        mergeAndSort(arr) {
            const frequencyMap = {};
            arr.forEach(num => {
            frequencyMap[num] = (frequencyMap[num] || 0) + 1;
            });
    
            const uniqueNumbers = Object.keys(frequencyMap).map(Number);
            const sortedNumbers = uniqueNumbers.sort((a, b) => {
            const freqDiff = frequencyMap[a] - frequencyMap[b];
            if (freqDiff === 0) {
                return a - b;
            } else {
                return freqDiff;
            }
            });
    
            const result = [];
            sortedNumbers.forEach(num => {
            for (let i = 0; i < frequencyMap[num]; i++) {
                result.push(num);
            }
            });
    
            return result;
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