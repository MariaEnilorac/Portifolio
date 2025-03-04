import "../styles/components/projects.sass";
import { Link } from "react-router-dom";

import Ismalia from "../videos/gerenciador-de-projetos.mp4"; 
import GerenciadordeProjetos from "../videos/gerenciador-de-projetos.mp4"; 
import ConsultadeClima from "../videos/consulta-de-clima.mp4"; 
import GerenciadordeTarefas from "../videos/gerenciador-de-tarefas.mp4"; 
import ListadeTarefas from "../videos/lista-de-tarefas.mp4"; 


function ProjectsPage() {
  const projects = [
    { id: 1, title: "Poema Ismália", description: "Este é um projeto HTML e CSS que apresenta o poema Ismália de Alphonsus Guimaraens. O objetivo é criar uma apresentação visual agradável do poema com diferentes seções e estilos.", videoUrl: Ismalia },
    { id: 2, title: "Gerenciador de Projetos", description: "Este é um aplicativo de gerenciamento de projetos desenvolvido em React. Ele permite criar, visualizar, editar e excluir projetos, além de categorizar e gerenciar orçamentos.", videoUrl: GerenciadordeProjetos },
    { id: 3, title: "Consulta de clima", description: "Este projeto é uma aplicação simples de consulta de clima utilizando a API do OpenWeatherMap. A aplicação permite que o usuário insira o nome de uma cidade, e retorna as informações do clima atual, como a temperatura e o ícone representando as condições climáticas.", videoUrl: ConsultadeClima },
    { id: 4, title: "Gerenciador de tarefas", description: "Um simples aplicativo de gerenciamento de tarefas construído com React e uma API local para adicionar, remover e marcar tarefas como concluídas.", videoUrl: GerenciadordeTarefas },
    { id: 5, title: "Lista de Tarefas", description: "Este projeto é uma aplicação simples de Lista de Tarefas (To-Do List) desenvolvida em React. A aplicação permite adicionar, remover, completar e filtrar tarefas, além de oferecer funcionalidade de pesquisa.", videoUrl: ListadeTarefas },
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
