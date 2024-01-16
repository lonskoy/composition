import './App.css'
import { Container } from './Container'
import { Card } from './Card'
import { BodyCard } from './BodyCard'

function App() {

  const data = {
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    textBtn: 'Go somewhere'
  }

  return (
    <Container>
      <Card>
        <img src="..." className="card-img-top" alt="..." />
        <BodyCard props={data} />
      </Card>
      <Card>
        <BodyCard props={data} />
      </Card>
    </Container>
  )
}

export default App
