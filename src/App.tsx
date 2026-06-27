import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from './types';

// Components
import Loader from './components/Loader';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookVisitModal from './components/BookVisitModal';
import MobileContactBar from './components/MobileContactBar';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import ManagedFarmland from './pages/ManagedFarmland';
import YourJourney from './pages/YourJourney';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import LegalPages from './pages/LegalPages';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [showTopHeader, setShowTopHeader] = useState(true);

  const handleDismissTopHeader = () => {
    setShowTopHeader(false);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activePage]);

  const handleBookWithProject = (projectName?: string) => {
    if (projectName) {
      setSelectedProject(projectName);
    } else {
      setSelectedProject('');
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-orange-500/30 selection:text-orange-300 antialiased">
      
      {/* 1. Preloader Startup Animation */}
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Website Structure */}
      {!isLoading && (
        <div
          id="root-website-layout"
          className="flex flex-col min-h-screen"
        >
          {/* Sticky Navigation & Announcement Bar Container */}
          <div className="sticky top-0 z-40 w-full flex flex-col">
            <AnimatePresence initial={false}>
              {showTopHeader && (
                <TopHeader
                  onClose={handleDismissTopHeader}
                  onActionClick={() => handleBookWithProject()}
                />
              )}
            </AnimatePresence>
            <Navbar
              activePage={activePage}
              setActivePage={setActivePage}
              onBookClick={() => handleBookWithProject()}
            />
          </div>

          <main id="main-content-area" className={`flex-grow pb-12 bg-black ${activePage === 'home' ? 'pt-0' : 'pt-6'}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, scale: 0.985, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.985, y: -12 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.8 }}
                className="w-full"
              >
                {activePage === 'home' && (
                  <Home setActivePage={setActivePage} onBookClick={() => handleBookWithProject()} />
                )}
                {activePage === 'about' && (
                  <AboutUs onBookClick={() => handleBookWithProject()} />
                )}
                {activePage === 'projects' && (
                  <Projects onBookClick={handleBookWithProject} />
                )}
                {activePage === 'managed' && (
                  <ManagedFarmland onBookClick={() => handleBookWithProject()} />
                )}
                {activePage === 'journey' && (
                  <YourJourney onBookClick={() => handleBookWithProject()} />
                )}
                {activePage === 'gallery' && (
                  <Gallery onBookClick={() => handleBookWithProject()} />
                )}
                {activePage === 'contact' && (
                  <Contact onBookClick={() => handleBookWithProject()} />
                )}
                {(activePage === 'terms' || activePage === 'privacy' || activePage === 'disclaimer') && (
                  <LegalPages viewType={activePage} />
                )}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Bottom Footer layout */}
          <Footer setActivePage={setActivePage} onBookClick={() => handleBookWithProject()} />

          {/* Sticky Widgets */}
          <WhatsAppButton />
          <MobileContactBar />
          
          {/* Site Visit Lead Capture Form Modal */}
          <BookVisitModal
            isOpen={isBookingOpen}
            onClose={() => {
              setIsBookingOpen(false);
              setSelectedProject('');
            }}
            preSelectedProject={selectedProject}
          />
        </div>
      )}

    </div>
  );
}

