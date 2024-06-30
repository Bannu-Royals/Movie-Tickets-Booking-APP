let selectedMovie = '';
let selectedShowtime = '';
let selectedSeats = [];

function selectMovie(movie) {
  selectedMovie = movie;
  document.getElementById('movies').classList.add('hidden');
  document.getElementById('showtimes').classList.remove('hidden');
}

function selectShowtime(showtime) {
  selectedShowtime = showtime;
  document.getElementById('showtimes').classList.add('hidden');
  document.getElementById('seats').classList.remove('hidden');
}

function toggleSeat(element) {
  if (!element.classList.contains('occupied')) {
    element.classList.toggle('selected');
    const seatIndex = [...element.parentNode.children].indexOf(element);
    if (selectedSeats.includes(seatIndex)) {
      selectedSeats = selectedSeats.filter(index => index !== seatIndex);
    } else {
      selectedSeats.push(seatIndex);
    }
  }
}

function proceedToPayment() {
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat.');
    return;
  }
  document.getElementById('seats').classList.add('hidden');
  document.getElementById('payment').classList.remove('hidden');
}

function submitPayment() {
  const cardNumber = document.getElementById('card-number').value;
  const expiration = document.getElementById('expiration').value;
  const cvv = document.getElementById('cvv').value;

  // Basic form validation
  if (cardNumber && expiration && cvv) {
    const confirmationDetails = `You have booked ${selectedSeats.length} seat(s) for ${selectedMovie} at
