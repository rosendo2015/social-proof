import { Card } from "./components/Card"
import "./index.css"

export function App() {
  return (
    <div className="container">
      <header className="flex flex-col items-center justify-center text-center gap-6 px-4">

        <h1 className=" text-4xl font-medium text-purple-950">10,000+ of our users love our products.</h1>

        <p className="text-dark-grayish-magenta font-light leading-relaxed">
          We only provide great products combined with excellent customer service.
          See what our satisfied customers are saying about our services.</p>
      </header>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

/*
color: var(--DarkGrayishMagenta);
      font-size: 1rem;
      font-weight: 500;
      margin-top: 1.5rem;
      line-height: 1.2rem;
*/
