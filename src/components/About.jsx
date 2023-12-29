import '../styles/components/about.sass'

const About = () => {
    return (
    <div className="card-info about">
        <h1>Sobre</h1>
        <div  className="content">
            <h3>Olá!</h3>
            <p>Meu nome é <b>Samuel</b>, tenho 27 anos, moro na Zona Leste de São Paulo e atuo como um <b>Desenvolvedor Full Stack</b> iniciante.</p>
            {/* <h3>Objetivos</h3> */}
            <p>Busco desenvolver minhas habilidades de <b>Back-End</b> e <b>Front-End</b> através de diferentes aplicações e projetos.</p>
            {/* <h3>Formação</h3> */}
            <p>Sou graduado em <b>Engenharia de Produção</b>, <b>Técnico em Logística </b>e atualmente estudo o <b>Desenvolvimento de Sistemas Web.</b></p>
            {/* <h3>Histórico Profissional</h3> */}
            <p>Tenho mais de 5 anos de experiência na área <b>Logística</b> ( com 2 projetos de sistema, relacionados a esta área ) e 1 ano atuando como analista de dados para a área de Vendas.</p>
        </div>
    </div>
    );
}

export default About;