const buyTicketForm = document.getElementById('buy-ticket-form');

buyTicketForm.addEventListener('submit', submitHandler);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function submitHandler(event) {
    // прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    const formData = {
        flight: buyTicketForm.elements.flight.value,
        fullName: buyTicketForm.elements.fullname.value,
        typeOfSeat: buyTicketForm.elements.typeOfSeat.value,
    };

    try {
        const ticket = buyTicket(world.flights, formData.flight.toUpperCase(), formData.fullName, +formData.typeOfSeat);
        /*form.elements.fullname.value = '';
        form.elements.fflight.value = '';*/
        const ticketReport = document.getElementById('ticket-report');
        ticketReport.style.backgroundColor = "lightgreen";
        ticketReport.append(`You successfully bought a ticket № ${ticket.id}, your seat is ${ticket.seat}.`)
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView();
    buyTicketForm.reset();
}