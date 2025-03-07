import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { 
    name: "linkedin", 
    icon: <FaLinkedinIn />, 
    url: "https://www.linkedin.com/in/maria-caroline-adriano/" 
  },
  { 
    name: "github", 
    icon: <FaGithub />, 
    url: "https://github.com/MariaEnilorac" 
  },
  { 
    name: "instagram", 
    icon: <FaInstagram />, 
    url: "https://www.instagram.com/maria_enilorac/" 
  },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a 
          href={network.url} 
          className="social-btn" 
          id={network.name} 
          key={network.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
