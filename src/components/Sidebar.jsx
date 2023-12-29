import '../styles/components/sidebar.sass'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Avatar from '../img/Foto.png'


const Sidebar = () => {

    function close() {
        const content = document.querySelectorAll(".content");
        content.forEach((cont) =>{
            cont.style.animation = 'close .9s forwards';
        });
        setTimeout(() => {
            content.forEach((cont) =>{
                cont.style.animation = 'open 1s';
            });
        }, 1000);
    };

    function btnAbout() {
        const cardInfo = document.querySelectorAll(".card-info");
        const about = document.querySelector(".about");

        close();
        setTimeout(() => {
            cardInfo.forEach((cd) => {
                cd.style.display = 'none';
            });
            about.style.display = 'block';
        }, 1000);

    };

    function btnTech() {
        const cardInfo = document.querySelectorAll(".card-info");
        const tech = document.querySelector(".tech");

        close();

        setTimeout(() => {
            cardInfo.forEach((cd) => {
                cd.style.display = 'none';
            });
            tech.style.display = 'block';
        }, 1000);
    }; 

    function btnProjs() {
        const cardInfo = document.querySelectorAll(".card-info");
        const projs = document.querySelector(".projs");

        close();
        setTimeout(() => {
            cardInfo.forEach((cd) => {
                cd.style.display = 'none';
            });
            projs.style.display = 'block';
        }, 1000);

    }; 

    return (
        <aside >
            <div id="side-bar">
                <img src={Avatar} alt="" />
                <h1>Samuel Tavares</h1>
                <div className="redes">
                    <a target="_blank" href="https://www.linkedin.com/in/samuel-tavares-96a57ab5/" id='linkedin'><AiFillLinkedin /></a>
                    <a target="_blank" href="https://github.com/Sam-Tavares" id='github'><AiFillGithub /></a>      
                    <a target="_blank" href="https://www.instagram.com/dragonfly.log/" id='instagram'><AiFillInstagram /></a>
                </div>
                <div className='infos'>
                    <h3>E-mail</h3>
                    <p>samuel.vinicius135@gmail.com</p>
                </div>
                <div className='infos'>
                    <h3>Telefone</h3>
                    <p>(11) 94491-8530</p>
                </div>
                <div className='infos'>
                    <h3>Localização</h3>
                    <p>São Paulo / SP</p>
                </div>
            </div>
            <div className="btn-opt">
                <a onClick={btnAbout}>Sobre</a>
                <a onClick={btnTech}>Tecnologias</a>
                <a onClick={btnProjs}>Projetos</a>
            </div>
        </aside>        
    );
}

export default Sidebar;