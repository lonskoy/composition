import { ContainerProps } from './types';

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="container">{children}</div>;
  };