import React from 'react';
import styles from './CardProduto.module.css';
import { Link } from 'react-router-dom';

const CardProduto = ({ produto, posicao  = false }) => {

  const getClasseNome = (name) => {
    const len = name.length;
    if (len > 24) return `${styles.nomeProduto} ${styles.nomeProdutoReduzido5}`;
    if (len > 23) return `${styles.nomeProduto} ${styles.nomeProdutoReduzido4}`;
    if (len > 22) return `${styles.nomeProduto} ${styles.nomeProdutoReduzido3}`;
    if (len > 21) return `${styles.nomeProduto} ${styles.nomeProdutoReduzido2}`;
    if (len > 20) return `${styles.nomeProduto} ${styles.nomeProdutoReduzido1}`;
    return styles.nomeProduto;
  };

  return (
    <div className={`${styles.cardContainer}`}>
      {false && posicao && <div>{posicao}</div>}
      
      <div className={styles.cardContent}>
        <img src={produto.image} alt={produto.name} className={styles.imagemProduto} />
        
        <div className={styles.infoProduto}>
          <h3 className={getClasseNome(produto.name)}>{produto.name}</h3>
          <p className={styles.descricaoProduto}>{produto.description}</p>
          
          <div className={styles.avaliacao}>
            <div className={styles.estrelas}>
            {[...Array(5)].map((_, i) => {
  const fullStars = Math.floor(produto.rating);
  const hasHalfStar = produto.rating % 1 >= 0.5;

  let src = '/EstrelaVazia.svg'; // padrão: estrela vazia

  if (i < fullStars) {
    src = '/EstrelaCheia.svg';
  } else if (i === fullStars && hasHalfStar) {
    src = '/EstrelaMeioCheia.svg';
  }

  return (
    <img 
      key={i}
      src={src}
      alt="Estrela de avaliação"
      className={styles.estrela}
    />
  );
})}

            </div>
            <span className={styles.nota}>{produto.rating}</span>
          </div>
          
          <Link to={`/product/${produto.id}`} className={styles.linkReviews}>
            Ver reviews →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;