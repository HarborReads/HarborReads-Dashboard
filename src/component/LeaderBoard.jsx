import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/leaderboard/getLeaderboard');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 md:p-6 lg:p-8">
      <div className="text-center mb-4 md:mb-6 lg:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Leaderboard</h2>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 md:p-3 lg:p-4">User</th>
            <th className="p-2 md:p-3 lg:p-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
              <td className="p-2 md:p-3 lg:p-4 flex items-center">
                <img src={'https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png'} alt={user.username} className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full mr-3" />
                <span className="text-sm md:text-base lg:text-lg">{user.username}</span>
              </td>
              <td className="p-2 md:p-3 lg:p-4">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
