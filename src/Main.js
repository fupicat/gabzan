import Anchor from './components/Anchor';
import Category from './components/Category';
import Project from './components/Project';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <header className="intro container">
        <div className="nome">
          <h1>Gabriel</h1>
          <h1>Rauta Zanette</h1>
          <div className="contato">
            <a href="https://github.com/fupicat/"><i class="fab fa-github fa-2x"></i></a>
            <a href="mailto:gabzanette437@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>
          </div>
        </div>
        <nav>
          <Anchor text="Frontend" icon="laptop-code" />
          <Anchor text="Backend" icon="server" />
          <Anchor text="Game dev" icon="gamepad" />
          <Anchor text="Tradução" icon="language" />
          <Anchor text="Etc." icon="ellipsis-h" />
          <Anchor text="Sobre mim" icon="surprise" />
        </nav>
      </header>
      <Category title="Frontend">
        <Project
          title="Fupicat"
          about="Site pessoal de jogos para crianças e adolescentes."
          tools={["HTML", "CSS", "JavaScript", "GitHub Pages"]}
          link="https://fupicat.github.io/"
          source="https://github.com/fupicat/fupicat.github.io/"
        />
        <Project
          title="Replacer"
          about="Ferramenta de edição de texto automática."
          tools={["HTML", "CSS", "JavaScript", "GitHub Pages"]}
          link="https://fupicat.github.io/replacer/"
          source="https://github.com/fupicat/replacer/"
        />
        <Project
          title="Editor de Scratchblocks"
          about="Editor de blocos do Scratch em português, para uso com os fóruns do Scratch."
          tools={["HTML", "CSS", "JavaScript", "Replit"]}
          link="https://editorscratchblocks.fupibrazil.repl.co/"
          source="https://replit.com/@FupiBrazil/EditorScratchblocks?v=1"
        />
        <Project
          title="Blog com busca"
          about="Experimento de blog com busca e tags, usando a CMS Nuxt Content."
          tools={["Vue.js", "Nuxt.js", "CSS", "Netlify"]}
          link="https://fupi.netlify.app/blog"
          source="https://github.com/fupicat/fupisite2"
        />
        <Project
          title="Stickerator"
          about="Editor de imagem minimalista. Arraste uma imagem e ele vai adicionar uma borda branca e sombra, e só."
          tools={["HTML", "CSS", "JavaScript", "GitHub Pages"]}
          link="https://fupicat.github.io/stickerator/"
          source="https://github.com/fupicat/stickerator"
        />
        <Project
          title="Youtubeflix"
          about="Exercício da Digital Innovation One com vídeos do YouTube retirados da API."
          tools={["HTML", "CSS", "JavaScript", "GitHub Pages"]}
          link="https://fupicat.github.io/youtubeflix-dio/"
          source="https://github.com/fupicat/youtubeflix-dio"
        />
        <Project
          title="Botagram"
          about="Exercício da Digital Innovation One com design diferente e imagens aleatórias da API da Unsplash."
          tools={["HTML", "CSS", "JavaScript", "GitHub Pages"]}
          link="https://github.com/fupicat/botagram"
          source="https://fupicat.github.io/botagram/"
        />
      </Category>
      <Category title="Backend">
        <Project
          title="Scratch Projects API"
          about="Serviço Web para obter informações de projetos no Scratch via web scraping."
          tools={["Node.js", "Replit"]}
          link="https://scratchprojects--fupibrazil.repl.co/"
          source="https://replit.com/@FupiBrazil/ScratchProjects?v=1"
        />
      </Category>
    </div>
  );
}

export default Main;
