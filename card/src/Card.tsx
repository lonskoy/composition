import { CardProps } from './types';

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        {children}
      </div>
    );
  };