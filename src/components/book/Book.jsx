import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Book = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios
            .get(`https://example-data.draftbit.com/books/${id}`)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке книги:", error);
            });
    }, [id]);

    if (!book) {
        return (<div className="text-center">Загрузка...</div>);
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <Link to="/" className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Назад</Link>
            <img src={book.image_url} alt={book.title} className="w-full h-64 object-cover rounded-lg mt-4"/>
            <h2 className="text-2xl font-bold mt-4">{book.title}</h2>
            <p className="text-sm text-gray-500">Автор: {book.authors}</p>
            <p className="text-sm text-gray-500">Жанр: {book.genres}</p>
            <p className="text-sm mt-4">{book.description}</p>
        </div>
    );
};

export default Book;