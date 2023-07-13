window.addEventListener("DOMContentLoaded", () => {

  // Funçao que atualiza o CountDown a cada segundo
  const countdownFunction = setInterval(() => {

    // Defini a data final
    const targetDate = new Date("2023-09-15").getTime();

    // Defini a data atual
    const currentDate = new Date().getTime();

    // Calcula a diferença em milissegundos
    const difference = targetDate - currentDate;

    // Calcula os dias, horas, minutos e segundos restantes
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Formata as valores para terem sempre 2 dígitos
    days = days.toString().padStart(2, "0");
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    document.getElementById("countdown").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

    // Verifica se o CountDown chegou ao fim e para o intervalo
    if (difference < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = `Já Lançado`;
    }
  }, 1000);
});
