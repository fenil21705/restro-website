import React from 'react';
import { Users, Calendar, MessageSquare, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import StatsCard from './StatsCard';

const DashboardHome = ({ reservations, messages }) => {
    // Calculate stats
    const totalReservations = reservations.length;
    const pendingReservations = reservations.filter(r => r.status === 'Pending').length;
    const totalMessages = messages.length;
    const unreadMessages = messages.filter(m => m.status === 'Unread').length;

    // Prepare chart data (mocked for demo if not enough real data)
    const data = [
        { name: 'Mon', bookings: 4 },
        { name: 'Tue', bookings: 3 },
        { name: 'Wed', bookings: 2 },
        { name: 'Thu', bookings: 6 },
        { name: 'Fri', bookings: 8 },
        { name: 'Sat', bookings: 12 },
        { name: 'Sun', bookings: 10 },
    ];

    const pieData = [
        { name: 'Pending', value: pendingReservations || 1, color: '#FF9800' },
        { name: 'Confirmed', value: reservations.filter(r => r.status === 'Confirmed').length || 1, color: '#4CAF50' },
        { name: 'Cancelled', value: reservations.filter(r => r.status === 'Cancelled').length || 1, color: '#F44336' },
    ];

    return (
        <div className="dashboard-home">
            <div className="stats-grid">
                <StatsCard
                    title="Total Reservations"
                    value={totalReservations}
                    icon={Calendar}
                    color="#4CAF50"
                    subtext="+2 from yesterday"
                />
                <StatsCard
                    title="Pending Bookings"
                    value={pendingReservations}
                    icon={Clock}
                    color="#FF9800"
                    subtext="Action needed"
                />
                <StatsCard
                    title="Total Messages"
                    value={totalMessages}
                    icon={MessageSquare}
                    color="#2196F3"
                />
                <StatsCard
                    title="Unread Messages"
                    value={unreadMessages}
                    icon={MessageSquare}
                    color="#F44336"
                    subtext="Respond soon"
                />
            </div>

            <div className="charts-section">
                <div className="chart-card">
                    <h3>Weekly Reservations</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip />
                                <Line type="monotone" dataKey="bookings" stroke="#F44336" strokeWidth={3} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-card">
                    <h3>Booking Status</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
