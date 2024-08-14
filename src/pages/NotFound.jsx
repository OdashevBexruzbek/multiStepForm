import React from "react";

const NotFound = () => {
  return <div>
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">404</h1>
        <p className="text-lg">Sahifa topilmadi</p>
        <p className="text-sm">Afsuski, siz qidirgan sahifa topilmadi. Iltimos, ortga qaytib, boshqa sahifalarga o'ting.</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Bosh sahifaga qaytish
        </Link>
      </div>
      <div className="mt-4">
        <img src="https://i.imgur.com/A040Lxr.png" alt="404" className="w-1/2" />
      </div>
    </div>
  </div>;
};

export default NotFound;
