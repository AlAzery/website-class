const data = [
    { nama: "ZERY", img: "alazery.jpeg" },
    { nama: "ANDIKA", img: "andika.jpeg" },
    { nama: "ARYA", img: "human (13).jpeg" },
    { nama: "ASWIN", img: "human (22).jpeg" },
    { nama: "BAGAS ", img: "bawan (2).jpeg" },
    { nama: "BAYU ", img: "human (23).jpeg" },
    { nama: "DIMAS", img: "human (9).jpeg" },
    { nama: "ERIK", img: "human (12).jpeg" },
    { nama: "EVAN", img: "human (21).jpeg" },
    { nama: "FAREL", img: "human (10).jpeg" },
    { nama: "IHSAN", img: "human ().jpeg" },
    { nama: "IZATUL", img: "human (1).jpeg" },
    { nama: "KRISTIAN", img: "human (3).jpeg" },
    { nama: "M ALIF", img: "human (4).jpeg" },
    { nama: "MHD THAMIM", img: "human (6).jpeg" },
    { nama: "MHD. FATIR", img: "human (15).jpeg" },
    { nama: "MUHAMMAD PAJAR", img: "human (20).jpeg" },
    { nama: "MUHAMMAD AFRIZAL", img: "human (11).jpeg" },
    { nama: "NOVIANDRA", img: "human (2).jpeg" },
    { nama: "RADIT", img: "human (16).jpeg" },
    { nama: "RAHMAT", img: "human (7).jpeg" },
    { nama: "RAJA FERDYAN", img: "human (25).jpeg" },
    { nama: "RANGGA", img: "human (14).jpeg" },
    { nama: "RANGGI", img: "human (14).jpeg" },
    { nama: "RASYA", img: "human (17).jpeg" },
    { nama: "RESTU", img: "human ().jpeg" },
    { nama: "REYFAN", img: "human (18).jpeg" },
    { nama: "RIZAL", img: "human ().jpeg" },
    { nama: "SAHRUL", img: "human (5).jpeg" },
    { nama: "SATRIAWAN", img: "bawan (1).jpeg" },
    { nama: "SYAFIQ", img: "human (24).jpeg" },
    { nama: "ZIGO", img: "human (8).jpeg" },
    { nama: "ZOVY", img: "human (19).jpeg" }
];




let currentPage = 1;
const itemsPerPage = 5;

function renderData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = data.slice(startIndex, endIndex);

    const container = document.getElementById("data-container");
    container.innerHTML = "";

    itemsToShow.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${startIndex + index + 1}</td><td>${item.nama}</td><td><img src="img/${item.img}" class="img-fluid" width="40"></td>`;
        container.appendChild(row);
    });

    document.getElementById("page-info").innerText = `Halaman ${currentPage} dari ${Math.ceil(data.length / itemsPerPage)}`;
}

function nextPage() {
    if (currentPage * itemsPerPage < data.length) {
        currentPage++;
        renderData();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderData();
    }
}

renderData();

// Ambil elemen overlay dan tombol
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const closeSound = document.getElementById('close-sound');

// Fungsi buat tutup overlay + mainin suara
function closeOverlay() {
    closeSound.play(); // Putar suara
    AOS.init();
    setTimeout(() => {
        overlay.style.display = 'none'; // Hilangkan overlay setelah suara mulai diputar
    }, 500); // Delay dikit biar efeknya smooth
}

// Event listener buat klik tombol
closeBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Biar klik tombol nggak trigger overlay
    closeOverlay();
});

// Event listener buat klik overlay
overlay.addEventListener('click', closeOverlay);

function openRahasia() {
    Swal.fire("Apa Rahasianya?", "Yaa tidak ada Mwehehe, Gini doang webnya? iya, gini doang untuk kenang-kenangan ajah. Makaccihh yaa cantik/ganteng udah liat web kenangan kami, moga kita success bercama, Amiinn <span class='color-red' id='heart'>&hearts;</span><span class='color-red' id='heart'>&hearts;</span>");
}
function openAllFoto() {
    Swal.fire("Sabar","link Google Drive Belum siaap, mwehehe");
}