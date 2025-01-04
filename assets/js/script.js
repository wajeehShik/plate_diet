    const targetDate = new Date("2025-12-31T23:59:59");

    function updateTimer() {
        const now = new Date();
        const diff = targetDate - now;

        // حساب الأيام والساعات والدقائق والثواني
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // عرض الوقت المتبقي في عنصر المؤقت
            Array.from(document.getElementsByClassName("timer")).forEach(function(timer) {
                timer.textContent = `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
            });
        // عند انتهاء الوقت
        if (diff <= 0) {
            Array.from(document.getElementsByClassName("timer")).forEach(function(timer) {
                timer.textContent = `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
            });
        }
    }

    // تحديث المؤقت كل ثانية
    const timerInterval = setInterval(updateTimer, 1000);

    // تحديث أولي عند تحميل الصفحة
    updateTimer();
    


// var swiper = new Swiper(".reviews-slider", {
//     loop:true,
//     grabCursor:true,
//     spaceBetween: 15,
//     breakpoints: {
//        640: {
//          slidesPerView: 1,
//        },
//        768: {
//          slidesPerView: 2,
//        },
//        991: {
//          slidesPerView: 2,
//        },
//     },
//  });
 