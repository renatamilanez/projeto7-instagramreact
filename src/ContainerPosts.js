import React from 'react';

function ContainerPosts(){
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
        return (
            <div class="conteudo" onDoubleClick={() => {setIconLike('heart')}}>
            <img src={props.img} />
            </div>
        )
    }

    function Likes(props){
        return (
            <div class="curtidas">
            <img src={props.img} />
            <div class="texto">
                Curtido por <strong>{props.name}</strong> e <strong>outras {props.totalLikes} pessoas</strong>
            </div>
            </div>
        )
    }

    /*function Icone(){
        return (
                    <ion-icon name={iconLike} onClick={() => {
                        if(iconLike === 'heart'){
                            setIconLike('heart-outline')
                        } if(iconLike === 'heart-outline'){
                            setIconLike('heart')
                        }
                    }}></ion-icon>
        )
    };*/

    const [iconLike, setIconLike] = React.useState('heart-outline');

    function Actions(){
        return (
            <div class="acoes">
                <div>
                    <ion-icon name={iconLike} onClick={() => {
                        if(iconLike === 'heart'){
                            setIconLike('heart-outline')
                        } if(iconLike === 'heart-outline'){
                            setIconLike('heart')
                        }
                    }}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
        )
    }


    const templatePosts = posts.map((post) => {
        return (
            <div class="post">
                <TopPost img={post.imgUser} name={post.nameUser}/>
                <ContentPost img={post.imgPost}/>
                <div class="fundo">
                    <Actions />
                    <Likes img={post.imgLikedUser} name={post.likedUser} totalLikes={post.totalLikes}/>
                </div>
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