import React, { useState } from 'react';
import { X, User, Mail, Phone, MessageSquare } from 'lucide-react';
import StatusBadge from './StatusBadge';

const ContactDetailModal = ({ message, onClose, onUpdateStatus, onReply }) => {
    if (!message) return null;

    const [loading, setLoading] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [showReplyBox, setShowReplyBox] = useState(false);

    const markAsRead = async () => {
        setLoading(true);
        await onUpdateStatus(message.id, 'Read');
        setLoading(false);
        onClose();
    };

    const handleSendReply = async () => {
        if (!replyText.trim()) return;
        setLoading(true);
        await onReply(message.id, replyText);
        setLoading(false);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Message Details</h3>
                    <button onClick={onClose} className="close-btn"><X size={20} /></button>
                </div>

                <div className="modal-body">
                    <div className="status-banner">
                        <label>Current Status:</label>
                        <StatusBadge status={message.status} />
                    </div>

                    <div className="detail-section">
                        <h4>Sender Info</h4>
                        <div className="detail-grid">
                            <div className="detail-item">
                                <User size={16} />
                                <div>
                                    <label>Name</label>
                                    <p>{message.firstName} {message.lastName}</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Mail size={16} />
                                <div>
                                    <label>Email</label>
                                    <p>{message.email}</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Phone size={16} />
                                <div>
                                    <label>Phone</label>
                                    <p>{message.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h4>Message Content</h4>
                        <div className="detail-item full-width">
                            <strong>Subject: {message.subject}</strong>
                            <p className="message-body">{message.message}</p>
                        </div>
                    </div>

                    {showReplyBox && (
                        <div className="detail-section">
                            <h4>Reply to Customer</h4>
                            <textarea
                                className="reply-textarea"
                                rows="4"
                                placeholder="Write your reply here..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }}
                            ></textarea>
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    <button onClick={onClose} className="btn-secondary">Close</button>
                    {!showReplyBox ? (
                        <>
                            {message.status === 'Unread' && (
                                <button onClick={markAsRead} className="btn-primary" disabled={loading}>
                                    Mark Read
                                </button>
                            )}
                            <button
                                onClick={() => setShowReplyBox(true)}
                                className="btn-primary"
                                disabled={loading}
                            >
                                Reply via Email
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleSendReply}
                            className="btn-primary"
                            disabled={loading || !replyText.trim()}
                        >
                            {loading ? 'Sending...' : 'Send Email'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactDetailModal;
