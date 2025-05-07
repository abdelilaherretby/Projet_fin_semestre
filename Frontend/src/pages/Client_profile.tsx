"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Client_profile/Navbar";
import ProfileSection from "../components/Client_profile/ProfileSection";
import ReservationsSection from "../components/Client_profile/ReservationsSection";
import ReservationHistorySection from "../components/Client_profile/ReservationHistorySection";

interface Client {
  id: number;
  name: string;
  email: string;
  contact: string;
  permis: string;
  age: number;
}

export default function ClientProfile() {
  const [activeSection, setActiveSection] = useState<string>("profile");
  const [clientData, setClientData] = useState<Client | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      if (parsed?.type === "client") {
        setClientData({
          id : parsed.id,
          name: parsed.nom || "Nom inconnu",
          email: parsed.email || "contact@exemple.com",
          contact: parsed.contact || "+33 000 000 000",
          permis: parsed.permis || "Permis inconnu",
          age: parsed.age || 0,
        });
      }
    }
  }, []);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  if (!clientData) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar clientName={clientData.name} handleSectionClick={handleSectionClick} />

      <div className="pt-32 px-6">
        {activeSection === "profile" && <ProfileSection client={clientData} />}
        {activeSection === "reservations" && <ReservationsSection />}
        {activeSection === "reservationHistory" && <ReservationHistorySection />}
      </div>
    </div>
  );
}
