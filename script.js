const trips = [
    { id: 1, destination: "Coorg, Karnataka", price: 5500, image: "https://b3681537.smushcdn.com/3681537/wp-content/uploads/2021/05/Bangalore-to-Coorg.jpg?lossy=2&strip=1&webp=1" },
    { id: 2, destination: "Chikmagalur, Karnataka", price: 4800, image: "https://d26dp53kz39178.cloudfront.net/media/uploads/products/Chikmagalur-Backpacking-Tours-from-Bangalore1-1713165689300.webp" },
    { id: 3, destination: "Gokarna, Karnataka", price: 6200, image: "https://www.india.com/wp-content/uploads/2020/10/collage1200-1.jpg" },
    { id: 4, destination: "Hampi, Karnataka", price: 5000, image: "https://carams.in/wp-content/uploads/2018/11/Hampi.jpg" },
    { id: 5, destination: "Mysore, Karnataka", price: 4500, image: "https://static2-clubmahindra.gumlet.io/storage/app/media/Non%20Managed%20Resorts/Golden%20Landmark%20Resort%20Mysore/Mysore%20Palace-150354008.jpg?w=600&dpr=2.6" },
    { id: 6, destination: "Udupi, Karnataka", price: 4300, image: "https://i.ytimg.com/vi/sI6vSh1U7Ng/maxresdefault.jpg" },
    { id: 7, destination: "Jog Falls, Karnataka", price: 4900, image: "https://i.ytimg.com/vi/LSnKIkhGAXk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5IL64B4G-I-IIOQ9eWjDRPfOQ4Q" },
    { id: 8, destination: "Badami Caves, Karnataka", price: 5100, image: "https://www.holidify.com/images/bgImages/BADAMI.jpg" },
    { id: 9, destination: "Hassan, Karnataka", price: 4600, image: "https://kstdc.co/wp-content/uploads/2021/03/shutterstock_326363990.jpg" },
    { id: 10, destination: "Alleppey, Kerala", price: 7200, image: "https://i.ytimg.com/vi/EOZOUT7YsBU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJ1F0eK7GZ4Mpwj2I-0zE8Ysfv5A" },
    { id: 11, destination: "Munnar, Kerala", price: 6900, image: "https://www.dtpcidukki.com/uploads/ebrochures/images/munnar-ebrochure-20230526190626140386.webp" },
    { id: 12, destination: "Wayanad, Kerala", price: 6400, image: "https://www.naturetravelagency.com/uploads/1739794108Kerala%20tourism%20Wayanad%20tourist%20places.jpg" },
    { id: 13, destination: "Bekal, Kerala", price: 6000, image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Bekal.jpg" },
    { id: 14, destination: "Ooty, Tamil Nadu", price: 5700, image: "https://media.assettype.com/outlooktraveller/2024-11-11/9y3fjspo/Snapinsta.app1988066204990222413192702731418299762165611n1080.jpg" },
    { id: 15, destination: "Kodaikanal, Tamil Nadu", price: 5800, image: "https://www.indiantempletour.com/wp-content/uploads/2022/08/Kodaikanal-Package-Tour.jpg" },
    { id: 16, destination: "Mahabalipuram, Tamil Nadu", price: 5200, image: "https://pbs.twimg.com/media/EYIc1tLU4AIO2Re.jpg" },
    { id: 17, destination: "Pondicherry", price: 6400, image: "https://i.pinimg.com/736x/38/36/1e/38361e8466858575dd50e3559d848269.jpg" },
    { id: 18, destination: "Goa", price: 8500, image: "https://travelojo.in/wp-content/uploads/2022/01/goa-sightseeing.jpg" },
    { id: 19, destination: "Jaipur, Rajasthan", price: 9400, image: "https://thumbs.dreamstime.com/b/collage-pictures-rajasthan-india-images-famous-location-north-87480124.jpg" },
    { id: 20, destination: "Agra, Uttar Pradesh", price: 8800, image: "https://thumbs.dreamstime.com/b/famous-monuments-collage-famous-places-collage-india-167420144.jpg" },
    { id: 21, destination: "Manali, Himachal Pradesh", price: 10500, image: "https://dmchimachalpradesh.com/images/manali-shimla.png" },
    { id: 22, destination: "Shimla, Himachal Pradesh", price: 10200, image: "https://pbs.twimg.com/media/DaLKaReWsAAc_QQ.jpg" },
    { id: 23, destination: "Rishikesh, Uttarakhand", price: 8700, image: "https://media-cdn.tripadvisor.com/media/photo-s/1c/23/bc/72/adventure-activities.jpg" },
    { id: 24, destination: "Darjeeling, West Bengal", price: 9100, image: "https://www.abudgettraveller.com/wp-content/uploads/2019/05/EXQUISITE-DARJEELING--e1557175949327.png" },
    { id: 25, destination: "Gangtok, Sikkim", price: 9900, image: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1743667926633_15vfd_4235x2000.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75" },
    { id: 26, destination: "Andaman Islands", price: 14500, image: "https://www.holidaylandmark.com/blog/wp-content/uploads/2024/07/DALL%C2%B7E-2024-07-03-19.10.57-A-photo-gallery-showcasing-the-highlights-of-the-Andaman-and-Nicobar-Islands.-This-includes-stunning-beaches-like-Radhanagar-Beach-with-its-pristine-w.webp" },
    { id: 27, destination: "Lakshadweep", price: 16000, image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2024/01/09174049/agatti-island.jpeg" },
    { id: 28, destination: "Leh-Ladakh", price: 17500, image: "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.jpg?s=612x612&w=0&k=20&c=WjPBCZMD93SFckiZq7b3QdVhgpTkp19QLiuWANT4NuI=" },
    { id: 29, destination: "Rann of Kutch, Gujarat", price: 9700, image: "https://www.rannutsav.com/blog/wp-content/uploads/2025/07/04-Rann-Utsav.jpg" },
    { id: 30, destination: "Varanasi, Uttar Pradesh", price: 7700, image: "https://www.sunshinetravel.in/sites/default/files/g6.png" }
];


function loadTrips() {
    document.getElementById('trip-section').classList.remove('hidden');
    document.getElementById('bookings-section').classList.add('hidden');
    document.getElementById('login-section').classList.add('hidden');
    renderTrips(trips);
}
// Duplicate modal logic removed (already declared above)



function renderTrips(tripArray) {
    const tripList = document.getElementById('trip-list');
    tripList.innerHTML = "";

    if (tripArray.length === 0) {
        tripList.innerHTML = "<p>No trips found.</p>";
        return;
    }

    tripArray.forEach(trip => {
        const card = document.createElement('div');
        card.classList.add('trip-card');

        card.innerHTML = `
      <img src="${trip.image}" alt="${trip.destination}">
      <div class="card-body">
        <h3>${trip.destination}</h3>
        <p>From ₹${trip.price.toLocaleString()}</p>
        <button onclick="openModal('${trip.destination}', ${trip.price})">Book Now</button>
      </div>
    `;

        tripList.appendChild(card);
    });
}

function applyFilters() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const priceLimit = parseFloat(document.getElementById("priceFilter").value);

    let filteredTrips = trips.filter(trip => {
        const matchesSearch = trip.destination.toLowerCase().includes(searchTerm);
        const matchesPrice = isNaN(priceLimit) || trip.price <= priceLimit;
        return matchesSearch && matchesPrice;
    });

    renderTrips(filteredTrips);
}

function openModal(destination, price) {
    document.getElementById("bookingModal").classList.remove("hidden");
    document.getElementById("bookingInfo").innerText = `Booking trip to ${destination} for ₹${price.toLocaleString()}`;
}

function closeModal() {
    document.getElementById("bookingModal").classList.add("hidden");
}

function submitBooking(event) {
    event.preventDefault();
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const tripInfo = document.getElementById("bookingInfo").innerText;

    let existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push({ name, email, tripInfo });
    localStorage.setItem("bookings", JSON.stringify(existing));

    closeModal();
    alert("✅ Booking confirmed!");
}

function showBookings() {
    document.getElementById('trip-section').classList.add('hidden');
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('bookings-section').classList.remove('hidden');

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const list = document.getElementById("bookingList");
    list.innerHTML = "";

    bookings.forEach(b => {
        const li = document.createElement("li");
        li.textContent = `${b.tripInfo} | Booked by: ${b.name} (${b.email})`;
        list.appendChild(li);
    });
}

function showLogin() {
    document.getElementById('trip-section').classList.add('hidden');
    document.getElementById('bookings-section').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
}

function loginUser(event) {
    event.preventDefault();
    alert("🔐 Logged in successfully!");
    loadTrips();
}
function signup() {
    const email = document.getElementById("auth-email").value;
    const pass = document.getElementById("auth-pass").value;
    auth.createUserWithEmailAndPassword(email, pass)
        .then(user => {
            document.getElementById("auth-status").textContent = "✅ Signed up!";
        })
        .catch(err => alert("Signup Error: " + err.message));
}

function login() {
    const email = document.getElementById("auth-email").value;
    const pass = document.getElementById("auth-pass").value;
    auth.signInWithEmailAndPassword(email, pass)
        .then(user => {
            document.getElementById("auth-status").textContent = "✅ Logged in!";
        })
        .catch(err => alert("Login Error: " + err.message));
}

function logout() {
    auth.signOut().then(() => {
        document.getElementById("auth-status").textContent = "Logged out";
    });
}

// Theme toggle logic with localStorage (for switch toggle)
const themeSwitch = document.getElementById("toggle-theme");
const body = document.body;

// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark");
        themeSwitch.checked = true;
    }
});

