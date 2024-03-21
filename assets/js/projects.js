const projectsData = [
  {
    id: 1,
    title: `Amazon Clone: E-commerce Website`,
    link: "https://amazon-clone-kishh.netlify.app/",
    image: "./assets/images/projects/amazone-clone.png",
    description: `A fully responsive, multi-page replica of the
    Amazon e-commerce platform. Featuring clean design and interactive product listings,
    it's a practice project built with HTML5, CSS, and Bootstrap5.`,
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    category: ["Clones", "Ecommerce Websites"],
  },
  {
    id: 2,
    title: "WhatsApp Clone: Messaging App",
    link: "https://whatsapp-clone-kishh.netlify.app/",
    image: "./assets/images/projects/whatsapp-clone.png",
    description: `A faithful clone of the popular messaging app
    WhatsApp, this project mirrors its functionality using HTML5, CSS3, and Vanilla
    JavaScript. With a clean interface and user-friendly features.`,
    techStack: ["HTML", "CSS", "JavaScript"],
    category: ["Clones"],
  },
  {
    id: 3,
    title: "Kishha: E-commerce Bliss",
    link: "https://kishha-ecommerce-kishh.netlify.app/",
    image: "./assets/images/projects/kishha-eccomerce.png",
    description: `A dynamic 5-page e-commerce site crafted with
    HTML5, CSS3, and Vanilla JS. The homepage introduces a captivating shopping
    experience, while the shop, contact, about, and single product pages contribute to a
    seamless and responsive design.`,
    techStack: ["HTML", "CSS", "JavaScript"],
    category: ["Ecommerce Websites"],
  },
  {
    id: 4,
    title: "Kickup Golf: Family-Friendly Landing",
    link: "https://kickup-golf-kishh.netlify.app/",
    image: "./assets/images/projects/sidcup-golf.png",
    description: `A captivating landing page for "Kickup Family Golf"
    designed with HTML5, CSS3, Vanilla JS, and GSAP. This responsive site introduces a
    family golf club with modern animations, seamlessly blending information about golf in a
    single-page experience.`,
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    category: ["Animated Websites", "Landing Pages"],
  },
  {
    id: 5,
    title: "Gurukul Haven: Educational Retreat",
    link: "https://gurukul-ashram-kishh.netlify.app/",
    image: "./assets/images/projects/gurukul-website.png",
    description: `An educational sanctuary seamlessly designed with
    HTML5, Bootstrap5, and CSS. Dive into the essence of traditional learning with a
    responsive homepage
    and an enlightening about page. The timeless wisdom and educational ethos that
    Gurukul Haven offers, providing a serene glimpse into the world of holistic education.`,
    techStack: ["HTML", "CSS", "Bootstrap", "AOS"],
    category: ["Landing Pages"],
  },
  {
    id: 6,
    title: "Japanese Sushi: Culinary Delight",
    link: "https://japanese-sushi-kishh.netlify.app/",
    image: "./assets/images/projects/japanese-sushi.png",
    description: `An enticing landing page for "Japanese Sushi"
    restaurant, skillfully crafted using HTML5 and CSS. This responsive site presents the
    restaurant's menu and additional information, providing a delightful glimpse into the
    world of Japanese cuisine.`,
    techStack: ["HTML", "CSS"],
    category: ["Landing Pages", "Ecommerce Websites"],
  },
  {
    id: 7,
    title: "Kishha: Woocomerce Website",
    link: "https://kishha.com/",
    image: "./assets/images/projects/Kishha.jpeg",
    description: `An E-commerce website crafted with
    WordPress, Woocomerce, and Few Extension. The homepage introduces a captivating shopping
    experience, while the shop, contact, about, and single product pages contribute to a
    seamless and responsive design.`,
    techStack: ["WordPress", "Woocomerce", "Few Extension"],
    category: ["Ecommerce Websites"],
  },
];

// Add active class to the navbar
const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
  });
});

const populateAllProjects = () => {
  const projectContainer = document.querySelector(".projects-container");
  let projectsHtml = ``;

  projectsData.map((project) => {
    projectsHtml += `
      <div class="col-12 col-md-6 col-lg-4 project text-white">
      <a class="d-block text-decoration-none" href="${project.link}"
          target="_blank" rel="noopener">
          <img src="${project.image}" alt="${project.title}" class="m-auto d-block"
              style="width: 90%; height: auto; border-radius: 13px;">
      </a>
      <h2 class="px-3 px-md-4 ps-lg-5 fw-bolder mb-2 mt-4">
          <a class="d-block text-decoration-none text-white"
              href="${project.link}" target="_blank" rel="noopener"
              style="font-size: 22px; white-space: nowrap;">
              ${project.title}
          </a>
      </h2>
      <p class="px-4 px-md-4 ps-lg-5 m-0 fs-5">
      ${project.description}
      </p>
      </div>`;
  });
  projectContainer.innerHTML = projectsHtml;
};

const sortProjects = (category, element) => {
  const projectsContainer = document.querySelector(".projects-container");
  let sortedProjects = [];
  let projectHtml = ``;

  projectsData.forEach((project, index) => {
    if (project.category.includes(category)) {
      sortedProjects.push(project);
    } else {
    }
  });

  sortedProjects.map((project) => {
    projectHtml += `
    <div class="col-12 col-md-6 col-lg-4 project text-white">
    <a class="d-block text-decoration-none" href="${project.link}"
        target="_blank" rel="noopener">
        <img src="${project.image}" alt="${project.title}" class="m-auto d-block"
            style="width: 90%; height: auto; border-radius: 13px;">
    </a>
    <h2 class="px-3 px-md-4 ps-lg-5 fw-bolder mb-2 mt-4">
        <a class="d-block text-decoration-none text-white"
            href="${project.link}" target="_blank" rel="noopener"
            style="font-size: 22px; white-space: nowrap;">
            ${project.title}
        </a>
    </h2>
    <p class="px-4 px-md-4 ps-lg-5 m-0 fs-5">
    ${project.description}
    </p>
    </div>`;
  });

  projectsContainer.innerHTML = projectHtml;
};

populateAllProjects();
