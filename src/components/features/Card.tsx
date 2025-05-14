import React, { ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './card.css';

interface CardProps {
  title: string;
  des: string;
  icon: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, des, icon }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-icon">{icon}</div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{des}</p>
          <span className="card-arrow"><FaArrowRight /></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
