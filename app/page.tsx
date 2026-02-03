import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gameplay } from './components/Gameplay';
import { Modes } from './components/Modes';
import { Shop } from './components/Shop';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import { Media } from './components/Media';
import { Roadmap } from './components/Roadmap';
import { Changelog } from './components/Changelog';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gameplay />
        <Modes />
        <Shop />
        <Media />
        <Gallery />
        <Roadmap />
        <Changelog />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
