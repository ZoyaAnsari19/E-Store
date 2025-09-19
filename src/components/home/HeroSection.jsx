import React from 'react';
import Slider from './Slider';
import styles from "@/styles/home/hero.module.css";
import Container from '@/components/Container';

export default function HeroSection() {
  return (
    <div>
      <Container>
        <section className={styles.hero}>
          <div className={`${styles.textSection} text-gray-700`}>
            <h1>One stop solution <span className='text-pink-500'>E-Store</span></h1>
            <p>Discover the latest headphones, earphones, mobiles, tablets etc.</p>
            <p>Exclusive deals just for you!</p>
            <button className={styles.ctaButton}>Show Now</button>
          </div>
          <Slider />
        </section>
      </Container>
    </div>
  );
}