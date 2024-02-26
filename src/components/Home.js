import 'animate.css';
import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-red-900 flex items-center justify-center ">
            <div className="max-w-5xl mx-auto p-8 bg-gray-900 shadow-md rounded-md">
                <h1 className="text-5xl font-bold mb-6 text-gray-100 justify-center text-center" >Stock Mafia</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden rounded-md transform transition-transform hover:scale-105">
                        <img
                            src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Stock 1"
                            className="object-cover w-full h-96 rounded-md animate__animated animate__fadeInLeft"
                        />
                    </div>

                    <div className="relative overflow-hidden rounded-md transform transition-transform hover:scale-105">
                        <img
                            src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Stock 2"
                            className="object-cover w-full h-96 rounded-md animate__animated animate__fadeInRight"
                        />
                    </div>
                </div>

                <p className="mt-8 text-lg text-gray-800">
                    Explore the latest stock information and trends on our website. Get started by searching for your favorite stocks!
                </p>

            </div>
        </div>
    );
};

export default HomePage;



// import React from 'react';

// const HomePage = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
//             <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md transform rotate-3">
//                 <h1 className="text-4xl font-bold mb-4 text-purple-800">Welcome to Your Stock Website</h1>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Stock Image 1 */}
//                     <div className="relative overflow-hidden rounded-md transform transition-transform hover:scale-105">
//                         <img
//                             src="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600"
//                             alt="Stock 1"
//                             className="object-cover w-full h-full rounded-md"
//                         />
//                     </div>

//                     {/* Stock Image 2 */}
//                     <div className="relative overflow-hidden rounded-md transform transition-transform hover:scale-105">
//                         <img
//                             src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600"
//                             alt="Stock 2"
//                             className="object-cover w-full h-full rounded-md"
//                         />
//                     </div>
//                 </div>

//                 <p className="mt-8 text-lg text-purple-800">
//                     Explore the latest stock information and more on our website. Get started by searching for your favorite stocks!
//                 </p>

//                 {/* Add more sections or components as needed */}
//             </div>
//         </div>
//     );
// };

// export default HomePage;



