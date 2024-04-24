const form = document.getElementById('service-form');
    const servicesList = document.getElementById('services');
    const totalDisplay = document.getElementById('total');
    const clearButton = document.getElementById('clear-history');
    let total = 0;

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const clientName = document.getElementById('client-name').value;
      const serviceType = document.getElementById('service-type').value;
      const serviceAmount = parseFloat(document.getElementById('service-amount').value);

      const listItem = document.createElement('li');
      listItem.textContent = `Cliente: ${clientName}, Serviço: ${serviceType}, Valor: R$ ${serviceAmount.toFixed(2)}`;
      servicesList.appendChild(listItem);

      total += serviceAmount;
      totalDisplay.textContent = `R$ ${total.toFixed(2)}`;

      form.reset();
    });

    clearButton.addEventListener('click', function() {
      servicesList.innerHTML = '';
      total = 0;
      totalDisplay.textContent = `R$ ${total.toFixed(2)}`;
    });