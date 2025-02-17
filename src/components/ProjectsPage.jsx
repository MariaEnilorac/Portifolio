import "../styles/components/projects.sass";

function ProjectsPage() {
  const projects = [
    { id: 1, title: "Projeto 1", description: "Descrição do Projeto 1", videoUrl: "https://www.youtube.com/embed/xyz" },
    { id: 2, title: "Projeto 2", description: "Descrição do Projeto 2", videoUrl: "https://www.youtube.com/embed/abc" },
  ];

  return (
    <div className="projects-page">
      <h2>Projetos</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <iframe 
              src={project.videoUrl} 
              title={project.title} 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
