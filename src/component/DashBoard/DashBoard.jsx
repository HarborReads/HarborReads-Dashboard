// Dashboard.jsx
import ProfileBar from './ProfileBar'; // Import the ProfileBar component
import PreviousRecommendations from './RecommendBooks';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      {/* ProfileBar component within the Dashboard component */}
      <ProfileBar user={user} />
      <PreviousRecommendations/>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;