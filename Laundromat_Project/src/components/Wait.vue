<template>
    <div class="background-image"></div>
    <div class="container bg-dark">
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-5">
                <video class="card-img-top" controls autoplay loop>
                    <source src="@/assets/IMG/11.mp4" type="video/mp4">
                </video>
            </div>
            <div class="col-md-7">
            <div class="card-body">
                <h2 class="card-title">เครื่องหมายเลข : A1 สถานะกำลังใช้งาน</h2>
                <h3 class="card-title">เหลือเวลาอีก {{ timeLeft }}</h3>
                    <p class="card-text">ระหว่างการรอสามารถ แสกน QR Code เพื่อเข้ากลุ่มไลน์และรับการแจ้งเตือนจากทางร้านได้เลย</p>
                    <img src="@/assets/IMG/my_group_1711601182202.jpg" class="card-img-top" alt="...">
                    <a href="#" class="btn btn-primary custom-btn" @click="Skip()">ข้ามการทำงาน Skip steps</a>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            timeLeft: '25:00'
        };
    },
    methods: {
    goToHomePage() {
        this.$router.push('/');
    },
    goToNextStage() {
    },
    QR_Code() {

    },
    startTimer() {
        let minutes = 25;
        let seconds = 0;

        const intervalId = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                clearInterval(intervalId);
                Swal.fire({
                    icon: 'info',
                    title: 'ครบเวลาที่กำหนดแล้ว',
                    text: 'สามารถนำเสื้อผ้าของคุณออกมาได้ และกดปุ่ม"OK"เพื่อเริ่มรายการใหม่',
                    confirmButtonText: 'OK'
                }).then(() => {
                    this.$router.push('/');
                });
                return;
            }
            minutes--;
            seconds = 59;
            } else {
            seconds--;
            }
            const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            this.timeLeft = formattedTime;
        }, 1000); 
    },
    Skip(){
                Swal.fire({
                    icon: 'info',
                    title: 'ครบเวลาที่กำหนดแล้ว',
                    text: 'สามารถนำเสื้อผ้าของคุณออกมาได้ และกดปุ่ม"OK"เพื่อเริ่มรายการใหม่',
                    confirmButtonText: 'OK'
                }).then(() => {
                    this.$router.push('/');
                });
    }
  },
  created(){
    this.startTimer()
  }
}

</script>

<style scoped>
.card video{
    border-radius: 10px;
    margin: 10px;
}
.card img{
    max-width: 200px;
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
    height: 100%;
    margin-top: 100px;
    padding-top: 15px; 
    padding: 10px;
    position: relative;
    max-width: 1875px;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); 
    gap: 1rem; 
}
.card {
    width: 100%;
    max-width: auto;
    background-color: #76ABAE;
    padding: 5px;
}

@media (min-width: 576px) { 
    .container-custom {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 992px) { 
    .container-custom {
        grid-template-columns: repeat(3, 1fr);
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

</style>