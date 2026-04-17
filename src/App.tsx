import { Card } from "./components/Card"
import Smith from './assets/image-colton.jpg';
import Irene from './assets/image-irene.jpg';
import Anne from './assets/image-anne.jpg';
import "./index.css"
import { StarCard } from "./components/StarCard";

export function App() {
  return (
    <div className="container">
      <header className="flex flex-col items-center justify-center text-center gap-6 px-4">

        <h1 className="text-4xl font-bold text-purple-950 p-4 leading-[0.8]">10,000+ of our users love our products.</h1>

        <p className="text-dark-grayish-magenta font-light leading-relaxed text-[var(--DarkGrayishMagenta)] font-medium">
          We only provide great products combined with excellent customer service.
          See what our satisfied customers are saying about our services.</p>
      </header>
      <div className="my-8">
        <StarCard message="Rated 5 Stars in Reviews" />
        <StarCard message="Rated 5 Stars in Report Guru" />
        <StarCard message="Rated 5 Stars in BestTech" />

      </div>
      <Card img={Smith} name="Colton Smith" position="Verified Buyer" message="We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"/>
      <Card img={Irene} name="Irene Roberts" position="Verified Buyer" message="Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."/>
      <Card img={Anne} name="Anne Wallace" position="Verified Buyer" message="Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!" />
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
