import React, { useEffect, useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import TopHeader from '../components/admin/TopHeader';
import DashboardHome from '../components/admin/DashboardHome';
import ReservationsView from '../components/admin/ReservationsView';
import ContactMessagesView from '../components/admin/ContactMessagesView';
import './Admin.css';
import supabase from '../../supabaseClient';

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
            // Fetch Reservations
            const { data: resData, error: resError } = await supabase
                .from('reservations')
                .select('*')
                .order('id', { ascending: false });

            if (resError) throw resError;

            // Fetch Messages
            const { data: msgData, error: msgError } = await supabase
                .from('contacts')
                .select('*')
                .order('id', { ascending: false });

            if (msgError) throw msgError;

            setReservations(resData);
            setMessages(msgData);
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
            const { error } = await supabase
                .from('reservations')
                .update({ status: newStatus })
                .eq('id', id);

            if (!error) {
                // Refresh data or update local state optimistically
                const updated = reservations.map(r => r.id === id ? { ...r, status: newStatus } : r);
                setReservations(updated);
            } else {
                console.error('Update failed', error);
            }
        } catch (error) {
            console.error('Update failed', error);
        }
    };

    const handleMessageStatusUpdate = async (id, newStatus) => {
        try {
            const { error } = await supabase
                .from('contacts')
                .update({ status: newStatus })
                .eq('id', id);

            if (!error) {
                const updated = messages.map(m => m.id === id ? { ...m, status: newStatus } : m);
                setMessages(updated);
            } else {
                console.error('Update failed', error);
            }
        } catch (error) {
            console.error('Update failed', error);
        }
    };

    const handleReply = async (id, replyMessage) => {
        // Email sending requires a Supabase Edge Function since we removed the Express backend.
        // For now, we will just update the status to 'Replied'.
        try {
            const { error } = await supabase
                .from('contacts')
                .update({ status: 'Replied' })
                .eq('id', id);

            if (!error) {
                const updated = messages.map(m => m.id === id ? { ...m, status: 'Replied' } : m);
                setMessages(updated);
                alert('Marked as replied! (Email sending requires Edge Function setup)');
            } else {
                alert('Failed to update status.');
            }

            // TODO: Call Edge Function to send email
            // await supabase.functions.invoke('send-email', { body: { id, replyMessage } })

        } catch (error) {
            console.error('Reply failed', error);
            alert('Error updating status.');
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
