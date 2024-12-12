import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { useFavorites } from "../app/App";

const Books = () => {
    const [books, setBooks] = useState([]);
    const { favorites, toggleFavorite } = useFavorites();

    useEffect(() => {
        axios
            .get("https://example-data.draftbit.com/books")
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке книг:", error);
            });
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Список книг</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {books.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                        <img src={book.image_url} alt={book.title} className="w-full h-64 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{book.authors}</p>
                            <div className="flex justify-between items-center">
                                <Link to={`/book/${book.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Подробнее</Link>
                                <button onClick={() => toggleFavorite(book)} className="focus:outline-none">
                                    {favorites.some((fav) => fav.id === book.id) ? (<HeartIcon className="h-8 w-8 text-red-600"/>) : (<OutlineHeartIcon className="h-8 w-8 text-gray-400"/>)}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;