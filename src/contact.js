function contact() {
    let container = document.getElementById('content');
    
    container.innerHTML = '';

    let header = document.createElement('h1');
    header.textContent = "CONTACT";
    container.appendChild(header);

    let headerReservation = document.createElement('h4');
    headerReservation.textContent = "Reservation";
    container.appendChild(headerReservation);
    
    let reservation = document.createElement('p');
    reservation.textContent = "Arrive at any time without a reservation. Simply book retrospectively, when you return to your own time.";
    container.appendChild(reservation);
    
    let headerLocation = document.createElement('h4');
    headerLocation.textContent = "Location";
    container.appendChild(headerLocation);

    let imageLocation = document.createElement('img');
    imageLocation.src = "https://imagine.gsfc.nasa.gov/features/cosmic/images/hst_udf_z8.6_t.jpg";
    imageLocation.setAttribute("id", "imageLocation");
    container.appendChild(imageLocation);

    let location = document.createElement('p');
    location.textContent = "We are, of course, located at the end of the universe. The fastest way here is on an Infinate Improbability Drive, such as The Heart of Gold. Alternatively, tou can try standing next to an exploding hyperspatial field generator on the planet where Milliways will eventually be built several billion years after the explosion occurs.";
    container.appendChild(location);
    };
    
    export default contact;