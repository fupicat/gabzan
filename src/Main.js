import Anchor from "./components/Anchor";
import Category from "./components/Category";
import Project from "./components/Project";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <header className="intro container">
        <div className="nome">
          <h1>
            Gabriel
            <br />
            Rauta Zanette
          </h1>
          <p className="subtitle">
            Desenvolvedor web frontend{" "}
            <span className="obs">
              {" "}
              - Next, React,{" "}
              <span className="small1">Vue, Svelte, Astro, </span>
              <span className="small2">
                Netlify, Vercel, Typescript, Sass,{" "}
              </span>
              <span className="small3">DecapCMS etc. etc.</span>
            </span>
          </p>
          <div className="contato">
            <a href="https://github.com/fupicat/">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="mailto:gabzanette437@gmail.com">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/gabriel-zanette-120b1920b/">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            {/* <a className="anchor" href="/Gabriel Rauta Zanette Currículo.pdf">
              Baixar currículo
            </a> */}
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
          title="Farmec"
          obs="Dev"
          about="Onepage para uma farmácia."
          tools={["Next.js", "React.js", "Sass", "Netlify"]}
          link="https://farmec.com.br/"
        />
        <Project
          title="Marcopolo Envio"
          obs="Dev"
          about="Onepage de uma van de carga."
          tools={["Next.js", "React.js", "Sass", "Netlify"]}
          link="https://marcopolo-envio.netlify.app"
        />
        <Project
          title="Lujetec"
          obs="Dev"
          about="Site de fabricante de produtos de automação industrial com sistema complexo de busca de produtos."
          tools={["Next.js", "React.js", "Sass", "Netlify"]}
          link="https://lujetec.com.br/"
        />
        <Project
          title="Casa Mar"
          obs="Dev"
          about="Site de produtora audiovisual, cheio de vídeos e animações."
          tools={["Next.js", "React.js", "Sass", "Netlify"]}
          link="https://casamarprodutora.com.br/"
        />
        <Project
          title="Dr Isaac"
          obs="Dev"
          about="Site de dentista, com blog e páginas customizáveis."
          tools={["Next.js", "React.js", "Sass", "Netlify"]}
          link="https://www.dentistacaxiasdosul.com.br/"
        />
        <Project
          title="Fupicat"
          obs="Design + Dev"
          about="Site pessoal de jogos para crianças e adolescentes."
          tools={["Vue.js", "Nuxt.js", "Sass", "Netlify"]}
          link="https://fupicat.com.br/"
          source="https://github.com/fupicat/fupisite2"
        />
        <Project
          title="Onepages da Marelli"
          obs="Dev"
          about="Sites customizáveis para lojas parceiras da Marelli."
          tools={["Next.js", "React.js", "Sass", "Netlify"]}
          link="https://projetomais.marelli.com.br/"
        />
        <Project
          title="Replacer"
          obs="Design + Dev"
          about="Ferramenta de edição de texto automática."
          tools={["HTML", "CSS", "JavaScript", "GitHub Pages"]}
          link="https://fupicat.github.io/replacer/"
          source="https://github.com/fupicat/replacer/"
        />
        <Project
          title="Sonnicpiadas"
          obs="Design + Dev"
          about="Gerador de piada sem sentido."
          tools={["Svelte", "Sass", "Vercel"]}
          link="https://www.sonnicpiadas.com.br/"
          source="https://github.com/fupicat/sonnicpiadas"
        />
        <Project
          title="Editor de Scratchblocks"
          obs="Design + Dev"
          about="Editor de blocos do Scratch em português, para uso com os fóruns do Scratch."
          tools={["HTML", "CSS", "JavaScript", "Replit"]}
          link="https://editorscratchblocks.fupibrazil.repl.co/"
          source="https://replit.com/@FupiBrazil/EditorScratchblocks?v=1"
        />
        <Project
          title="Stickerator"
          obs="Design + Dev"
          about="Editor de imagem minimalista. Arraste uma imagem e ele vai adicionar uma borda branca e sombra, e só."
          tools={["HTML", "CSS", "JavaScript", "GitHub Pages"]}
          link="https://fupicat.github.io/stickerator/"
          source="https://github.com/fupicat/stickerator"
        />
        <Project
          title="Youtubeflix"
          obs="Dev"
          about="Exercício da Digital Innovation One com vídeos do YouTube retirados da API."
          tools={["HTML", "CSS", "JavaScript", "GitHub Pages"]}
          link="https://fupicat.github.io/youtubeflix-dio/"
          source="https://github.com/fupicat/youtubeflix-dio"
        />
        <Project
          title="Botagram"
          obs="Dev"
          about="Exercício da Digital Innovation One com design diferente e imagens aleatórias da API da Unsplash."
          tools={["HTML", "CSS", "JavaScript", "GitHub Pages"]}
          link="https://fupicat.github.io/botagram/"
          source="https://github.com/fupicat/botagram"
        />
        <Project
          title="GabZan"
          obs="Design + Dev"
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
          about="Jogo boss rush completo com 4 bosses e história."
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
          about="É uma plataforma online de programação visual para crianças. Fui um dos tradutores principais do site para português brasileiro até o início de 2022."
          tools={["Transifex"]}
          link="https://scratch.mit.edu/"
        />
        <Project
          title="Scratch Addons"
          about="Extensão de navegador para o Scratch com mais de 40.000 usuários. Fui o único tradutor do site, interface e documentação até o início de 2022."
          tools={["Transifex"]}
          link="https://scratchaddons.com/pt-br/"
        />
        <Project
          title="TurboWarp"
          about="Versão modificada do Scratch. Fui o único tradutor do site, interface e documentação até o início de 2022."
          tools={["Transifex"]}
          link="https://turbowarp.org/"
        />
      </Category>
      <Category title="Sobre mim">
        <Project
          title="Gabriel Rauta Zanette"
          obs="18 anos · Caxias do Sul, RS"
          about="Sou um pouco obcecado por programação. A web é uma plataforma infinitamente útil e fascinante, e por isso estou sempre aprendendo e me atualizando sobre ela! Hoje, trabalho na Macaw Marketing Vivo. Além de web dev, adoro desenvolvimento de video-games, produção musical e edição de vídeo."
        />
      </Category>
      <footer>
        <div className="contato">
          <a href="https://github.com/fupicat/">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="mailto:gabzanette437@gmail.com">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/gabriel-zanette-120b1920b/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          {/* <a className="anchor" href="/Gabriel Rauta Zanette Currículo.pdf">
            Baixar currículo
          </a> */}
        </div>
      </footer>
    </div>
  );
}

export default Main;
