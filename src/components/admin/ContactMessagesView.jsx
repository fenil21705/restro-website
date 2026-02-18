import React, { useState } from 'react';
import { Search, Eye, Filter } from 'lucide-react';
import StatusBadge from './StatusBadge';
import ContactDetailModal from './ContactDetailModal';

const ContactMessagesView = ({ messages, onUpdateStatus, onReply }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMessage, setSelectedMessage] = useState(null);

    const filteredMessages = messages.filter(msg =>
        msg.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="view-container">
            {/* Toolbar */}
            <div className="view-toolbar">
                <div className="search-box">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search messages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive bg-white shadow-sm rounded">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMessages.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="no-data">No messages found.</td>
                            </tr>
                        ) : (
                            filteredMessages.map((msg) => (
                                <tr key={msg.id} className={msg.status === 'Unread' ? 'font-bold' : ''}>
                                    <td>{new Date(msg.createdAt).toLocaleDateString()}</td>
                                    <td>{msg.firstName} {msg.lastName}</td>
                                    <td>{msg.subject}</td>
                                    <td><StatusBadge status={msg.status} /></td>
                                    <td>
                                        <button
                                            className="action-btn"
                                            onClick={() => setSelectedMessage(msg)}
                                            title="View Message"
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
            {selectedMessage && (
                <ContactDetailModal
                    message={selectedMessage}
                    onClose={() => setSelectedMessage(null)}
                    onUpdateStatus={onUpdateStatus}
                    onReply={onReply}
                />
            )}
        </div>
    );
};

export default ContactMessagesView;
