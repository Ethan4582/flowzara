import Home from '../src/components/Landingpage/Home';
import Footer from '../src/components/Landingpage/footer';
import FeaturesPage from '../src/components/Landingpage/features';
import AboutPage from '../src/components/Landingpage/about';
import PricingPage from '@/src/components/Landingpage/pricing';


export default function LandingPage() {
  return (
    <div >
      <Home />
        <FeaturesPage/>
         <AboutPage/>
         <PricingPage/>
         <Footer/>
    
    </div>
  );
}