import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import CardProduto from '../../Components/CardProduto';

const Home = () => {

  // Dados dos produtos do pódio (simulados)
  const topProducts = [
    {
      id: 1,
      name: "Produto Premium",
      description: "O melhor produto do mercado com tecnologia avançada",
      rating: 4.9,
      reviewsCount: 1245,
      image: "/Produto1.svg" 
    },
    {
      id: 2,
      name: "Produto Intermediário",
      description: "Excelente custo-benefício para o dia a dia",
      rating: 4.5,
      reviewsCount: 892,
      image: "/Produto2.svg"
    },
    {
      id: 3,
      name: "Produto Básico",
      description: "Solução simples e eficiente para necessidades básicas",
      rating: 4.2,
      reviewsCount: 567,
      image: "/Produto3.svg"
    }
  ]; 

  return (
    <div className={styles.homeContainer}>
      {/* Cabeçalho com posicionamento absoluto */}
      <div className={styles.header}>
        <div className={styles.CabecalhoBackground}></div>
        <img src='/Drone.svg' alt='drone' className={styles.Drone} />
        <img src='/Review.svg' alt='review' className={styles.Review} />
      </div>
      {/* Seção de Introdução */}
      <div className={styles.mainContent}>
      <section className={styles.introSection}>
        <div className={styles.introText}>
          <h1 className={styles.mainTitle}>Revolucionando sua compra agropecuária</h1>
          <p className={styles.introParagraph}>
          Já pensou poder ver todos os pontos positivos, negativos e o custo-benefício dos <span className={styles.introPargraphSpan}>produtos agropecuários</span> de forma <span className={styles.introPargraphSpan}>100% sincera</span>? 
          Então, já pode parar de pensar e agir. A <span className={styles.introPargraphSpan}>Innova Agrotech</span> chegou para <span className={styles.introPargraphSpan}>revolucionar sua pré-compra</span>, facilitando sua escolha e garantindo que 
          você não tenha surpresas depois. 
          </p>
          <Link to="/Reviews" className={styles.reviewLink}>Veja as reviews →</Link>
        </div>
        <div className={styles.introImage}>
          <img src='/Imagem1Home.svg' alt="Homem idoso usando o celular" className={styles.elderlyManImage} />
        </div>
      </section>
      {/* Seção do Pódio */}
           {/* Seção do Pódio */}
           <section className={styles.podiumSection}>
        <h2 className={styles.podiumTitle}>Melhores Avaliados</h2>
        <div className={styles.starsDivider}>
          <span className={styles.smallStar}>★</span>
          <span className={styles.mediumStar}>★</span>
          <span className={styles.smallStar}>★</span>
        </div>
        <div className={styles.podium}>
          <div className={`${styles.podiumItem} ${styles.secondPlace}`}>
          <div className={styles.cardWrapper}>
              <img 
                src="/PodioPosicao2.svg" 
                alt="Borda decorativa" 
                className={styles.cardBorderImage}
              />
              <CardProduto produto={topProducts[1]} posicao={2} />
            </div>
          </div>
          <div className={`${styles.podiumItem} ${styles.firstPlace}`}>
          <div className={styles.cardWrapper}>
              <img 
                src="/PodioPosicao1.svg" 
                alt="Borda decorativa" 
                className={styles.cardBorderImage}
              />
             <CardProduto produto={topProducts[0]} posicao={1}  />
            </div>
          </div>
          <div className={`${styles.podiumItem} ${styles.thirdPlace}`}>
          <div className={styles.cardWrapper}>
              <img 
                src="/PodioPosicao3.svg" 
                alt="Borda decorativa" 
                className={styles.cardBorderImage}
              />
            <CardProduto produto={topProducts[2]} posicao={3} />
            </div>
          </div>
        </div>
      </section>

      {/* Seção Final */}
      <section className={styles.finalSection}>
        <div className={styles.finalImage}>
        <img src='/TratorHome.svg' alt="Trator" className={styles.tractorImage} />
        </div>
        <div className={styles.finalTexture}>
        <img src='/Textura1Home.svg' alt="Textura" className={styles.textureImage} />
        </div>
        <div className={styles.finalText}>
          <h2 className={styles.finalTitle}>Confira, Comente e Compare!</h2>
          <p className={styles.finalParagraph}>
          Todos os aparatos que você precisa para o seu agro reunidos em um só lugar. <span className={styles.finalParagraphSpan}>Confira</span> o que estão falando, <span className={styles.finalParagraphSpan}>comente</span> sua opinião e compare criticas !
          </p>
          <Link to="/Reviews" className={styles.finalLink}>Veja as reviews →</Link>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;

