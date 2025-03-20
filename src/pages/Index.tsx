
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Navigation from '@/components/Layout/Navigation';
import MapView from '@/components/Map/MapView';
import EnergyMetricsOverview from '@/components/EnergyMetrics/EnergyMetricsOverview';
import DataSubmissionForm from '@/components/DataSubmission/DataSubmissionForm';
import EducationalGuide from '@/components/DataSubmission/EducationalGuide';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <div className="pt-16 flex h-[calc(100vh-4rem)]">
        <Navigation 
          isMenuOpen={isMenuOpen} 
          activeTab={activeTab} 
          onChangeTab={handleChangeTab} 
        />
        
        <main className={`flex-grow overflow-hidden transition-all duration-300 md:pl-64 ${(isMobile && isMenuOpen) ? 'opacity-30' : 'opacity-100'}`}>
          <div className="relative h-full p-4">
            {activeTab === 'map' && (
              <div className="animate-blur-in absolute inset-0 p-4" style={{ height: "calc(100vh - 5rem)" }}>
                <MapView />
              </div>
            )}
            
            {activeTab === 'metrics' && (
              <div className="animate-scale-in absolute inset-0 p-4">
                <EnergyMetricsOverview />
              </div>
            )}
            
            {activeTab === 'data' && (
              <div className="animate-slide-up absolute inset-0 p-4">
                <DataSubmissionForm />
              </div>
            )}
            
            {activeTab === 'guide' && (
              <div className="animate-slide-down absolute inset-0 p-4">
                <EducationalGuide />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
