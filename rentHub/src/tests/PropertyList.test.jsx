// src/tests/PropertyList.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropertyList from "../components/PropertyList.jsx";

const mockProperties = [
    { id: "prop1", type: "House", descriptionShort: "Test House", location: "Test Loc", images: [], price: 100000 },
];

describe("PropertyList Component", () => {
    test("renders no properties message", () => {
        render(
            <MemoryRouter>
                <DndProvider backend={HTML5Backend}>
                    <PropertyList properties={[]} onFavourite={() => {}} />
                </DndProvider>
            </MemoryRouter>
        );
        expect(screen.getByText(/No properties found/i)).toBeInTheDocument();
    });

    test("renders property cards", () => {
        render(
            <MemoryRouter>
                <DndProvider backend={HTML5Backend}>
                    <PropertyList properties={mockProperties} onFavourite={() => {}} />
                </DndProvider>
            </MemoryRouter>
        );
        expect(screen.getByText(/Test House/i)).toBeInTheDocument();
        expect(screen.getByText(/£100,000/i)).toBeInTheDocument();
    });
});
