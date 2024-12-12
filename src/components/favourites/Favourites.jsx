import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../app/App";

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Избранное</h2>
            {favorites.length === 0 ? (<p className="text-gray-500 text-center">Нет избранных книг.</p>) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {favorites.map((book) => (
                        <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                            <img src={book.image_url} alt={book.title} className="w-full h-64 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{book.authors}</p>
                                <div className="flex justify-between items-center">
                                    <Link to={`/book/${book.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Подробнее</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;