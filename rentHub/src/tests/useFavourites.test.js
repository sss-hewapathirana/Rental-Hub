import { renderHook, act } from "@testing-library/react-hooks";
import useFavourites from "../useFavourites";

// Mock property data (same structure as JSON)
const mockProperty1 = { id: "prop1", price: 750000 };
const mockProperty2 = { id: "prop2", price: 399995 };

describe("useFavourites Hook", () => {
    test("should start with empty favourites", () => {
        const { result } = renderHook(() => useFavourites());
        expect(result.current.favourites).toHaveLength(0);
    });

    test("should add a property to favourites", () => {
        const { result } = renderHook(() => useFavourites());

        act(() => {
            result.current.addFavourite(mockProperty1);
        });

        expect(result.current.favourites).toHaveLength(1);
        expect(result.current.favourites[0].id).toBe("prop1");
    });

    test("should NOT add duplicate properties", () => {
        const { result } = renderHook(() => useFavourites());

        act(() => {
            result.current.addFavourite(mockProperty1);
            result.current.addFavourite(mockProperty1);
        });

        expect(result.current.favourites).toHaveLength(1);
    });

    test("should remove a property from favourites", () => {
        const { result } = renderHook(() => useFavourites());

        act(() => {
            result.current.addFavourite(mockProperty1);
            result.current.removeFavourite("prop1");
        });

        expect(result.current.favourites).toHaveLength(0);
    });

    test("should clear all favourites", () => {
        const { result } = renderHook(() => useFavourites());

        act(() => {
            result.current.addFavourite(mockProperty1);
            result.current.addFavourite(mockProperty2);
            result.current.clearFavourites();
        });

        expect(result.current.favourites).toHaveLength(0);
    });

    test("should correctly detect favourite status", () => {
        const { result } = renderHook(() => useFavourites());

        act(() => {
            result.current.addFavourite(mockProperty1);
        });

        expect(result.current.isFavourite("prop1")).toBe(true);
        expect(result.current.isFavourite("prop2")).toBe(false);
    });
});
