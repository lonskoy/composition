import { NewsConteinerProps } from '../types/index'

export const TopNewsContainer: React.FC<NewsConteinerProps> = ({ children }) => {
    return (
        <div className='topNewsContainer'>
            {children}
        </div>
    );
}