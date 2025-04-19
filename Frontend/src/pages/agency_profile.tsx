"use client";

import { useState } from "react";
/*import { IoMdMenu } from "react-icons/io";
import { FaCarAlt } from "react-icons/fa";*/
import Navbar from '../components/Agence_profile/Navbar';
import ProfileSection from '../components/Agence_profile/ProfileSection';
import AnnoncesSection from '../components/Agence_profile/AnnoncesSection';
import ReservationsSection from '../components/Agence_profile/ReservationsSection';
import StatistiquesSection from '../components/Agence_profile/StatistiquesSection';

export default function AgencyProfile() {
  const [activeSection, setActiveSection] = useState<string>("profile");
  const [agencyName] = useState("Agence XYZ");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar 
        agencyName={agencyName} 
        handleSectionClick={handleSectionClick} 
      />

      {/* Main Content */}
      <div className="pt-24 px-6">
        {activeSection === "profile" && <ProfileSection />}
        {activeSection === "annonces" && <AnnoncesSection />}
        {activeSection === "reservations" && <ReservationsSection />}
        {activeSection === "statistiques" && <StatistiquesSection />}
      </div>
    </div>
  );
}
