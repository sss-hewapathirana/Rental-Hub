import { render, screen, fireEvent } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FavouriteList from '../components/FavouriteList.jsx';

const mockProperty = {
    id: 'prop1',
    type: 'House',
    price: 500000,
    location: 'Test Location'
};

describe('FavouriteList Component', () => {
    test('renders empty state', () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <FavouriteList favourites={[]} addFavourite={() => {}} removeFavourite={() => {}} />
            </DndProvider>
        );
        expect(screen.getByText(/Drag properties here/i)).toBeInTheDocument();
    });

    test('renders favourite items', () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <FavouriteList favourites={[mockProperty]} addFavourite={() => {}} removeFavourite={() => {}} />
            </DndProvider>
        );
        expect(screen.getByText(/Your Favourites/i)).toBeInTheDocument();
        // Check type text
        expect(screen.getByText(/House/i)).toBeInTheDocument();
    });

    test('remove button works', () => {
        const removeMock = vi.fn();
        render(
            <DndProvider backend={HTML5Backend}>
                <FavouriteList favourites={[mockProperty]} addFavourite={() => {}} removeFavourite={removeMock} />
            </DndProvider>
        );
        const btn = screen.getByRole('button', { name: /remove/i }); // Ensure button text exists
        fireEvent.click(btn);
        expect(removeMock).toHaveBeenCalledWith(mockProperty.id);
    });
});
