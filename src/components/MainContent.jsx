import '../styles/components/maincontent.sass'
import About from './About'
import Projects from './Projects';
import Tech from './Tech'

const MainContent = () => {   

    return (
        <main id="main-content">
            <About /> 
            <Tech />
            <Projects/>
        </main>
    );
}

export default MainContent;