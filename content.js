const generateHTML = (pageName) =>{
    return `   <section>
    <div class='c'><div class='_404'>404</div>

    <div class='_1'>GET BACK TO WORK!</div>
    <div class='_2'>STUDYING > ${pageName}</div>
    </div>
</section>
    `;
}

const generateStyling = ()=>{
    return `<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }
    
    section{
        width:100%;
        height:100vh;
        color:#fff;
        background: linear-gradient(45deg,#EE7752,#E73C7E,#23A6D5,#23D5AB);
        background-size: 400% 400%;
        position: relative;
        animation: change 10s ease-in-out infinite;
       
        font-family: 'Montserrat', sans-serif;
        display: flex;
      
        align-items: center;
        justify-content: center;
    }
    
    @keyframes change{
        0%{
            background-position:0 50%;
        }
        50%{
            background-position:100% 50%;
        }
        100%{
            background-position:0 50%;
        }
    }
    
    .c{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
    }
    
    ._404{
        font-size: 6rem;
        
    }
    
    .img{
        width:200px;
        height:200px;
        margin:20px;
    
    }
    
    .img img{
        width:100%;
        height: 100%;
        border-radius: 20px;
        border: #fff 2px solid;
    }
    
    ._1{
        font-size: 4rem;
        text-align: center;
    }
    
    ._2{
        font-size: 2rem;
        margin:10px;
    }
    </style>`
}

switch(window.location.hostname){
    case "www.youtube.com":
        document.head.innerHTML = generateStyling();
       document.body.innerHTML = generateHTML("YOUTUBE");
       break;
    case "www.facebook.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("FACEBOOK");
       break;
    case "www.instagram.com":
        document.head.innerHTML = generateStyling();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;
}