const carsData = [
    { name: 'Maruti Suzuki Alto', image: 'images/alto.png', transmission: 'Manual', seats: '5', fuel: 'Petrol', ac: 'Yes', price: '₹600/day' },
    { name: 'Tata Tiago', image: 'images/Tiago.png', transmission: 'Manual', seats: '5', fuel: 'Petrol', ac: 'Yes', price: '₹750/day' },
    { name: 'Maruti Suzuki Dzire', image: 'images/Dzire.png', transmission: 'Automatic', seats: '5', fuel: 'Petrol', ac: 'Yes', price: '₹950/day' },
    { name: 'Maruti Suzuki Ertiga', image: 'images/ertiga.png', transmission: 'Manual', seats: '7', fuel: 'Petrol', ac: 'Yes', price: '₹1100/day' },
    { name: 'Maruti Suzuki Brezza', image: 'images/Brezza.png', transmission: 'Manual', seats: '5', fuel: 'Petrol', ac: 'Yes', price: '₹1000/day' },
    { name: 'Maruti Suzuki WagonR', image: 'images/wagonR.png', transmission: 'Manual', seats: '5', fuel: 'Petrol', ac: 'Yes', price: '₹900/day' },
    { name: 'Mahindra Thar', image: 'images/Thar.png', transmission: 'Manual', seats: '5', fuel: 'Petrol/Diesel', ac: 'Yes', price: '₹1500/day' },
    { name: 'Hyundai Grand i10 NIOS', image: 'images/grandI10.png', transmission: 'Manual', seats: '5', fuel: 'Petrol', ac: 'Yes', price: '₹800/day' }
];

function generateCarCards() {
    const carsGrid = document.getElementById('carsGrid');

    const movingCars = [...carsData, ...carsData];
    carsGrid.innerHTML = movingCars.map((car) => `
        <article class="car-card">
            <div class="car-image"><img src="${car.image}" alt="${car.name}" loading="lazy"></div>
            <div class="car-info">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-specs">
                    <div class="spec-item"><span class="spec-label">Transmission</span><span class="spec-value">${car.transmission}</span></div>
                    <div class="spec-item"><span class="spec-label">Seats</span><span class="spec-value">${car.seats}</span></div>
                    <div class="spec-item"><span class="spec-label">Fuel Type</span><span class="spec-value">${car.fuel}</span></div>
                    <div class="spec-item"><span class="spec-label">Air Conditioning</span><span class="spec-value">${car.ac}</span></div>
                </div>
                <div class="car-price">${car.price}</div>
                <button class="car-button" type="button" data-car="${car.name}">Book Now</button>
            </div>
        </article>
    `).join('');

    carsGrid.addEventListener('click', (event) => {
        const button = event.target.closest('[data-car]');
        if (button) {
            handleBooking(button.dataset.car);
            return;
        }
    });
}

function handleBooking(carName) {
    alert(`Thank you for your interest in ${carName}!\n\nPlease call us at +91 98765 43210 or WhatsApp to book.`);
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('navMenu').classList.remove('active');
    document.getElementById('hamburger').classList.remove('active');
}

function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('solid', window.scrollY > 80);
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
    generateCarCards();
    initNavigation();
});
