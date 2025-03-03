import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { 
    id: "html", 
    name: "HTML5", 
    icon: <DiHtml5 />, 
    description: "HTML5 é a versão mais recente da linguagem de marcação usada para criar páginas web, oferecendo novos elementos e suporte para multimídia."
  },
  { 
    id: "css", 
    name: "CSS3", 
    icon: <DiCss3 />, 
    description: "CSS3 é a versão mais recente do CSS, permitindo a criação de layouts modernos, animações e transições com maior flexibilidade."
  },
  { 
    id: "js", 
    name: "JavaScript", 
    icon: <DiJsBadge />, 
    description: "JavaScript é uma linguagem de programação essencial para criar interatividade e dinamicidade em páginas web."
  },
  { 
    id: "node", 
    name: "Node.js", 
    icon: <DiNodejsSmall />, 
    description: "Node.js é uma plataforma de execução de JavaScript no servidor, permitindo a criação de aplicações de alta performance e escaláveis."
  },
  { 
    id: "mysql", 
    name: "MySQL", 
    icon: <DiMysql />, 
    description: "MySQL é um sistema de gerenciamento de banco de dados relacional, utilizado para armazenar dados de forma eficiente em aplicações web."
  },
  { 
    id: "react", 
    name: "React", 
    icon: <DiReact />, 
    description: "React é uma biblioteca JavaScript para construir interfaces de usuário, focando na criação de componentes reutilizáveis."
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
