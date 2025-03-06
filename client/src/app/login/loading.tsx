import React from 'react';

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Carregando...' }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div
        className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"
      />
      <h2 className="text-2xl mt-4">{message}</h2>
    </div>
  );
};

export default Loader;
