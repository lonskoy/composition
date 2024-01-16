import './App.css'
import { TopNewsContainer } from './components/TopNewsContainer'
import { NewsContainer } from './components/NewsContainer'
import { CurrencyContainer } from './components/CurrencyContainer'
import { NewsBody } from './components/NewsBody'
import { TopNewsBody } from './components/TopNewsBody'
import { CurrencyBody } from './components/CurrencyBody'
import { data_news } from './data/data'
import { data_topNews } from './data/data'
import { data_currency } from './data/data'

function App() {
  

  return (
    <>

    <div className='top_news'>
      <TopNewsContainer>
      {data_topNews.map(elem => {
          return(
            <TopNewsBody props={elem} />
          );
        })}
        <div className='date-news'>31 июля, среда 02 32 </div>
      </TopNewsContainer>
    </div>

    <NewsContainer>
        {data_news.map(elem => {
          return(
            <NewsBody props={elem} />
          );
        })}
    </NewsContainer>

    <CurrencyContainer>
    {data_currency.map(elem => {
          return(
            <CurrencyBody props={elem} />
          );
        })}
    </CurrencyContainer>

    </>
  )
}

export default App
