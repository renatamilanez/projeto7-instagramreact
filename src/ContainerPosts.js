import React from 'react';

const posts = [
    {
       imgUser: 'assets/img/meowed.svg',
       nameUser: 'meowed',
       imgPost: 'assets/img/gato-telefone.svg',
       likedUser: 'respondeai',
       imgLikedUser: 'assets/img/respondeai.svg',
       totalLikes: '101.523'
    },
    {
        imgUser: 'assets/img/barked.svg',
        nameUser: 'barked',
        imgPost: 'assets/img/dog.svg',
        likedUser: 'adorable_animals',
        imgLikedUser: 'assets/img/adorable_animals.svg',
        totalLikes: '99.159'
     },
];

function TopPost(props){
    return (
        <div class="topo">
        <div class="usuario">
        <img src={props.img} />
        {props.name}
        </div>
        <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>
    )
}

function ContentPost(props){
    const [iconLike, setIconLike] = React.useState('heart-outline');

    function likedPost(){
        if(iconLike === 'heart'){
            setIconLike('heart-outline')
        } if(iconLike === 'heart-outline'){
            setIconLike('heart')
        }
    }
    
    return (
        <div>
            <div class="conteudo">
                <img src={props.img1} onDoubleClick={() => {likedPost()}}/>
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={iconLike} onClick={() => {likedPost()}}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.img2} />
                    <div class="texto">
                        Curtido por <strong>{props.name}</strong> e <strong>outras {props.totalLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContainerPosts(){
    const templatePosts = posts.map((post) => {
        return (
            <div class="post">
                <TopPost img={post.imgUser} name={post.nameUser}/>
                <ContentPost img1={post.imgPost} img2={post.imgLikedUser} name={post.likedUser} totalLikes={post.totalLikes}/>
            </div>
        )
      });

    return (
        <div class="posts">
            {templatePosts}
        </div>
    )
}

export default ContainerPosts;