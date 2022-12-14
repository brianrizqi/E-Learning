$(window).on("scroll", function () {
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});


function serviceSection(moduleCount, title, description) {
    let html = '';
    for (let i = 0; i < moduleCount; i++) {
        html += `
        <div class="col-sm-6 col-md-3">
            <h3 class="text-center">${title[i]}</h3>
            <p>${description[i]}</p>
        </div>
        `;
    }
    $(`#service-section`).html(html);
}

var service_title = [
    'Website Company Profile',
    'Website e-commerce',
    'Website Point of Sales',
    "Website CRM<br>",
]
var service_description = [
    'Membangun website company profile sesuai dengan keinginan perusahaan anda',
    'Membangun website e-commerce yang dapat menjual produk-produk unggulan anda dan dapat membantu penjualan anda',
    'Membangun website point of sales untuk toko anda agar penjualan dan pembelian terorganisir dengan baik',
    'Membangun website Customer Relationship Management (CRM) untuk Pelacakan dan pemanfaatan data pelanggan,Layanan pelanggan untuk membangun loyalitas,Alat pemasaran dan promosi terbaik, dan Mengelola dan mengintegrasi banyak saluran bisnis',
]
serviceSection(4, service_title, service_description)

function worksSection(moduleCount, title, description) {
    let html = '';
    for (let i = 0; i < moduleCount; i++) {
        html += `
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <a class="thumbnail btn-detail-work" href="#">
						<span class="img">
							<img src="assets/images/work-${i}.png" alt="">
							<span class="cover"><span class="more">See details &rarr;</span></span>
						</span>
                        <span class="title">${title[i]}</span>
                    </a>
                    <p>${description[i]}</p>
                </div>
        `;
    }
    $(`#recent-works-section`).html(html);
}

var work_title = [
    'SSO Rootpixel',
    'Membership Rootpixel',
    'Vodub (Voice Dubber)',
    'Web survey',
    'Jo-Florist',
    'Arjuna Ristekdikti',
    'TSA National Foundation Profile',
    'Gizihub.com',
    'Pixelpaper',
    'Point of Sales Toko Emas',
    'Kalsa (Kalkulator)',
    'Undangan Pernikahan',
    'SPPK Bahan Pakan Sapi',
    'Aplikasi Prosalina Radio Jember',
    'Aplikasi Kiss FM',
    'CRM TOG Soft Bank (Singapore)',
    'Talentgrowth',
    'Work Order System',
    'Geram Apps Pasuruan Regency',
    'Apotek Rachman Farma',
    'PPE Butar PDSI PERTAMINA',
    'INVEE.NET',
    'Levidio Market',
    'RISS Radana'
]

var work_description = [
    'SSO Rootpixel adalah website single sign on yang dimiliki oleh Rootpixel. User dapat login satu kali saja dan bisa mengakses website dari rootpixel',
    'Membership Rootpixel adalah marketplace yang dimiliki oleh Rootpixel. Pada website tersebut rootpixel menjual produk yang dibuat oleh rootpixel',
    'Vodub adalah marketplace bagi voice over. Vodub adalah salah satu produk dari rootpixel. Vodub menjual jasa voice over pada khalayak umum',
    'Website WDU Survei App adalah website mencari responden dan mengambil survey',
    'Jo-florist adalah website untuk menjual produk dari toko jo-florist yang ada di kota jember',
    'Arjuna ristekdikti adalah website akreditasi untuk jurnal yang dimiliki oleh ristekdikti.',
    'Membangun website profile milik TSA National Foundation',
    'Membangun website ecommerce dan konsultasi milik gizihub',
    'Pxlpaper adalah website e-commerce milik rootpixel untuk menjual kaos milik rootpixel',
    'Membangun sistem kasir untuk toko emas di kalisat jember',
    'KALSA adalah Tools menghitung pergerakan nilai trading pada crypto currencies',
    'Website ini untuk mengundang pernikahan dan dapat mengirimkan ucapan',
    'SPPK ini memberikan rekomendasi pemilihan bahan pakan sapi berdasarkan metode TOPSIS',
    'Aplikasi ini dapat memutar radio prosalina jember dengan cara streaming.',
    'Aplikasi ini dapat memutar radio Kiss FM jember dengan cara streaming.',
    'Aplikasi ini untuk memonitor setiap aktifitas TOG Soft Bank',
    'Website ini bertujuan untuk memberikan pelajaran dan kuis untuk para jobseeker',
    'Website ini bertujuan memonitoring kerja engineer dan sales',
    'Sistem pendukung keputusan untuk membantu pemerintah memerangi epidemi demam berdarah.',
    'Sistem Kasir untuk Apotek beserta Laporan, Faktur Piutang, Restock, dan Stok Opnam',
    'Website ini bertujuan untuk memonitoring APD yang diberikan pada Crew',
    'Sistem untuk membuat undangan pernikahan, meeting, aqiqah, dll',
    'Sistem untuk menjual produk-produk yang mendukung dalam dunia desain',
    'Sistem Pengajuan Peminjaman pada Radana'
]
worksSection(work_description.length, work_title, work_description)