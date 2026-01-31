document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('demoButton');
    const text = document.getElementById('demoText');
    
    button.addEventListener('click', function() {
        text.textContent = 'JavaScript работает! ' + new Date().toLocaleTimeString();
        text.style.color = '#007acc';
    });
    
    // Дополнительный пример JS функциональности
    console.log('Сайт загружен и готов к работе!');
});
