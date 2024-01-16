import { NewsBodyProps } from '../types/index'
import '../App.css'

export const TopNewsBody = ({props}: NewsBodyProps) => {
    return (
        <div className='top-news-body'>
            <a href={props.newsURL} className='top_news_url'>
                <div className='top_news-text'>{props.newsText}</div>
            </a>
        </div>
    );
}