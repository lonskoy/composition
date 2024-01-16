import { CurrencyBodyProps } from '../types/index'
import '../App.css'

export const CurrencyBody = ({props}: CurrencyBodyProps) => {
    return (
        <div className='currency-body'>
            <span className='currency-name'>{props.currency}</span>
            <span className='currency-value'>{props.currencyValue}</span>
            <span className='currency-difference'>{props.currencyDifference}</span>
        </div>
    );
}