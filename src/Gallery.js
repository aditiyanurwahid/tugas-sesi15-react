import React from "react";
import project9 from "./img/project/9.jpg";
import project8 from "./img/project/8.jpg";
import project7 from "./img/project/7.jpg";
import project6 from "./img/project/6.jpg";
import project5 from "./img/project/5.jpg";
import project4 from "./img/project/4.jpg";
import project3 from "./img/project/3.jpg";
import project2 from "./img/project/2.jpg";
import project1 from "./img/project/1.jpg";

function Gallery() {
  return (
    <section id="gallery">
      <div class="container">
        <div class="row text-center mb-3">
          <div class="col">
            <h2>My Gallery</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={project9} class="card-img-top" alt="Projects 9" />
              <div class="card-body">
                <p class="card-text">Ke kampus naik ojek online, pulangnya gowes kursi roda. Walaupun tugasnya deadline, alhamdulillah akhirnya wisuda. Eeeaaa...</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={project8} class="card-img-top" alt="Projects 8" />
              <div class="card-body">
                <p class="card-text">Yang ini skip aja ya, terima kasih hehehe...</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={project7} class="card-img-top" alt="Projects 7" />
              <div class="card-body">
                <p class="card-text">Kalau yang ini Ibuku sendiri, "mirip kan?" pasti nggak bisa bedain. "Ya iyalah, kan mukanya enggak keliatan."</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={project6} class="card-img-top" alt="Projects 6" />
              <div class="card-body">
                <p class="card-text">
                  Nah, ini namanya Ibu Soraya (kiri) dari bagian mananya aku lupa, mohon maaf ya hehehe. Kursi roda yang di dapat tadi Ibu Soraya ini yang nyariin donasi. Ini juga udah kaya Ibu sendiri. Kalau yang (kanan) lupa namanya, tapi
                  seingatku dari bagian psikologi. "seingatku loh ya."
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={project5} class="card-img-top" alt="Projects 5" />
              <div class="card-body">
                <p class="card-text">
                  Dokter Ria biasa dipanggilnya, perhatian banget sama pasien. "Ya iyalah Dit kan tuntutan pekerjaan!!!", tetapi menurutku bukan sekedar tuntutan profesi tetapi memang niat dari dalam hati. Pokonya udah kaya Ibu sendiri.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={project4} class="card-img-top" alt="Projects 4" />
              <div class="card-body">
                <p class="card-text">Waktu belajar berdiri, "udah kaya bunga mawar aja Dit", yeee itu mah berduri!!!</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={project3} class="card-img-top" alt="Projects 3" />
              <div class="card-body">
                <p class="card-text">Sesama paraplegi dilarang balapan lari, "emang kenapa Dit?" ya kan nggak bisa!!! hehehe...</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={project2} class="card-img-top" alt="Projects 2" />
              <div class="card-body">
                <p class="card-text">
                  Ini kursi rodanya, recomended buat paraplegi pemula karena ada bagian yang bisa lepas pasang untuk memudahkan berpindah tempat walaupun tanpa bantuan orang lain. Buat pemula lebih baik minta bantuan yah, dibantu nggak? ya
                  dibantu lah masa enggak!!! hehehe...
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={project1} class="card-img-top" alt="Projects 1" />
              <div class="card-body">
                <p class="card-text">H+ lupa tepatnya berapa setelah operasi, dapet kursi roda gratis dari donatur... Yeay.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L30,133.3C60,139,120,149,180,170.7C240,192,300,224,360,245.3C420,267,480,277,540,261.3C600,245,660,203,720,197.3C780,192,840,224,900,213.3C960,203,1020,149,1080,154.7C1140,160,1200,224,1260,245.3C1320,267,1380,245,1410,234.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Gallery;
