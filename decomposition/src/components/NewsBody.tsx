import { NewsBodyProps } from '../types/index'
import '../App.css'

export const NewsBody = ({props}: NewsBodyProps) => {
    return (
        <div className='news-body'>
            <img src={props.logoImg} width='15px' height='15px' />
            <a href={props.newsURL} className='news_url'>
                <div className='news-text'>{props.newsText}</div>
            </a>
        </div>
    );
}