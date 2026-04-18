import { Card } from "./components/Card"
import Smith from './assets/image-colton.jpg';
import Irene from './assets/image-irene.jpg';
import Anne from './assets/image-anne.jpg';
import "./index.css"
import { StarCard } from "./components/StarCard";

export function App() {
  return (
    <div className="container mx-auto lg:my-16 lg:grid lg:grid-cols-1 lg:gap-8 lg:grid-areas-layout lg:items-start lg:rounded-lg lg:shadow-lg">
      <div className="lg:flex">
        <header className="flex flex-col items-center justify-center text-center gap-6 px-4 lg:area-header lg:w-[50%] lg:flex-start lg:items-start lg:text-left">

          <h1 className="text-4xl font-bold text-purple-950 p-4 leading-[0.8] lg:w-[85%] ">10,000+ of our users love our products.</h1>

          <p className="text-dark-grayish-magenta font-light leading-relaxed text-[var(--DarkGrayishMagenta)] font-medium">
            We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.</p>
        </header>
        <div className="lg:w-[800px] lg:area-stars lg:flex lg:flex-col lg:justify-end lg:gap-2 ">
          <div>
            <StarCard message="Rated 5 Stars in Reviews" />
          </div>
          <div className="lg:ml-8 lg:mr-[-2rem]">
            <StarCard message="Rated 5 Stars in Report Guru" />
          </div>
          <div className="lg:ml-16 lg:mr-[-8rem]">
            <StarCard message="Rated 5 Stars in BestTech" />
          </div>
        </div>
      </div>
      <div className="lg:area-cards lg:flex lg:gap-4">
        <div>
          <Card img={Smith} name="Colton Smith" position="Verified Buyer" message="We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"/>
        </div>
        <div className="lg:mt-4">
          <Card img={Irene} name="Irene Roberts" position="Verified Buyer" message="Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."/>
        </div>
        <div className="lg:mt-8">
          <Card img={Anne} name="Anne Wallace" position="Verified Buyer" message="Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!" />
        </div>
      </div>
    </div>
  )
}