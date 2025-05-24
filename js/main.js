// main.js
const projects = [
    {
      title: "E-Commerce App",
      description: "Full-stack app with React & Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/your-repo",
      demo: "https://your-demo-link.com"
    },
    {
      title: "COVID-19 Data Analysis",
      description: "Python dashboard with Plotly",
      tech: ["Python", "Pandas", "Plotly"],
      github: "https://github.com/your-repo"
    }
  ];
  
  const projectGrid = document.querySelector('.project-grid');
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tech:</strong> ${project.tech.join(', ')}</p>
      <a href="${project.github}" target="_blank">GitHub</a>
      ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo</a>` : ''}
    `;
    projectGrid.appendChild(card);
  });