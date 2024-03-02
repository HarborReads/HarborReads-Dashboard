import React from 'react';
import ProfileBar from './ProfileBar'; // Assuming ProfileBar is imported
import ChatBot from './ChatbotDirect'; // Assuming ChatBot is imported

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard mt-3">
      {/* ProfileBar component within the Dashboard component */}
      <ProfileBar user={user} />
      <div className="mt-8"> {/* Add margin top for spacing */}
        <ChatBot/>
      </div>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
