function Sidebar(){
  const usuariosSugeridos = [
      {
      img: 'assets/img/bad.vibes.memes.svg',
      name: 'bad.vibes.memes',
      text: 'Segue você'
      },
      {
        img: 'assets/img/chibirdart.svg',
        name: 'razoesparaacreditar',
        text: 'Novo no Instagram'
      },
      {
        img: 'assets/img/adorable_animals.svg',
        name: 'adorable_animals',
        text: 'Segue você'
      },
      {
        img: 'assets/img/smallcutecats.svg',
        name: 'smallcutecats',
        text: 'Segue você'
      },
  ]

  const sugestoes = usuariosSugeridos.map((sugestao) => {
    return (
      <div class="sugestao">
      <div class="usuario">
        <img src={sugestao.img} />
        <div class="texto">
          <div class="nome">{sugestao.name}</div>
          <div class="razao">{sugestao.text}</div>
      </div>
    </div>
    </div>
    )
  });

  function MainUser(props){
    return (
      <div class="usuario">
      <img src={props.img} />
      <div class="texto">
        <strong>{props.user}</strong>
        {props.name}
      </div>
    </div>
    )
  }

  function Bottom(){
    return(
      <div>
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )

  }

  function Sugestoes(){
    return (
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestoes}

        <div class="seguir">Seguir</div>
      </div>
    )
  }
  
  return (
    <div class="sidebar">
      <MainUser img="assets/img/catanacomics.svg" user="catanacomics" name="Catana"/>
      <Sugestoes />
      <Bottom />
    </div>
  )
}

export default Sidebar;