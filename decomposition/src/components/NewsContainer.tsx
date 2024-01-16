import { NewsConteinerProps } from '../types/index'

export const NewsContainer: React.FC<NewsConteinerProps> = ({ children }) => {
    return (
        <div className='newsContainer'>
            {children}
        </div>
    );
}