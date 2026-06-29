import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PlaceTable from './components/PlaceTable';
import CreatePlaceModal from './components/CreatePlaceModal';
import { Plus } from 'lucide-react';

const INITIAL_PLACES = [
  { id: 1, name: 'Head Office', identifier: 'HO-001', status: 'Active', createdOn: '24 Jun 2025', createdBy: 'Admin User' },
  { id: 2, name: 'Branch Office', identifier: 'BO-002', status: 'Active', createdOn: '23 Jun 2025', createdBy: 'Admin User' },
  { id: 3, name: 'Warehouse', identifier: 'WH-003', status: 'Active', createdOn: '22 Jun 2025', createdBy: 'Admin User' },
  { id: 4, name: 'IT Department', identifier: 'IT-004', status: 'Inactive', createdOn: '20 Jun 2025', createdBy: 'Admin User' },
  { id: 5, name: 'Finance Department', identifier: 'FN-005', status: 'Active', createdOn: '18 Jun 2025', createdBy: 'Admin User' },
  { id: 6, name: 'HR Department', identifier: 'HR-006', status: 'Active', createdOn: '15 Jun 2025', createdBy: 'Admin User' },
  { id: 7, name: 'Marketing Suite', identifier: 'MK-007', status: 'Active', createdOn: '12 Jun 2025', createdBy: 'Admin User' },
  { id: 8, name: 'Sales Office', identifier: 'SA-008', status: 'Active', createdOn: '10 Jun 2025', createdBy: 'Admin User' },
  { id: 9, name: 'Research Lab', identifier: 'RL-009', status: 'Inactive', createdOn: '08 Jun 2025', createdBy: 'Admin User' },
  { id: 10, name: 'Support Center', identifier: 'SC-010', status: 'Active', createdOn: '05 Jun 2025', createdBy: 'Admin User' },
  { id: 11, name: 'Data Center', identifier: 'DC-011', status: 'Active', createdOn: '02 Jun 2025', createdBy: 'Admin User' },
  { id: 12, name: 'Security Post', identifier: 'SP-012', status: 'Active', createdOn: '28 May 2025', createdBy: 'Admin User' },
  { id: 13, name: 'Logistics Hub', identifier: 'LH-013', status: 'Active', createdOn: '25 May 2025', createdBy: 'Admin User' },
  { id: 14, name: 'QA Department', identifier: 'QA-014', status: 'Inactive', createdOn: '22 May 2025', createdBy: 'Admin User' },
  { id: 15, name: 'Exec Suite', identifier: 'EX-015', status: 'Active', createdOn: '18 May 2025', createdBy: 'Admin User' }
];

export default function App() {
  const [places, setPlaces] = useState(INITIAL_PLACES);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Top Navbar Header */}
      <Navbar />

      {/* Main Page Dashboard Body */}
      <main className="dashboard-main">
        <div className="container">
          
          {/* Page Top Header Section */}
          <div className="page-header">
            <div className="header-title-section">
              <h1>Places</h1>
              <p>Manage all places / departments in the system.</p>
            </div>
            
            <button 
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus size={18} />
              Create Place
            </button>
          </div>

          {/* Place List Table Card */}
          <PlaceTable places={places} />

        </div>
      </main>

      {/* Modal Dialog Popup Overlay */}
      <CreatePlaceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
