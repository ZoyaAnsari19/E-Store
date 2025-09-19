"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/styles/home/hero.module.css";
import Image from "next/image";

const images = [
  'https://images.unsplash.com/photo-1630512633843-043c3c6da96f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhZGdldHMlMjBnYW1lfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3Ryb25pYyUyMGdhZGdldHN8ZW58MHx8MHx8fDA%3D',

];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(
    () => {
      const interval = setInterval(
        () => {
            setCurrentSlide(
              (currentValue) => {
                  if (currentValue == images.length - 1) {
                    return 0
                  } else {
                    return currentValue + 1;
                  }
                }
            );
        }, 3000
      )

      return () => {
        clearInterval(interval);
      }

    }, []
  )

  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <Image alt={"Slider" + index} key={"Slide" + index} className={`${styles.slide} ${currentSlide == index && styles.active}`} src={image} fill />
        ))}
      </div>

    </div>
  )
}
