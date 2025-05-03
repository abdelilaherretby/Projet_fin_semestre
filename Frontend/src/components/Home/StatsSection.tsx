import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaCar, FaCalendarAlt, FaUsers } from "react-icons/fa";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, suffix, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="flex flex-col items-center text-white px-4">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold">
        {inView ? <CountUp end={value} duration={2} suffix={suffix || ""} /> : "0"}
      </div>
      <p className="uppercase text-sm mt-1">{label}</p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <div className="bg-cover bg-center bg-black bg-opacity-50 py-12"
         style={{ backgroundImage: "url('/background.jpg')" }}> {/* Remplace par l'image réelle si tu veux */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <StatItem icon={<FaCar />} value={500} label="Véhicules" prefix="+" />
        <StatItem icon={<FaCalendarAlt />} value={12} suffix=" mois" label="Moyenne d’âge du parc" />
        <StatItem icon={<FaUsers />} value={300} label="Clients Business" prefix="+" />
        <StatItem icon={<FaCar />} value={10000} label="Livraisons par an" prefix="+" />
      </div>
    </div>
  );
}
