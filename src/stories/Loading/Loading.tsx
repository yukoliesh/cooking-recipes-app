import React from 'react';
import LoadingImg from "../assets/loadingImg.svg";
import './Loading.css';

export interface LoadingProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
}

export default {
  title: 'img'
}

const image = {
  src: LoadingImg,
  alt: 'Loading...'
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  backgroundColor,
  ...props
}) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div className={'storybook-loading'}>
      <div
        className={[`storybook-loading--${size}`].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
};