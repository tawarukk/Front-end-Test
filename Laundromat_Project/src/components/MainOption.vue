<template>
    <div class="background-image"></div>
    <div class="container bg-dark">
        <h3 class="Topic"> <span class="Topic-H">S</span>ervice : บริการจากทางร้าน (เครื่องหมายเลข : A1 {{ status }})</h3>
        <div class="container-custom">
            <div class="card">
                <img @click="ChangeStage('Payment')" src="@/assets/IMG/06.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">ใช้บริการเครื่องซักผ้า / เครื่องอบผ้า</h5>
                    <p class="card-text">: พบกับการบริการเครื่องซักผ้าและเครื่องอบผ้าที่มีคุณภาพสูง ให้คุณรู้สึกอบอุ่นและสบายใจกับผ้าของคุณทุกครั้งที่ใช้บริการกับเรา</p>
                    <a @click="ChangeStage('Payment')" class="btn btn-primary custom-btn">ใช้บริการ</a> 
                </div>
            </div>
            
            <div class="card">
                <img @click="ChangeStage('check')" src="@/assets/IMG/02.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">ตรวจสอบสถานะเครื่องภายในร้าน</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a @click="ChangeStage('check')"  class="btn btn-primary custom-btn-2">ตรวจสอบเครื่อง</a>
                </div>
            </div>
            
            <div class="card">
                <img @click="ChangeStage('Map')" src="@/assets/IMG/04.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">ตรวจสอบสาขาใกล้เคียง</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a @click="ChangeStage('Map')"  class="btn btn-primary custom-btn-3">ตรวจสอบสถานที่</a>
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
        status: "สถานะว่าง",
        Payment_status: "activated",
        check_status: "activated",
        Map_status: "not_activated"
    };
  },methods: {
    ChangeStage(position) {
        if (position === "Payment" && this.Payment_status === "activated") {
            this.$router.push('/Payment');
        } else if (position === "check" && this.check_status === "activated") {
            this.$router.push('/Check');
        } else if (position === "Map" && this.Map_status === "activated") {
            this.$router.push('/Map');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'ขออภัยในความผิดพลาด',
                text: 'ทางเราเสียใจที่ ระบบไม่พร้อมใช้งานในตอนนี้ กรุณาเลือกใช้รายการใหม่',
                confirmButtonText: 'OK'
            }).then(() => {
                this.$router.push('/');
            });
        }
    }
  }
};
</script>

<style scoped>
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

.custom-btn-2 {
    background-color: #e3b752; 
    border-color: #e3b752;
}

.custom-btn-2:hover {
    background-color: #eeb123; 
    border-color: #eeb123; 
}

.custom-btn-3 {
    background-color: #e35252; 
    border-color: #e35252;
}

.custom-btn-3:hover {
    background-color: #f53737; 
    border-color: #f53737; 
}
.container-custom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); 
    gap: 1rem; 
}

.card {
    width: 100%;
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

</style>

