import { CurrencyConteinerProps } from '../types/index'

export const CurrencyContainer: React.FC<CurrencyConteinerProps> = ({ children }) => {
    return (
        <div className='CurrencyConteiner'>
            {children}
        </div>
    );
}