import React from 'react';
import styles from '../Styles/Home.css';
import math from '../assets/images/math.jpg';

function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Math Magicians!</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <img
            src={math}
            alt="A student explaining calculations"
            className="rounded-md shadow-md"
          />
        </div>
        <div className="md:order-1">
          <p className={`${styles.p} text-lg leading-relaxed`}>
            Math Magicians is your go-to destination for exploring the
            fascinating world of mathematics. Whether you&apos;re a student looking
            for interactive learning resources, a teacher seeking engaging
            classroom activities, or a math enthusiast eager to delve into
            challenging problems, we&apos;ve got you covered.
          </p>
          <p className={`${styles.p} text-lg leading-relaxed mt-4`}>
            Our mission is to make math enjoyable and accessible to everyone. We
            offer a variety of tools, including a powerful calculator for your
            everyday needs and an inspiring collection of quotes from renowned
            mathematicians. Join us on this mathematical journey, where learning
            is fun, and numbers come to life!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
