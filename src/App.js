import "./App.css";
import profil from "./img/profil1.jpeg";
import project9 from "./img/project/9.jpg";
import project8 from "./img/project/8.jpg";
import project7 from "./img/project/7.jpg";
import project6 from "./img/project/6.jpg";
import project5 from "./img/project/5.jpg";
import project4 from "./img/project/4.jpg";
import project3 from "./img/project/3.jpg";
import project2 from "./img/project/2.jpg";
import project1 from "./img/project/1.jpg";

function App() {
  return (
    <body id="home">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            Aditiya Nurwahid
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="jumbotron text-center">
        <img src={profil} alt="Aditiya Nurwahid" width="200" class="rounded-circle img-thumbnail" />
        <h1 class="display-4">Aditiya Nurwahid</h1>
        <p class="lead">Paraplegia | Freelance</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,160L60,160C120,160,240,160,360,144C480,128,600,96,720,90.7C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section id="about">
        <div class="container">
          <div class="row text-center mb-3">
            <div class="col">
              <h2>About Me</h2>
            </div>
          </div>
          <div class="row justify-content-center fs-5 text-center">
            <div class="col-mb-4">
              <p>Halo salam kenal, saya biasanya dipanggil nengok. Usia saya lebih muda 22 tahun dari usia Bapak saya. Hobi makan jajanan teman, bukan makan teman.</p>
            </div>
            <div class="col-mb-4">
              <p>Salah satu keahlian saya adalah mengangkat galon air ke dispenser tanpa tumpah airnya sedikitpun, asalkan galonnya kosong. Cita-cita saya ingin menjadi karyawan tetap di PT. Mencari Cinta Sejati, sekian.</p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e2edff"
            fill-opacity="1"
            d="M0,256L40,240C80,224,160,192,240,170.7C320,149,400,139,480,154.7C560,171,640,213,720,202.7C800,192,880,128,960,96C1040,64,1120,64,1200,64C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>

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
                <img src={project1} class="card-img-top" alt="Projects 1" />
                <div class="card-body">
                  <p class="card-text">Ke kampus naik ojek online, pulangnya gowes kursi roda. Walaupun tugasnya deadline, alhamdulillah akhirnya wisuda. Eeeaaa...</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img src={project2} class="card-img-top" alt="Projects 2" />
                <div class="card-body">
                  <p class="card-text">Yang ini skip aja ya, terima kasih hehehe...</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img src={project3} class="card-img-top" alt="Projects 3" />
                <div class="card-body">
                  <p class="card-text">Kalau yang ini Ibuku sendiri, "mirip kan?" pasti nggak bisa bedain. "Ya iyalah, kan mukanya enggak keliatan."</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img src={project4} class="card-img-top" alt="Projects 4" />
                <div class="card-body">
                  <p class="card-text">
                    Nah, ini namanya Ibu Soraya (kiri) dari bagian mananya aku lupa, mohon maaf ya hehehe. Kursi roda yang di dapat tadi Ibu Soraya ini yang nyariin donasi. Ini juga udah kaya Ibu sendiri. Kalau yang (kanan) lupa namanya,
                    tapi seingatku dari bagian psikologi. "seingatku loh ya."
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
                <img src={project6} class="card-img-top" alt="Projects 6" />
                <div class="card-body">
                  <p class="card-text">Waktu belajar berdiri, "udah kaya bunga mawar aja Dit", yeee itu mah berduri!!!</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img src={project7} class="card-img-top" alt="Projects 7" />
                <div class="card-body">
                  <p class="card-text">Sesama paraplegi dilarang balapan lari, "emang kenapa Dit?" ya kan nggak bisa!!! hehehe...</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img src={project8} class="card-img-top" alt="Projects 8" />
                <div class="card-body">
                  <p class="card-text">
                    Ini kursi rodanya, recomended buat paraplegi pemula karena ada bagian yang bisa lepas pasang untuk memudahkan berpindah tempat walaupun tanpa bantuan orang lain. Buat pemula lebih baik minta bantuan yah, dibantu nggak?
                    ya dibantu lah masa enggak!!! hehehe...
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img src={project9} class="card-img-top" alt="Projects 9" />
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

      <section id="contact">
        <div class="container">
          <div class="row text-center mb-3">
            <div class="col">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form>
                <div class="mb-3">
                  <label for="name">Nama Lengkap</label>
                  <input type="text" class="form-control" id="name" aria-describedby="name" />
                </div>
                <div class="mb-3">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" aria-describedby="email" />
                </div>
                <div class="mb-3">
                  <label for="pesan">Pesan</label>
                  <textarea class="form-control" id="pesan" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0d6efd"
            fill-opacity="1"
            d="M0,128L40,144C80,160,160,192,240,186.7C320,181,400,139,480,154.7C560,171,640,245,720,250.7C800,256,880,192,960,181.3C1040,171,1120,213,1200,224C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>

      <footer class="bg-primary text-white text-center pb-5">
        <p>
          Created with <i class="bi bi-heart-fill text-danger"></i> by{" "}
          <a href="https://www.instagram.com/ditiyanurwahid/" class="text-white fw-bold">
            Aditiya Nurwahid
          </a>
        </p>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
  );
}

export default App;
