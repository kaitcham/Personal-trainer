const openMenu = document.querySelector('#open');
openMenu.addEventListener('click', () => {
  document.querySelector('.navbar').style.display = ' block';
  document.querySelector('body').style.overflow = 'hidden';
  openMenu.style.display = 'none';
});

const closeMenu = document.querySelector('#close');
closeMenu.addEventListener('click', () => {
  document.querySelector('.navbar').style.display = ' none';
  document.querySelector('body').style.overflow = 'visible';
  openMenu.style.display = 'block';
});

const navLink = document.querySelectorAll('.navbar ul li');
navLink.forEach.call(navLink, (link) => {
  link.onclick = () => {
    document.querySelector('.navbar').style.display = ' none';
    document.querySelector('body').style.overflow = 'visible';
    openMenu.style.display = 'block';
  };
});

const specialistArray = [
  {
    id: 1,
    name: 'Yochai Benkler',
    image: './images/kilnam.png',
    alt: 'featured speaker image',
    intro: 'Person trainer with over 7years of experience',
    descr:
      'He is an experienced trainer, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, modi.',
  },
  {
    id: 2,
    name: 'SohYeong Noh',
    image: './images/sohyeong.png',
    alt: 'featured speaker image',
    intro: 'Nutritionist with over 12years of experience',
    descr:
      'He is an experienced nutritionist , Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, modi. Lorem ipsum dolor sit',
  },
];

const speakerCard = document.querySelector('.featured-container');
let htmlCode = '';

specialistArray.forEach((specialist) => {
  const {
    name, image, alt, intro, descr,
  } = specialist;
  htmlCode += `
  <div class="featured-content">
    <div class="featured-content-image">
      <img
        class="speaker-image"
        src="${image}"
        alt="${alt}"
      />
      </div>
        <div class="speaker-details" id="about-speaker">
        <h2 class="speaker-name">${name}</h2>
        <p class="speaker-designation">
          ${intro}
        </p>
        <p id="dots">.........</p>
        <p class="speaker-history">
          ${descr}
        </p>
    </div>
  </div>
  `;
});

speakerCard.innerHTML = htmlCode;
