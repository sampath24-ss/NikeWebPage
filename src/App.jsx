import Nav from './components/Nav';
import { CustomerReviews, Footer, Hero, PopularProduct, Services, SpecialOffer, Subscribe, SuperQuality } from './sections/index'
const App = () => (
<main className="relative">
  <Nav></Nav>
  <section className="xl:padding-1 wide:padding-r padding-b"><Hero></Hero></section>
  <section className="padding"><PopularProduct></PopularProduct></section>
  <section className="padding"><SuperQuality></SuperQuality></section>
  <section className="padding"><Services></Services></section>
  <section className="padding"><SpecialOffer></SpecialOffer></section>
  <section className="bg-pale-blue padding"><CustomerReviews></CustomerReviews></section>
  <section className="padding-x sm:py-32 py-16 w-full"><Subscribe></Subscribe></section>
  <section className="bg-black padding-x padding-t pb-8"><Footer></Footer></section>
  
  </main>
 

);

export default App;