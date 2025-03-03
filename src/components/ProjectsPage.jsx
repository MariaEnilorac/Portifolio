import "../styles/components/projects.sass";
import { Link } from "react-router-dom";

import Ismalia from "../videos/gerenciador-de-projetos.mp4"; 
import GerenciadordeProjetos from "../videos/gerenciador-de-projetos.mp4"; 
import ConsultadeClima from "../videos/consulta-de-clima.mp4"; 
import GerenciadordeTarefas from "../videos/gerenciador-de-tarefas.mp4"; 
import ListadeTarefas from "../videos/lista-de-tarefas.mp4"; 


function ProjectsPage() {
  const projects = [
    { id: 1, title: "Poema Ismália", description: "Descrição do Projeto 1", videoUrl: Ismalia },
    { id: 2, title: "Gerenciador de Projetos", description: "Descrição do Projeto 2", videoUrl: GerenciadordeProjetos },
    { id: 3, title: "Consulta de clima", description: "Descrição do Projeto 3", videoUrl: ConsultadeClima },
    { id: 4, title: "Gerenciador de tarefas", description: "Descrição do Projeto 4", videoUrl: GerenciadordeTarefas },
    { id: 5, title: "Lista de Tarefas", description: "Descrição do Projeto 5", videoUrl: ListadeTarefas },
    { id: 6, title: "Projeto 6", description: "Descrição do Projeto 6", videoUrl: Ismalia },
  ];

  return (
    <div className="projects-page-container">
      <div className="projects-page">
        <h2>Projetos</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.videoUrl && project.videoUrl.endsWith(".mp4") ? (
                <video src={project.videoUrl} title={project.title} controls></video>
              ) : (
                <iframe 
                  src={project.videoUrl} 
                  title={project.title} 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            
          ))}
        </div>
        <div className="button"> <Link to="/" className="btn">
        Voltar
      </Link></div>
       
            </div>
    </div>
  );
}

export default ProjectsPage;