// Toggle and save theme
themeSwitch.addEventListener("change", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});


document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners for search and filter
    document.getElementById("searchInput").addEventListener("input", applyFilters);
    document.getElementById("priceFilter").addEventListener("change", applyFilters);

    // Modal close button
    document.getElementById("closeModal").addEventListener("click", closeModal);

    // Booking form submission
    document.getElementById("bookingForm").addEventListener("submit", submitBooking);
});

// Apply tilt effect to all cards after they load
function applyTiltEffect() {
    VanillaTilt.init(document.querySelectorAll(".trip-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });
}
// Modal logic
const modal = document.getElementById("booking-modal");
const closeBtn = document.querySelector(".close-btn");
const bookingForm = document.getElementById("booking-form");
const successMsg = document.getElementById("booking-success");

function bookNow(destination) {
    document.getElementById("destination").value = destination;
    modal.style.display = "flex";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    bookingForm.reset();
    successMsg.classList.add("hidden");
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        bookingForm.reset();
        successMsg.classList.add("hidden");
    }
};

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Simulate booking logic (could be sent to server)
    successMsg.classList.remove("hidden");
    bookingForm.reset();
    const bookingForm = document.getElementById("booking-form");
    const successMsg = document.getElementById("success-msg");


    setTimeout(() => {
        modal.style.display = "none";
        successMsg.classList.add("hidden");
    }, 2000);
});
bookingForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const user = firebase.auth().currentUser;
    if (!user) {
        alert("⚠️ Please log in to book a trip.");
        return;
    }

    const bookingData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("travel-date").value,
        people: document.getElementById("people").value,
        destination: document.getElementById("destination").value,
        userId: user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection("bookings").add(bookingData)
        .then(() => {
            successMsg.textContent = "🎉 Booking saved successfully!";
            bookingForm.reset();
        })
        .catch(err => {
            alert("❌ Error saving booking: " + err.message);
        });
});

