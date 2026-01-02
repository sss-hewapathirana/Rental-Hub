import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from "../components/SearchForm.jsx";
import { useState } from 'react';

// Wrapper to provide state to the SearchForm
const Wrapper = () => {
    const [criteria, setCriteria] = useState({});
    return <SearchForm criteria={criteria} setCriteria={setCriteria} />;
};

describe('SearchForm Component', () => {

    test('renders all input fields', () => {
        render(<Wrapper />);
        // Check all input/select fields exist
        expect(screen.getByLabelText(/Property Type/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Min Price/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Max Price/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Min Bedrooms/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Max Bedrooms/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Postcode Area/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Date From/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Date To/i)).toBeInTheDocument();
    });

    test('updates field values on change', () => {
        render(<Wrapper />);

        // Test a number input
        const minPriceInput = screen.getByLabelText(/Min Price/i);
        fireEvent.change(minPriceInput, { target: { value: '500000' } });
        expect(minPriceInput.value).toBe('500000');

        // Test a text input
        const postcodeInput = screen.getByLabelText(/Postcode Area/i);
        fireEvent.change(postcodeInput, { target: { value: 'NW1' } });
        expect(postcodeInput.value).toBe('NW1');

        // Test select
        const typeSelect = screen.getByLabelText(/Property Type/i);
        fireEvent.change(typeSelect, { target: { value: 'House' } });
        expect(typeSelect.value).toBe('House');
    });
});
