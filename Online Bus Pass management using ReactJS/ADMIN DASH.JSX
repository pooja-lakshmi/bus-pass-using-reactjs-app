import React from 'react';

function AdminDashboard({ registeredDetails }) {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <h3>Registered Details</h3>
      {registeredDetails.map((details) => (
        <div key={details.id}>
          <p>Pass ID: {details.passId}</p>
          <img src={details.photo} alt={`Pass ID: ${details.passId}`} />
        </div>
      ))}
      <h3>Verify Documents</h3>
      {/* Add logic to verify documents */}
      <h3>Issue Bus Pass</h3>
      {/* Add logic to issue bus passes */}
    </div>
  );
}

export default AdminDashboard;
