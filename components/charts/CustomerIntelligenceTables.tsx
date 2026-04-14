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
  { id: '1', company: 'Flexo Solutions Ltd', location: 'North America', machineType: 'EB-Curable', inkType: 'Water-Based', capacity: 'High', growthPotential: 'High', decision: 'Engage' },
  { id: '2', company: 'Printing Innovations', location: 'Europe', machineType: 'Hybrid', inkType: 'Solvent-Based', capacity: 'Medium', growthPotential: 'Medium', decision: 'Contact' },
  { id: '3', company: 'Global Print Works', location: 'Asia Pacific', machineType: 'UV-Curable', inkType: 'EB-Curable', capacity: 'High', growthPotential: 'High', decision: 'Engage' },
  { id: '4', company: 'Regional Packaging Co', location: 'Latin America', machineType: 'Conventional', inkType: 'Water-Based', capacity: 'Low', growthPotential: 'Medium', decision: 'Monitor' },
  { id: '5', company: 'Advanced Print Tech', location: 'Middle East', machineType: 'EB-Curable', inkType: 'Hybrid', capacity: 'High', growthPotential: 'High', decision: 'Engage' },
]

const PROPOSITION_2_DATA: PropositionTableRow[] = [
  { id: '1', company: 'Environmental Prints', location: 'Europe', machineType: 'Water-Based', inkType: 'Eco-Friendly', capacity: 'Medium', growthPotential: 'Very High', decision: 'Priority' },
  { id: '2', company: 'Sustainable Packaging', location: 'North America', machineType: 'EB-Curable', inkType: 'Water-Based', capacity: 'High', growthPotential: 'Very High', decision: 'Priority' },
  { id: '3', company: 'Green Solutions Inc', location: 'Asia Pacific', machineType: 'Hybrid', inkType: 'Water-Based', capacity: 'Medium', growthPotential: 'High', decision: 'Engage' },
  { id: '4', company: 'Quality Print Systems', location: 'Europe', machineType: 'EB-Curable', inkType: 'Hybrid', capacity: 'High', growthPotential: 'High', decision: 'Engage' },
  { id: '5', company: 'Tech Packaging Ltd', location: 'North America', machineType: 'Hybrid', inkType: 'Solvent-Based', capacity: 'Medium', growthPotential: 'Medium', decision: 'Contact' },
]

const PROPOSITION_3_DATA: PropositionTableRow[] = [
  { id: '1', company: 'Digital Print Experts', location: 'North America', machineType: 'EB-Curable', inkType: 'EB-Curable', capacity: 'High', growthPotential: 'Very High', decision: 'Strategic Partner' },
  { id: '2', company: 'Innovation Printing', location: 'Europe', machineType: 'Hybrid', inkType: 'Hybrid', capacity: 'High', growthPotential: 'Very High', decision: 'Strategic Partner' },
  { id: '3', company: 'Future Print Solutions', location: 'Asia Pacific', machineType: 'EB-Curable', inkType: 'Water-Based', capacity: 'High', growthPotential: 'Very High', decision: 'Strategic Partner' },
  { id: '4', company: 'Premium Packaging', location: 'Europe', machineType: 'Water-Based', inkType: 'EB-Curable', capacity: 'Medium', growthPotential: 'High', decision: 'Engage' },
  { id: '5', company: 'Performance Prints', location: 'North America', machineType: 'Hybrid', inkType: 'Solvent-Based', capacity: 'High', growthPotential: 'High', decision: 'Engage' },
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
              <th className="px-4 py-3 text-left font-semibold">Capacity</th>
              <th className="px-4 py-3 text-left font-semibold">Growth Potential</th>
              <th className="px-4 py-3 text-left font-semibold">Action</th>
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
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    row.capacity === 'High' ? 'bg-green-100 text-green-800' : 
                    row.capacity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {row.capacity}
                  </span>
                </td>
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
                    row.decision === 'Strategic Partner' ? 'bg-indigo-100 text-indigo-800' :
                    row.decision === 'Priority' ? 'bg-red-100 text-red-800' :
                    row.decision === 'Engage' ? 'bg-green-100 text-green-800' :
                    row.decision === 'Contact' ? 'bg-orange-100 text-orange-800' :
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
          title="Proposition 1: Market Entry Strategy"
          description="Focus on high-capacity manufacturers with strong growth potential. Primary targets for initial market penetration and customer acquisition."
          data={PROPOSITION_1_DATA}
        />
      )}

      {/* Proposition 2: Sustainability Leaders */}
      {activeProposition === 2 && (
        <PropositionTable
          title="Proposition 2: Sustainability Leaders"
          description="Target environmentally-conscious manufacturers using water-based and eco-friendly inks. High growth potential in sustainable printing segment."
          data={PROPOSITION_2_DATA}
        />
      )}

      {/* Proposition 3: Strategic Partnerships */}
      {activeProposition === 3 && (
        <PropositionTable
          title="Proposition 3: Strategic Partnerships"
          description="High-value account partnerships with advanced technology adopters. Focus on long-term relationships and joint innovation initiatives."
          data={PROPOSITION_3_DATA}
        />
      )}
    </div>
  )
}
