import React, { useState } from 'react';
import { X, Calendar, Clock, User, Users, Mail, Phone, MessageSquare } from 'lucide-react';
import StatusBadge from './StatusBadge';

const ReservationDetailModal = ({ reservation, onClose, onUpdateStatus }) => {
    if (!reservation) return null;

    const [status, setStatus] = useState(reservation.status || 'Pending');
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        await onUpdateStatus(reservation.id, status);
        setLoading(false);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Reservation Details</h3>
                    <button onClick={onClose} className="close-btn"><X size={20} /></button>
                </div>

                <div className="modal-body">
                    <div className="detail-section">
                        <h4>Customer Info</h4>
                        <div className="detail-grid">
                            <div className="detail-item">
                                <User size={16} />
                                <div>
                                    <label>Name</label>
                                    <p>{reservation.name}</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Mail size={16} />
                                <div>
                                    <label>Email</label>
                                    <p>{reservation.email}</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Phone size={16} />
                                <div>
                                    <label>Phone</label>
                                    <p>{reservation.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h4>Reservation Info</h4>
                        <div className="detail-grid">
                            <div className="detail-item">
                                <Calendar size={16} />
                                <div>
                                    <label>Date</label>
                                    <p>{reservation.date}</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Clock size={16} />
                                <div>
                                    <label>Time</label>
                                    <p>{reservation.time}</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Users size={16} />
                                <div>
                                    <label>Guests</label>
                                    <p>{reservation.guests}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h4>Special Requests</h4>
                        <div className="detail-item full-width">
                            <MessageSquare size={16} />
                            <p className="request-text">{reservation.requests || 'None'}</p>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h4>Refine Status</h4>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="status-select"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>

                <div className="modal-footer">
                    <button onClick={onClose} className="btn-secondary">Close</button>
                    <button
                        onClick={handleSave}
                        className="btn-primary"
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReservationDetailModal;
