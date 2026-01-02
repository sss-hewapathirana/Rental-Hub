import { render, screen, fireEvent } from '@testing-library/react';
import PropertyGallery from '../components/PropertyGallery.jsx';

const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

describe('PropertyGallery Component', () => {
    test('renders first image', () => {
        render(<PropertyGallery images={images} />);
        expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    });

    test('next and prev buttons work', () => {
        render(<PropertyGallery images={images} />);
        const nextBtn = screen.getByText('→');
        fireEvent.click(nextBtn);
        expect(screen.getByAltText('Image 2')).toBeInTheDocument();

        const prevBtn = screen.getByText('←');
        fireEvent.click(prevBtn);
        expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    });

    test('thumbnails switch images', () => {
        render(<PropertyGallery images={images} />);
        const thumb = screen.getByAltText('Thumbnail 3');
        fireEvent.click(thumb);
        expect(screen.getByAltText('Image 3')).toBeInTheDocument();
    });

    test('shows fallback when no images', () => {
        render(<PropertyGallery images={[]} />);
        expect(screen.getByText('No images available.')).toBeInTheDocument();
    });

    test('circular navigation works', () => {
        render(<PropertyGallery images={images} />);
        const prevBtn = screen.getByText('←');
        fireEvent.click(prevBtn);
        expect(screen.getByAltText('Image 3')).toBeInTheDocument();

        const nextBtn = screen.getByText('→');
        fireEvent.click(nextBtn);
        expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    });
});
