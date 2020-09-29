import React from 'react';
import './nav.ts';
import Logo from "../assets/logo.svg";
import { Button } from '../Button';

export interface NavProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  
}

export default {
  title: 'img'
}

const image = {
  src: Logo,
  alt: 'Easy Cooking logo'
}

export const Nav: React.FC<NavProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <nav>
    <div>
      <img src={image.src} alt={image.alt} />
    </div>
    <div>
      {user ? (
        <Button size="small" onClick={onLogout} label="Log out" />
      ) : (
        <>
          <Button size="small" onClick={onLogin} label="Log in" />
          <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
        </>
      )}
    </div>
  </nav>
);