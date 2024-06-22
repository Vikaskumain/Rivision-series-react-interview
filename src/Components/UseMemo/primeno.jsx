// import  { useState } from 'react';

// const generatePrimes = (limit) => {
//   const primes = [];
//   for (let num = 2; num <= limit; num++) {
//     let isPrime = true;
//     for (let i = 2; i * i <= num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       primes.push(num);
//     }
//   }
//   return primes;
// };

// function PrimeNumbers() {
//   const [limit, setLimit] = useState('');
//   const [primes, setPrimes] = useState([]);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setLimit(value);

//     if (value === '' || isNaN(value)) {
//       setPrimes([]);
//     } else {
//       const num = parseInt(value, 10);
//       setPrimes(generatePrimes(num));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-400 text-white font-bold py-14 px-14">
//       <div className="h-96 w-96 bg-red-400 py-5 px-5">
//         <input
//           type="text"
//           placeholder="Enter a limit"
//           value={limit}
//           onChange={handleChange}
//           className="p-2 rounded text-black"
//         />
//         <div className="mt-4">
//           {primes.length > 0 ? (
//             <div>
//               <h3>Prime numbers up to {limit}:</h3>
//               <ul>
//                 {primes.map((prime) => (
//                   <li className='text-black font-bold' key={prime}>{prime}</li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             <div >No primes found.{primes}</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PrimeNumbers;
