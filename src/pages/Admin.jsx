import React, { useEffect, useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import TopHeader from '../components/admin/TopHeader';
import DashboardHome from '../components/admin/DashboardHome';
import ReservationsView from '../components/admin/ReservationsView';
import ContactMessagesView from '../components/admin/ContactMessagesView';
import './Admin.css';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [reservations, setReservations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Fetch Data
    const fetchData = async () => {
        try {
            const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
            // Fetch Reservations
            const resResponse = await fetch(`${API_URL}/api/reservations`);
            if (!resResponse.ok) throw new Error('Failed to fetch reservations');
            const resData = await resResponse.json();

            // Fetch Messages
            const msgResponse = await fetch(`${API_URL}/api/contacts`);
            if (!msgResponse.ok) throw new Error('Failed to fetch messages');
            const msgData = await msgResponse.json();

            setReservations(resData.reverse());
            setMessages(msgData.reverse());
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setIsSidebarOpen(false); // Close sidebar on mobile when tab changes
    };

    // Update Status Handlers
    const handleReservationStatusUpdate = async (id, newStatus) => {
        try {
            const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/reservations/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });
            if (response.ok) {
                // Refresh data or update local state optimistically
                const updated = reservations.map(r => r.id === id ? { ...r, status: newStatus } : r);
                setReservations(updated);
            }
        } catch (error) {
            console.error('Update failed', error);
        }
    };

    const handleMessageStatusUpdate = async (id, newStatus) => {
        try {
            const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/contacts/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });
            if (response.ok) {
                const updated = messages.map(m => m.id === id ? { ...m, status: newStatus } : m);
                setMessages(updated);
            }
        } catch (error) {
            console.error('Update failed', error);
        }
    };

    const handleReply = async (id, replyMessage) => {
        try {
            const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/contacts/${id}/reply`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ replyMessage }),
            });
            if (response.ok) {
                const updated = messages.map(m => m.id === id ? { ...m, status: 'Replied' } : m);
                setMessages(updated);
                alert('Reply sent successfully!');
            } else {
                alert('Failed to send reply.');
            }
        } catch (error) {
            console.error('Reply failed', error);
            alert('Error sending reply.');
        }
    };

    if (loading) return <div className="loading-container">Loading Dashboard...</div>;
    if (error) return <div className="error-text">Error: {error}</div>;

    return (
        <div className="admin-page">
            <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} isOpen={isSidebarOpen} />

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}

            <div className="admin-content">
                <TopHeader title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} onToggleSidebar={toggleSidebar} />

                <main className="main-content">
                    {activeTab === 'dashboard' && (
                        <DashboardHome reservations={reservations} messages={messages} />
                    )}
                    {activeTab === 'reservations' && (
                        <ReservationsView
                            reservations={reservations}
                            onUpdateStatus={handleReservationStatusUpdate}
                        />
                    )}
                    {activeTab === 'messages' && (
                        <ContactMessagesView
                            messages={messages}
                            onUpdateStatus={handleMessageStatusUpdate}
                            onReply={handleReply}
                        />
                    )}
                    {activeTab === 'settings' && (
                        <div className="view-container">
                            <h3>Settings</h3>
                            <p>Settings panel coming soon...</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Admin;
