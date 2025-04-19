import React from "react";

const StatistiquesSection: React.FC = () => {
  return (
    <section className="my-6 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Statistiques</h3>

      {/* Résumé des statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Carte 1 : Nombre d'annonces */}
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Nombre d'Annonces</h4>
          <p className="text-2xl font-bold mt-2">15</p>
        </div>

        {/* Carte 2 : Nombre de réservations */}
        <div className="bg-green-600 text-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Réservations Confirmées</h4>
          <p className="text-2xl font-bold mt-2">30</p>
        </div>

        {/* Carte 3 : Revenus générés */}
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Revenus Totaux</h4>
          <p className="text-2xl font-bold mt-2">€12,500</p>
        </div>
      </div>

      {/* Graphiques / Tableau */}
      <div className="mt-8">
        <h4 className="text-xl font-medium mb-4">Répartition des réservations par mois</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <canvas id="reservationsChart"></canvas>
        </div>
      </div>

      {/* Graphiques supplémentaires (exemple fictif) */}
      <div className="mt-8">
        <h4 className="text-xl font-medium mb-4">Répartition des types de véhicules réservés</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <canvas id="vehicleTypesChart"></canvas>
        </div>
      </div>
    </section>
  );
};

export default StatistiquesSection;
