document.addEventListener('DOMContentLoaded', function () {
    const slots = document.getElementById('slots');

    // Mock data for slots
    let slotData = [
        { time: '10:00 AM', booked: false },
        { time: '11:00 AM', booked: false },
        { time: '12:00 PM', booked: false },
        { time: '01:00 PM', booked: false },
        { time: '02:00 PM', booked: false },
        { time: '03:00 PM', booked: false },
        { time: '04:00 PM', booked: false },
        { time: '05:00 PM', booked: false }
    ];

    function renderSlots() {
        slots.innerHTML = '';
        slotData.forEach((slot, index) => {
            const slotElement = document.createElement('div');
            slotElement.className = 'slot' + (slot.booked ? ' booked' : '');
            slotElement.innerText = slot.time;
            slotElement.addEventListener('click', () => bookSlot(index));
            slots.appendChild(slotElement);
        });
    }

    function bookSlot(index) {
        if (!slotData[index].booked) {
            slotData[index].booked = true;
            alert(`Slot at ${slotData[index].time} booked successfully!`);
            renderSlots();
        } else {
            alert('This slot is already booked!');
        }
    }

    renderSlots();
});
