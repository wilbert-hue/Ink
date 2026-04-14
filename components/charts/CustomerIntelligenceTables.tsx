'use client'

import { useState } from 'react'

interface PropositionTableRow {
  id: string
  company: string
  location: string
  machineType: string
  inkType: string
  capacity: string
  growthPotential: string
  decision: string
}

const PROPOSITION_1_DATA: PropositionTableRow[] = [
  { id: '1', company: 'Eastman Kodak Company', location: 'USA', machineType: 'Flexographic', inkType: 'EB-Curable', capacity: '1,500 m/min', growthPotential: 'Very High', decision: 'Strategic' },
  { id: '2', company: 'Flint Group', location: 'Germany', machineType: 'Flexographic', inkType: 'EB-Curable', capacity: '1,200 m/min', growthPotential: 'Very High', decision: 'Strategic' },
  { id: '3', company: 'Toyo Ink SC Holdings', location: 'Japan', machineType: 'Flexographic', inkType: 'Water-Based', capacity: '900 m/min', growthPotential: 'High', decision: 'Engage' },
  { id: '4', company: 'Sun Chemical Corporation', location: 'USA', machineType: 'Flexographic', inkType: 'Solvent-Based', capacity: '1,000 m/min', growthPotential: 'High', decision: 'Engage' },
  { id: '5', company: 'Siegwerk Group', location: 'Germany', machineType: 'Flexographic', inkType: 'EB-Curable', capacity: '1,100 m/min', growthPotential: 'Very High', decision: 'Strategic' },
]

const PROPOSITION_2_DATA: PropositionTableRow[] = [
  { id: '1', company: 'Huhtamaki Oyj', location: 'Finland', machineType: 'Flexographic', inkType: 'Water-Based', capacity: '800 m/min', growthPotential: 'Very High', decision: 'Engage' },
  { id: '2', company: 'Berry Global Group', location: 'USA', machineType: 'Flexographic', inkType: 'EB-Curable', capacity: '1,100 m/min', growthPotential: 'Very High', decision: 'Strategic' },
  { id: '3', company: 'Constantia Flexibles', location: 'Austria', machineType: 'Flexographic', inkType: 'Solvent-Based', capacity: '900 m/min', growthPotential: 'High', decision: 'Engage' },
  { id: '4', company: 'Uflex Limited', location: 'India', machineType: 'Flexographic', inkType: 'Water-Based', capacity: '700 m/min', growthPotential: 'Very High', decision: 'Strategic' },
  { id: '5', company: 'Sappi Fine Papers', location: 'South Africa', machineType: 'Flexographic', inkType: 'EB-Curable', capacity: '850 m/min', growthPotential: 'High', decision: 'Engage' },
]

const PROPOSITION_3_DATA: PropositionTableRow[] = [
  { id: '1', company: 'Mayr-Melnhof Packaging', location: 'Austria', machineType: 'Flexographic', inkType: 'EB-Curable', capacity: '1,300 m/min', growthPotential: 'Very High', decision: 'Strategic' },
  { id: '2', company: 'Stanpac Inc', location: 'Canada', machineType: 'Flexographic', inkType: 'Hybrid', capacity: '1,000 m/min', growthPotential: 'High', decision: 'Engage' },
  { id: '3', company: 'Coverprint AG', location: 'Switzerland', machineType: 'Flexographic', inkType: 'EB-Curable', capacity: '1,150 m/min', growthPotential: 'Very High', decision: 'Strategic' },
  { id: '4', company: 'Pollex Printing', location: 'UK', machineType: 'Flexographic', inkType: 'Water-Based', capacity: '950 m/min', growthPotential: 'High', decision: 'Engage' },
  { id: '5', company: 'Graficryl International', location: 'Mexico', machineType: 'Flexographic', inkType: 'Solvent-Based', capacity: '850 m/min', growthPotential: 'High', decision: 'Engage' },
]

interface PropositionProps {
  title: string
  description: string
  data: PropositionTableRow[]
}

function PropositionTable({ title, description, data }: PropositionProps) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <th className="px-4 py-3 text-left font-semibold">Company</th>
              <th className="px-4 py-3 text-left font-semibold">Location</th>
              <th className="px-4 py-3 text-left font-semibold">Machine Type</th>
              <th className="px-4 py-3 text-left font-semibold">Ink Type</th>
              <th className="px-4 py-3 text-left font-semibold">Speed (m/min)</th>
              <th className="px-4 py-3 text-left font-semibold">Growth Potential</th>
              <th className="px-4 py-3 text-left font-semibold">Decision</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr 
                key={row.id}
                className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
              >
                <td className="px-4 py-3 text-gray-900 font-medium">{row.company}</td>
                <td className="px-4 py-3 text-gray-700">{row.location}</td>
                <td className="px-4 py-3 text-gray-700">{row.machineType}</td>
                <td className="px-4 py-3 text-gray-700">{row.inkType}</td>
                <td className="px-4 py-3 text-gray-700 font-semibold">{row.capacity}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    row.growthPotential === 'Very High' ? 'bg-purple-100 text-purple-800' :
                    row.growthPotential === 'High' ? 'bg-blue-100 text-blue-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {row.growthPotential}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    row.decision === 'Strategic' ? 'bg-indigo-100 text-indigo-800' :
                    row.decision === 'Engage' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {row.decision}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-3 text-xs text-gray-500">
        Total Records: {data.length}
      </div>
    </div>
  )
}

export function CustomerIntelligenceTables() {
  const [activeProposition, setActiveProposition] = useState(1)

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Intelligence Database</h2>
        
        {/* Proposition Tabs */}
        <div className="flex gap-3 mb-6">
          {[1, 2, 3].map((prop) => (
            <button
              key={prop}
              onClick={() => setActiveProposition(prop)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeProposition === prop
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Proposition {prop}
            </button>
          ))}
        </div>
      </div>

      {/* Proposition 1: Market Entry Strategy */}
      {activeProposition === 1 && (
        <PropositionTable
          title="Proposition 1: Premium Ink Suppliers"
          description="Leading global ink manufacturers with high-speed flexographic capabilities (900-1,500 m/min). Strategic focus on top-tier EB-curable ink suppliers."
          data={PROPOSITION_1_DATA}
        />
      )}

      {/* Proposition 2: Sustainability Leaders */}
      {activeProposition === 2 && (
        <PropositionTable
          title="Proposition 2: Sustainable Packaging Converters"
          description="Fast-growing converters adopting water-based and eco-friendly inks. High growth potential with sustainability focus in food, beverage, and flexible packaging."
          data={PROPOSITION_2_DATA}
        />
      )}

      {/* Proposition 3: Strategic Partnerships */}
      {activeProposition === 3 && (
        <PropositionTable
          title="Proposition 3: High-Speed Technology Leaders"
          description="Advanced flexographic printers with 800+ m/min speeds using hybrid and EB-curable inks. Partners for advanced technology integration and co-development."
          data={PROPOSITION_3_DATA}
        />
      )}
    </div>
  )
}
