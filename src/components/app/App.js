import {Routes, Route, BrowserRouter, Link} from "react-router-dom";
import {Books} from "../books/Books";
import {Book} from "../book/Book";
import {Favorites} from "../favourites/Favourites";
import {createContext, useContext, useState} from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

function App() {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (book) => {
        if (favorites.some((fav) => fav.id === book.id)) {
            setFavorites(favorites.filter((fav) => fav.id !== book.id));
        } else {
            setFavorites([...favorites, book]);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            <BrowserRouter>
                <div className="flex text-center text-2xl font-bold p-6">
                    <Link to="/" className="bg-white px-4 py-2 rounded hover:bg-blue-100">Книги</Link>
                    <Link to="/favorites" className="bg-white px-4 py-2 rounded hover:bg-blue-100">Избранное</Link>
                </div>

                <Routes>
                    <Route path="/" element={<Books/>}/>
                    <Route path="/book/:id" element={<Book />}/>
                    <Route path="/favorites" element={<Favorites />}/>
                </Routes>
            </BrowserRouter>
        </FavoritesContext.Provider>
    );
}

export default App;
