// src/App.js
import  { useState, useEffect } from 'react';
import axios from 'axios';


const Table = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users');
      setData(result.data);
      setSortedData(result.data);
    };
    fetchData();
  }, []);

  const sortData = (order) => {
    const sorted = [...data].sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortedData(sorted);
    setSortOrder(order);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">User Data</h1>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => sortData('asc')}
          className={`px-4 py-2 font-semibold text-white rounded ${sortOrder === 'asc' ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700`}
        >
          Ascending
        </button>
        <button
          onClick={() => sortData('desc')}
          className={`px-4 py-2 font-semibold text-white rounded ${sortOrder === 'desc' ? 'bg-green-700' : 'bg-green-500'} hover:bg-green-700`}
        >
          Descending
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b text-center">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
