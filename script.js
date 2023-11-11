let number = 0.000
let cron
let h1 = document.querySelector(".h1")

    function start() {
        cron = setInterval(() => {
            number = number + 1.00
            h1.innerHTML = number / 100.00
        }, 10);
    }

    function stopFunction() {
        clearInterval(cron)
    }

    function reset() {
        clearInterval(cron)
        number = 0.000
        h1.innerHTML = "0.00"
    }