import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PlaceTable({ places }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter places based on search input
  const filteredPlaces = places.filter(place => 
    place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.identifier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculation
  const totalItems = filteredPlaces.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Guard current page range
  const activePage = Math.min(currentPage, Math.max(totalPages, 1));
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = filteredPlaces.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="card">
      {/* Table Header Controls */}
      <div className="card-controls">
        <h2 className="card-title">Place List</h2>
        
        <div className="search-filter-wrapper">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search places..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to page 1 on search
              }}
            />
          </div>
          
          <button className="filter-btn" aria-label="Filter columns">
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Table Component */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: '80px' }}>#</th>
              <th>Place Name</th>
              <th>Identifier (Unique ID)</th>
              <th>Status</th>
              <th>Created On</th>
              <th>Created By</th>
              <th style={{ width: '100px', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((place, idx) => (
                <tr key={place.id || idx}>
                  <td>{startIndex + idx + 1}</td>
                  <td style={{ fontWeight: '500', color: '#111827' }}>{place.name}</td>
                  <td>{place.identifier}</td>
                  <td>
                    <span className={`badge ${place.status === 'Active' ? 'badge-active' : 'badge-inactive'}`}>
                      {place.status}
                    </span>
                  </td>
                  <td>{place.createdOn}</td>
                  <td>{place.createdBy}</td>
                  <td>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <button className="action-btn" aria-label="Action menu">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '32px', color: '#9CA3AF' }}>
                  No places found matching the search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer / Pagination */}
      <div className="card-footer">
        <div className="footer-summary">
          Showing {totalItems === 0 ? 0 : startIndex + 1} to {endIndex} of {totalItems} entries
        </div>
        
        {totalPages > 1 && (
          <div className="pagination-wrapper">
            <button 
              className={`page-btn ${activePage === 1 ? 'disabled' : ''}`}
              onClick={() => handlePageChange(activePage - 1)}
              disabled={activePage === 1}
              aria-label="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                className={`page-btn ${activePage === pageNum ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            ))}
            
            <button 
              className={`page-btn ${activePage === totalPages ? 'disabled' : ''}`}
              onClick={() => handlePageChange(activePage + 1)}
              disabled={activePage === totalPages}
              aria-label="Next Page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
