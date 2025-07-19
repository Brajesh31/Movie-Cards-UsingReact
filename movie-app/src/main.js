import React from "react";
import Card from "./card";
import Img1 from "./images/interstellar.jpg";
import Img2 from "./images/Naruto.jpg";
import Img3 from "./images/yourname.jpg";

function Main() {
    return (
        <>
            <h1 style={{ textAlign: 'center', color: '#333', padding: '10px', }} className="heading">Movie Cards</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey', padding: '10px 22px', gap: '14px', flexWrap : 'wrap' }} className="container">
                <Card rating='8.7' about='A group of explorers make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.' title='Interstellar' img={Img1} />
                <Card rating='8.9' about='Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts: the first is set in Naruto pre-teen years volumes and the second in his teens. ' title='Naruto: Shippuden' img={Img2} />
                <Card rating='8.4' about='*Your Name* is a breathtaking anime film by Makoto Shinkai that follows two teenagers, Taki and Mitsuha, who mysteriously swap bodies across time and space. As they navigate each other’s lives, a deeper connection forms, leading to a poignant tale of fate, love, and the threads that bind us.Visually stunning and emotionally resonant, the film blends fantasy and romance seamlessly.' title='Your Name' img={Img3} />
            </div>
        </>
    )
}
export default Main;