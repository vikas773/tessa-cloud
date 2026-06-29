import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

export default function CreatePlaceModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple Validation
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Place name is required';
    if (!identifier.trim()) newErrors.identifier = 'Identifier is required';
    if (!status) newErrors.status = 'Status is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success flow (simulated save without backend database submission)
    console.log('Place Form Validated & Submitted:', { name, identifier, status });
    
    // Clear fields
    setName('');
    setIdentifier('');
    setStatus('');
    setErrors({});
    
    // Close modal
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h3 className="modal-title">Create Place</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="modal-form">
          {/* Place Name Field */}
          <div className="form-group">
            <label className="form-label">
              Place Name <span className="label-required">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter place name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
              }}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Identifier Field */}
          <div className="form-group">
            <label className="form-label">
              Identifier (Unique ID) <span className="label-required">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter unique identifier"
              className={`form-input ${errors.identifier ? 'error' : ''}`}
              value={identifier}
              onChange={(e) => {
                setIdentifier(e.target.value);
                if (errors.identifier) setErrors(prev => ({ ...prev, identifier: '' }));
              }}
            />
            {errors.identifier && <span className="error-message">{errors.identifier}</span>}
          </div>

          {/* Status Field */}
          <div className="form-group">
            <label className="form-label">
              Status <span className="label-required">*</span>
            </label>
            <select 
              className={`form-input ${errors.status ? 'error' : ''}`}
              style={{ color: status ? 'var(--text-primary)' : 'var(--text-muted)' }}
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                if (errors.status) setErrors(prev => ({ ...prev, status: '' }));
              }}
            >
              <option value="" disabled hidden>Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && <span className="error-message">{errors.status}</span>}
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            <button type="button" className="btn btn-outline" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Save size={16} />
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
