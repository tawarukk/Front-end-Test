<template>
    <div class="background-image"></div>
    <div class="container bg-dark">
        <div class="Payment-custom" style="margin-left: 5px;">
            <div class="Payment-format active" type="button"><img src="../assets/IMG/pay-per-click.png"><h3>ชำระด้วยเงินสด</h3></div>
            <div class="Payment-format" type="button" @click="ChangePayment('Promptpay')"><img src="../assets/IMG/payment-method.png"><h3>ชำระด้วย Prompay</h3></div>
        </div>
        <div class="container-custom" style="margin-left: 9px; margin-right: 18px; ">
        <div class="card" >
            <video class="card-img-top" controls autoplay loop>
                <source src="@/assets/IMG/09.mp4" type="video/mp4">
            </video>
            <div class="card-body">
                <h2 class="card-text">ขั้นตอนที่ <span class="Topic-H">1</span> :</h2>
                <h4 class="card-text">นำเงินใส่ภายในช่องชำระเงิน <br> และกดปุ่ม "ชำระเงิน" <br> (สามารถใช้ เหรียญ หรือ ธนบัตร)</h4>
            </div>
        </div>
        <div class="card">
            <video class="card-img-top" controls autoplay loop>
                <source src="@/assets/IMG/08.mp4" type="video/mp4">
            </video>
            <div class="card-body">
                <h2 class="card-text">ขั้นตอนที่ <span class="Topic-H">2</span> :</h2>
                <h4 class="card-text">เมื่อเครื่องทำงานแล้วจะนับเวลาถอยหลังเมื่อเหลือเวลา 1 นาที ทางเครื่องจะส่งข้อความเตือนไปยังกลุ่มไลน์ของทางร้าน</h4>
            </div>
        </div>
        <div class="card">
            <video class="card-img-top" controls autoplay loop>
                <source src="@/assets/IMG/10.mp4" type="video/mp4">
            </video>
            <div class="card-body">
                <h2 class="card-text">ขั้นตอนที่ <span class="Topic-H">3</span> :</h2>
                <h4 class="card-text">เมื่อเครื่องทำงานเสร็จสิ้น สามารถนำเสื้อผ้าออกมาได้เลย และขอให้มีความสุขกับเสื้อผ้าของคุณ </h4>
            </div>
        </div>
        </div>
        <div class="Payment-custom" style="margin-left: 5px;">
            <div class="Payment-format" @click="goToHomePage()" type="button"><h3>ย้อนกลับ</h3></div>
            <div class="Payment-format active" @click="goToNextStage()" type="button" style="background-color: #e3b752;"><h3>ชำระเงิน</h3></div>
        </div>    
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            Prompay_status: "not_activated"
        };
    },
    methods: {
    goToHomePage() {
        this.$router.push('/');
    },
    goToNextStage() {
        this.$router.push('/Wait');
    },
    ChangePayment(Payment) {
        if(Payment == 'Promptpay'){
            if (this.Prompay_status == 'not_activated'){
                Swal.fire({
            icon: 'info',
            title: 'ระบบจ่ายเงินแบบ Promptpay',
            text: 'กำลังปรับปรุง ขออภัยในความไม่สะดวก',
            confirmButtonText: 'ตกลง'
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log('ผู้ใช้กดปุ่ม "ตกลง"');
                }
            });
            }
        } else {
            this.$router.push('/');
        }
    }
}
}
</script>

<style scoped>
.Payment-custom img{
    max-width: 50px;
}
.card img{
    max-width: 500px;
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
}

.custom-btn:hover {
    background-color: #5C8797; 
    border-color: #5C8797; 
}

.container-custom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); 
    gap: 1rem; 
}

.card {
    width: 100%;
    /* max-height: 450px; */
    background-color: #EEEEEE;
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

.Payment-format {
    background-color: #EEEEEE;
    margin: 5px;
    padding: 5px;
    position: relative;
    max-width: 895px;
    border-radius: 10px;
    z-index: 2;
}

.Payment-format {
    display: flex;
    align-items: center; 
    justify-content: center;
    border: 2px solid transparent;
}
.Payment-format.active {
    background-color: #76ABAE;
    border-color: #222831; 
    color: #222831;
}
.Payment-format img {
    margin-right: 10px;
}
.Payment-custom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); 
    gap: 1rem; 
}

@media (min-width: 992px) { /* Desktop */
    .Payment-custom {
        grid-template-columns: repeat(2, 1fr); /* แสดงการ์ดในแกน x 3 คอลัมน์ */
    }
}
</style>