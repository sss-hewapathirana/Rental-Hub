import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";

export default function App() {
    return (
        <BrowserRouter>
            <DndProvider backend={HTML5Backend}>
                <div className="flex flex-col min-h-screen">
                    <Header />

                    <main className="grow">
                        <Routes>
                            <Route path="/" element={<SearchPage />} />
                            <Route path="/property/:id" element={<PropertyPage />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </DndProvider>
        </BrowserRouter>
    );
}
