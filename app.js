const suggestions = document.getElementById("suggestions");
const content = document.getElementById("content");

function showSuggestions() {
  suggestions.classList.remove("hidden");
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".prompt-wrapper")) {
    suggestions.classList.add("hidden");
  }
});

function loadPage(page) {
  suggestions.classList.add("hidden");

  const pages = {
    about: `
      <h2>About Me</h2>
      <img src="images/headshot.jpg" class="hero-img"/>
      <p>
        I’m Ananya Raghunath, an Honors Computer Science student at NJIT focused
        on AI safety, software engineering, and human-centered systems.
      </p>
      <img src="images/njit.png"/>
    `,

    experience: `
      <h2>Experience</h2>
      <div class="card">
        <img src="images/pseg.png"/>
        <p>IT Disaster Recovery & BC Intern – PSEG</p>
      </div>
      <div class="card">
        <img src="images/indiaAsha.png"/>
        <p>Application Developer Intern – IndiaAsha</p>
      </div>
      <div class="card">
        <img src="images/tutor.png"/>
        <p>STEM Instructor – CodeNinjas & JerseySTEM</p>
      </div>
    `,

    projects: `
      <h2>Projects</h2>
      <div class="card">
        <h3>Blend’d Beauty</h3>
        <img src="images/Blend.jpg"/>
        <img src="images/BlenddHome.png"/>
        <img src="images/BlenddApp.png"/>
        <img src="images/BlenddPrice.png"/>
      </div>

      <div class="card">
        <h3>Defending LLM Jailbreaking</h3>
        <img src="images/HIRF.jpg"/>
        <img src="images/HIRFR.png"/>
      </div>

      <div class="card">
        <h3>Connect Newark</h3>
        <img src="images/girlHacks.jpeg"/>
        <img src="images/RTC.JPEG"/>
      </div>
    `,

    contact: `
      <h2>Contact</h2>
      <p>Email: ananyaraghunath06@gmail.com</p>
      <p>LinkedIn & GitHub available upon request</p>
    `,
  };

  content.innerHTML = pages[page];
  content.classList.remove("home");
}
