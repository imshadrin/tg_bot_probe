// Инициализация Telegram WebApp
let tg = window.Telegram.WebApp;

// Получаем элемент кнопки по её id
let btn = document.getElementById("click-btn");

// Добавляем событие нажатия на кнопку
btn.addEventListener("click", function(){
    // Выводим сообщение через Telegram API
    tg.showAlert("Настенька самая лучшая!");
});

// Говорим Telegram, что приложение готово к работе
tg.ready();
