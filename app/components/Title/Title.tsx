'use client';
import React from 'react';
import useResize from '@/app/hooks/useResize';
import styles from './title.module.css';

interface IProps {
  marginTop: number;
  marginTopMobile?: number;
  children: React.ReactNode;
}

const Title = ({ marginTop, marginTopMobile, children }: IProps) => {
  const { width } = useResize();
  return (
    <section className="container">
      <p
        className={styles.text}
        style={{ marginTop: width > 768 ? marginTop : marginTopMobile }}
      >
        {children}
      </p>
    </section>
  );
};

export default Title;
