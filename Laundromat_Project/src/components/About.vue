<template>
    <div class="background-image"></div>
    <div class="container bg-dark">
        <div class="text-center">
            <img src="../assets/IMG/01.jpg" alt="Laundromat Store" style="height: auto;">
        </div>
        <div class="mt-4">
            <h1 class="Topic-H text-center">เกี่ยวกับร้าน Laundromat </h1>
            <p class="Topic">Laundromat เป็นร้านซักผ้าที่เปิดให้บริการมาอย่างยาวนาน</p>
            <p class="Topic">"Laundromat เป็นร้านที่มีชื่อเสียงและเชื่อถือได้ในการให้บริการซักและอบผ้า
                    โดยใช้เครื่องซักผ้าและเครื่องอบผ้าที่ทันสมัยและมีประสิทธิภาพ ร้าน Laundromat
                    มีหลายสาขาและเป็นที่รู้จักในชุมชน ลูกค้าสามารถเลือกบริการตามความต้องการ 
                    เช่น ซักผ้าทั่วไป, ซักผ้าตามน้ำหนัก, การซักและอบผ้าด่วน เป็นต้น ด้วยบริการที่มีคุณภาพและความนิยม 
                    เช่นนี้ ร้าน Laundromat เป็นเลือกที่ดีสำหรับผู้คนที่ต้องการความสะดวกสบายและคุณภาพในการดูแลเสื้อผ้า"</p>
            <p class="Topic">ทุกสาขาของเรามีเครื่องซักผ้าที่ทันสมัยและพนักงานเชี่ยวชาญ</p>
            <p class="Topic">เรายินดีให้บริการท่านทุกท่าน ตลอด 24 ชั่วโมง</p>
            <p class="Topic">ช่องทางการติดต่อ 000-0000-00-0 หรือ 000-0000-00-1 (@Line AAAAA)</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {};
        },
        methods: {}
    };
</script>

<style scoped>
.container img{
    width: 1080px;
    max-width: 100%;
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

.container-custom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); 
    gap: 1rem; 
}

.card {
    width: 100%;
    background-color: #EEEEEE;
}



</style>

  