import profil from "./img/profil1.jpeg";

function Jumbotron() {
  return (
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
  );
}

export default Jumbotron;
