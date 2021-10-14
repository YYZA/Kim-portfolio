'use strick'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    if(window.scrollY > navbarHeight) {
      navbar.classList.add('navbar--dark');
    } else {
      navbar.classList.remove('navbar--dark');
    }
  });


const navbarMenu = document.querySelector ('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  };
  navbarMenu.classList.remove('open');

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView();
  const scrollMove = document.querySelector(link);
    // scrollMove.scrollIntoView({behavior: "smooth"});
    const top = scrollMove.offsetTop - navbarHeight < 0 ? 0 : scrollMove.offsetTop - navbarHeight ;  // top - navbarHeight < 0 일 때 0으로 입력.
    window.scrollTo({
        top:top,
        left:0,
        behavior: 'smooth'
    });
});

const navbarToggleBtn = document.querySelector('.toggleBtn');
navbarToggleBtn.addEventListener ('click', () => {
  navbarMenu.classList.toggle('open');
});

const contactBtn = document.querySelector ('.home__contact')
  contactBtn.addEventListener('click', ()=> {
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView( {behavior: 'smooth'});
  });


const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

const workBtnContainer = document.querySelector ('.work__categories');
const projectContainer = document.querySelector ('.work__projects');
const projects = document.querySelectorAll  ('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;
  if (filter == null) {
    return;
  };
  
  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove ('invisible');
      } else {
        project.classList.add('invisible');
      }
      });
    projectContainer.classList.remove('anim-out');
  }, 300);
});
