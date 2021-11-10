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
            <a className="anchor" href="/Gabriel Rauta Zanette Currículo.pdf">Baixar currículo</a>
          </div>
        </div>
        <nav>
          <Anchor text="Frontend" icon="laptop-code" />
          <Anchor text="Backend" icon="server" />
          <Anchor text="Game dev" icon="gamepad" />
          <Anchor text="Tradução" icon="language" />
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
          link="https://fupicat.github.io/botagram/"
          source="https://github.com/fupicat/botagram"
        />
        <Project
          title="GabZan"
          about="Meu portfólio. Você está aqui agora."
          tools={["React.js", "CSS", "JavaScript", "Netlify"]}
          link="https://gabzan.netlify.app"
          source="https://github.com/fupicat/gabzan"
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
        <Project
          title="Scratch-UserDB"
          about="Programa que conecta variáveis na nuvem do Scratch a uma base de dados e implementa uma API. Foi um experimento rápido e não tem documentação ainda, mas funciona."
          tools={["Node.js"]}
          link="https://www.npmjs.com/package/scratch-userdb"
        />
      </Category>
      <Category title="Game dev">
        <Project
          title="Scratch Quest"
          about="Jogo boss rush completo com 4 bosses e história. Prove ao mundo que o Scratch é o melhor programa."
          tools={["Godot"]}
          link="https://gamejolt.com/games/scratchquest/512290"
        />
        <Project
          title="Loop City"
          about="Jogo de puzzle caótico criado em 2 dias para a Ludum Dare."
          tools={["Godot"]}
          link="https://fupi.itch.io/loopcity"
        />
        <Project
          title="FrameRight"
          about="Mecânica inovadora baseada em animação que conquistou +1000 votos no Reddit (r/godot)."
          tools={["Godot"]}
          link="https://fupi.itch.io/frameright"
        />
        <Project
          title="Mais"
          about="Eu já fiz muitos jogos, tem mais no site Fupicat."
          link="https://fupicat.github.io/projetos.html#jogos"
        />
      </Category>
      <Category title="Tradução">
        <Project
          title="Scratch"
          about="É uma plataforma online de programação visual para crianças. Sou um dos tradutores principais do site para português brasileiro."
          tools={["Transifex"]}
          link="https://scratch.mit.edu/"
        />
        <Project
          title="Scratch Addons"
          about="Extensão de navegador para o Scratch com mais de 40.000 usuários. Sou o único tradutor do site, interface e documentação."
          tools={["Transifex"]}
          link="https://scratchaddons.com/pt-br/"
        />
        <Project
          title="TurboWarp"
          about="Versão modificada do Scratch. Sou o único tradutor do site, interface e documentação."
          tools={["Transifex"]}
          link="https://turbowarp.org/"
        />
      </Category>
      <Category title="Sobre mim">
        <Project
          title="Gabriel Rauta Zanette · 18 anos · Caxias do Sul, RS"
          about="Minha paixão é aprender coisas novas, especialmente relacionadas à programação! Comecei a aprendê-la para criar jogos, e hoje amo o desenvolvimento de websites e ferramentas. Além de programar gosto de compor música, editar vídeos, desenhar e nadar."
        />
      </Category>
      <footer>
        <div className="contato">
          <a href="https://github.com/fupicat/"><i class="fab fa-github fa-2x"></i></a>
          <a href="mailto:gabzanette437@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>
          <a className="anchor" href="/Gabriel Rauta Zanette Currículo.pdf">Baixar currículo</a>
        </div>
      </footer>
    </div>
  );
}

export default Main;
