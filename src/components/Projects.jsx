import Projeto from '../img/ump.png'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight  } from "react-icons/md"
import { useState } from 'react'
import '../styles/components/projects.sass'
import { FaLink, FaCode } from "react-icons/fa";

const Projects = () => {

    const [currentProj, setCurrentProj] = useState(0);

    let position = 0; 

    function sliderLeft(){
        const proj = document.querySelectorAll('.proj');
        position = currentProj - 1;

        if(position < 0){
            position = proj.length - 1;
        }
        
        setCurrentProj(position);

        proj.forEach((p)=>{
            p.classList.remove('selected');
        });

        proj[position].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    
        proj[position].classList.add('selected');

        console.log(position, currentProj);
    };

    function sliderRight(){
        const proj = document.querySelectorAll('.proj');
        position = currentProj + 1;

        if(position >= proj.length){
            position = 0;
        }
        
        setCurrentProj(position);

        proj.forEach((p)=>{
            p.classList.remove('selected');
        });

        proj[position].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    
        proj[position].classList.add('selected');

        console.log(position, currentProj);
    }; 

    const projects = [
        {name:"UMP - Vila Buenos Aires",
        img: "https://github.com/Sam-Tavares/portfolio-samuel/blob/main/src/img/ump.png",
        desc:"Projeto de gerenciamento de grupo, permite o cadastro e controle de Membros, Eventos, Fluxo de Caixa e um pequeno sistema de Restaurante.", 
        tech:"Laravel PHP (Back-end), Bootstrap (Front-end)", 
        link1:"https://dgfly.com.br", link2:"https://github.com/Sam-Tavares/ump-ipvba"},

        {name:"DragonFly - Solicitações de Veículo e Ordens de Coleta (PRIVADO)",
        img: "src/img/dragonfly.png",
        desc:"Projeto de logística que permite o gerenciamento de ordens de coleta, controlando e organizando diferentes tipos de veículos e motoristas.", 
        tech:"PHP (Back-end), Bootstrap (Front-end)", 
        link1:"https://www.instagram.com/p/CyMD58dxJSF/?img_index=1", link2:"https://www.instagram.com/p/CyMD58dxJSF/?img_index=1"},
        
        {name:"Alanzoka-Jogos",
        img: "src/img/alanzoka.png",
        desc:"Projeto de gerenciamento de jogos, permite a divulgação, cadastro e edição de diferentes tipos de jogos.", 
        tech:"Laravel PHP (Back-end), Bootstrap (Front-end)", 
        link1:"https://alanzoka-jogos.com/", link2:"https://github.com/Sam-Tavares/alanzoka-jogos"},

        {name:"Portfólio (Teste)",
        img: "src/img/port-samuel.png",
        desc:"Projeto de portfólio criado para aprendizagem e manipulação das ferramentas de front-end: React JS e SASS.", 
        tech:"React JS (Front-end) e SASS (Front-end)", 
        link1:"https://sam-tavares.github.io/port-samuel/", link2:"https://github.com/Sam-Tavares/port-samuel"},
        
        {name:"Alanzoka Game",
        img: "src/img/alan-game.png",
        desc:"Projeto de manipulação de DOM utilizando CSS e JavaScript ", 
        tech:"CSS (Front-end) e JavaScript (Front-end)", 
        link1:"https://alanzoka-jogos.com/game", link2:"https://github.com/Sam-Tavares/alanzoka-jogos/tree/main/alanzoka/resources/views/game"},
    ];

    return (
            <div className="card-info projs">
                <h1>Projetos</h1>
                <div className="content">
                    <br />
                    <p>Aqui estão alguns projetos que desenvolvi durante este período de estudo de programação web, para alguns projetos, não será possível acessar os códigos fonte, mas estarei deixando a descrição de suas funcionalidades e as tecnologias utilizadas abaixo:</p>
                    <div className="projetos-wrapper">
                    <button onClick={sliderLeft} className='arrow-left control'><MdOutlineKeyboardArrowLeft/></button>
                    <button onClick={sliderRight} className='arrow-right control'><MdOutlineKeyboardArrowRight/> </button>
                        <div className="projetos">
                            {
                                projects.map((project) => (
                                <div className="proj selected">
                                    <img src={project.img} alt="" />
                                    <div className="desc">
                                        <h3>{project.name}</h3>
                                        <br />
                                        <p>{project.desc}</p>
                                        <br />
                                        <p><b>Tecnologias: </b>{project.tech}</p>
                                        <a target="_blank" href={project.link1}><FaLink/></a>
                                        <a target="_blank" href={project.link2}><FaCode/></a>                                                           
                                    </div>
                                </div>
                                ))
                            }
                        </div>                        
                    </div>
                </div>
            </div>             
    );
}

export default Projects;
