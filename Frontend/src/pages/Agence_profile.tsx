"use client";

import { useEffect, useState } from "react";
import Navbar from '../components/Agence_profile/Navbar';
import ProfileSection from '../components/Agence_profile/ProfileSection';
import AnnoncesSection from '../components/Agence_profile/AnnoncesSection';
import ReservationsSection from '../components/Agence_profile/ReservationsSection';
import StatistiquesSection from '../components/Agence_profile/StatistiquesSection';

export default function AgenceProfile() {
  const [activeSection, setActiveSection] = useState<string>("profile");
  const [agencyData, setAgencyData] = useState<any>(null); // agencyData est initialisé à null

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log("User from localStorage:", user);
  
    if (user) {
      const parsed = JSON.parse(user);
      console.log("Parsed user:", parsed);
  
      if (parsed?.type === "agence" && parsed?.id_agence) {
        fetch(`http://localhost:5000/api/agences/profile/${parsed.id_agence}`)
          .then((res) => {
            console.log("Raw response:", res);
            return res.json();
          })
          .then((data) => {
            console.log("Fetched agency data:", data);
            setAgencyData(data);
          })
          .catch((err) => {
            console.error("Erreur lors de la récupération de l'agence :", err);
          });
      }
    }
  }, []);
  
  

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  if (!agencyData) {
    return <div>Chargement...</div>; // Affiche "Chargement..." tant que les données ne sont pas disponibles
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        agencyName={agencyData.name} 
        handleSectionClick={handleSectionClick} 
      />

      <div className="pt-32 px-6">
        {activeSection === "profile" && <ProfileSection agency={agencyData} />}
        {activeSection === "annonces" && <AnnoncesSection />}
        {activeSection === "reservations" && <ReservationsSection />}
        {activeSection === "statistiques" && <StatistiquesSection />}
      </div>
    </div>
  );
}
