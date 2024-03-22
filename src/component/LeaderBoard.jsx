import React from 'react';

const users = [
  {
    name: 'John Doe',
    icon: 'https://example.com/john-doe-icon.jpg',
    score: 1000,
  },
  {
    name: 'Jane Smith',
    icon: 'https://example.com/jane-smith-icon.jpg',
    score: 950,
  },
  {
    name: 'Alice Johnson',
    icon: 'https://example.com/alice-johnson-icon.jpg',
    score: 900,
  },
];

const Leaderboard = () => {
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
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'}>
              <td className="p-2 md:p-3 lg:p-4 flex items-center">
                <img src={user.icon} alt={user.name} className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full mr-3" />
                <span className="text-sm md:text-base lg:text-lg">{user.name}</span>
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
