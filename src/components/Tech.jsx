import {DiHtml5, DiCss3, DiPhp, DiLaravel, DiJsBadge, DiMysql, DiReact, DiSass, DiBootstrap } from "react-icons/di"
import "../styles/components/tech.sass"

const Tech = () => {

    const technologies = [
        { id: "html", name: "HTML5", icon: <DiHtml5 />, desc: "Linguagem de marcação e estruturação web.", exp: "Média-Alta"},
        { id: "css", name: "CSS3", icon: <DiCss3 />, desc: "Linguagem de estilização, Front-end.", exp: "Média-Alta" },
        { id: "php", name: "PHP", icon: <DiPhp  />, desc: "Linguagem de programação, Back-end.", exp: "Média-Alta" },
        { id: "laravel", name: "Laravel", icon: <DiLaravel />, desc: "Framework PHP, Back-end.", exp: "Média-Alta" },
        { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, desc: "Framework CSS, Front-end.", exp: "Média" },
        { id: "js", name: "JavaScript", icon: <DiJsBadge />, desc: "Linguagem de programação, Back-end e Front-end.", exp: "Inicial-Média" },
        { id: "mysql", name: "MySQL", icon: <DiMysql />, desc: "Sistema de gerenciamento de dados, Back-end.", exp: "Média" },
        { id: "react", name: "React", icon: <DiReact />, desc: "Framework JavaScript, Front-end.", exp: "Em Estudo" },
        { id: "sass", name: "Sass", icon: <DiSass />, desc: "Linguagem de extenção do CSS, Front-end.", exp: "Em Estudo" },
    ];

    return (
    <div className="card-info tech">
        <h1>Tecnologias</h1>
        <div className="content">
            <div className="grid">
            {technologies.map((tech)=>(
                <div className="tech-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                    <div className="desc">
                        <h3>{tech.name}</h3>
                        <p>{tech.desc}</p>
                        <br />
                        <p><b>Experiência: </b>{tech.exp}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>        
    );
}

export default Tech;