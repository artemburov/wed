// Показ/скрытие выбора количества гостей
document.querySelectorAll('input[name="attending"]').forEach(radio => {
  radio.addEventListener('change', function() {
    const section = document.getElementById('guestsSection');
    if (this.value === 'yes') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});

// Отправка формы
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  document.querySelector('#thanks .content h2').textContent = `Спасибо, ${name.split(' ')[0]}!`;
  
  document.getElementById('thanks').scrollIntoView({ behavior: 'smooth' });
  
  this.reset();
  document.getElementById('guestsSection').style.display = 'none';
});