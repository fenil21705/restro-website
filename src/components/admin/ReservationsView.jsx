import React, { useState } from 'react';
import { Eye, Search, Filter } from 'lucide-react';
import StatusBadge from './StatusBadge';
import ReservationDetailModal from './ReservationDetailModal';

const ReservationsView = ({ reservations, onUpdateStatus }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedReservation, setSelectedReservation] = useState(null);

    // Filter logic
    const filteredReservations = reservations.filter(res => {
        const matchesSearch =
            res.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            res.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || res.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="view-container">
            {/* Toolbar */}
            <div className="view-toolbar">
                <div className="search-box">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search reservations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filter-box">
                    <Filter size={18} />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive bg-white shadow-sm rounded">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Guests</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReservations.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="no-data">No reservations found.</td>
                            </tr>
                        ) : (
                            filteredReservations.map((res) => (
                                <tr key={res.id}>
                                    <td className="font-medium">{res.name}</td>
                                    <td>{res.date}</td>
                                    <td>{res.time}</td>
                                    <td>{res.guests}</td>
                                    <td>{res.phone}</td>
                                    <td><StatusBadge status={res.status} /></td>
                                    <td>
                                        <button
                                            className="action-btn"
                                            onClick={() => setSelectedReservation(res)}
                                            title="View Details"
                                        >
                                            <Eye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedReservation && (
                <ReservationDetailModal
                    reservation={selectedReservation}
                    onClose={() => setSelectedReservation(null)}
                    onUpdateStatus={onUpdateStatus}
                />
            )}
        </div>
    );
};

export default ReservationsView;
