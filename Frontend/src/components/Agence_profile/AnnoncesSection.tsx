import React from "react";

const AnnoncesSection: React.FC = () => {
  return (
    <section className="my-6 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mes Annonces</h3>

      <table className="table-auto w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="text-left px-4 py-2">Véhicule</th>
            <th className="text-left px-4 py-2">Statut</th>
            <th className="text-left px-4 py-2">Réservations en Attente</th>
            <th className="text-left px-4 py-2">Description</th>
            <th className="text-left px-4 py-2">Date de publication</th>
            <th className="text-left px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Exemple de ligne */}
          <tr className="hover:bg-gray-50 transition">
            <td className="border-t px-4 py-3">BMW Série 3 - 2022</td>
            <td className="border-t px-4 py-3 text-green-600 font-medium">Active</td>
            <td className="border-t px-4 py-3">3</td>
            <td className="border-t px-4 py-3">Berline confortable, idéale pour les longs trajets.</td>
            <td className="border-t px-4 py-3">12/04/2025</td>
            <td className="border-t px-4 py-3 space-x-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                Modifier
              </button>
              <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-all">
                Supprimer
              </button>
            </td>
          </tr>

          {/* Autre exemple */}
          <tr className="hover:bg-gray-50 transition">
            <td className="border-t px-4 py-3">Renault Clio - 2020</td>
            <td className="border-t px-4 py-3 text-gray-500 font-medium">Inactive</td>
            <td className="border-t px-4 py-3">1</td>
            <td className="border-t px-4 py-3">Citadine économique et facile à garer.</td>
            <td className="border-t px-4 py-3">05/03/2025</td>
            <td className="border-t px-4 py-3 space-x-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
                Modifier
              </button>
              <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-all">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AnnoncesSection;
