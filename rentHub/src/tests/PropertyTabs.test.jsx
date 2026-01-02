import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PropertyTabs from "../components/PropertyTabs.jsx";

const mockProperty = {
    descriptionLong: 'Long description here',
    floorPlan: '/floorplan.png',
    coordinates: { lat: 0, lng: 0 }
};

describe('PropertyTabs Component', () => {
    test('renders tabs and description panel', () => {
        render(<PropertyTabs property={mockProperty} />);

        // Check for tabs
        expect(screen.getByRole('tab', { name: /Description/i })).toBeInTheDocument();
        expect(screen.getByRole('tab', { name: /Floor Plan/i })).toBeInTheDocument();
        expect(screen.getByRole('tab', { name: /Map/i })).toBeInTheDocument();

        // Check description panel (active by default)
        const descriptionPanel = screen.getByRole('tabpanel', { name: /Description/i });
        expect(descriptionPanel).toHaveTextContent(/Long description here/i);
    });

    test('renders floor plan panel', async () => {
        render(<PropertyTabs property={mockProperty} />);

        // Click the Floor Plan tab to activate it
        const floorPlanTab = screen.getByRole('tab', { name: /Floor Plan/i });
        await userEvent.click(floorPlanTab);

        // Now the Floor Plan panel is in the DOM
        const floorPlanPanel = screen.getByRole('tabpanel', { name: /Floor Plan/i });

        // Check the image inside the panel
        const img = floorPlanPanel.querySelector('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', '/floorplan.png');
    });

    test('renders map panel', async () => {
        render(<PropertyTabs property={mockProperty} />);

        // Click the Map tab to activate it
        const mapTab = screen.getByRole('tab', { name: /Map/i });
        await userEvent.click(mapTab);

        const mapPanel = screen.getByRole('tabpanel', { name: /Map/i });
        expect(mapPanel).toBeInTheDocument();
    });
});
