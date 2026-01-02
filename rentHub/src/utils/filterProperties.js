/**
 * Filters properties based on user-selected search criteria.
 * - Pure function
 * - Safe defaults
 * - Displays ALL properties when no criteria are active
 */
export function filterProperties(properties = [], criteria = {}) {
    return properties.filter((property) => {
        /* -----------------------------
         1️⃣ Type (House / Flat / Any)
        ------------------------------ */
        if (
            criteria.type &&
            criteria.type !== "Any" &&
            property.type !== criteria.type
        ) {
            return false;
        }

        /* -----------------------------
         2️⃣ Price range
        ------------------------------ */
        if (
            typeof criteria.minPrice === "number" &&
            property.price < criteria.minPrice
        ) {
            return false;
        }

        if (
            typeof criteria.maxPrice === "number" &&
            property.price > criteria.maxPrice
        ) {
            return false;
        }

        /* -----------------------------
         3️⃣ Bedroom range
        ------------------------------ */
        if (
            typeof criteria.minBedrooms === "number" &&
            property.bedrooms < criteria.minBedrooms
        ) {
            return false;
        }

        if (
            typeof criteria.maxBedrooms === "number" &&
            property.bedrooms > criteria.maxBedrooms
        ) {
            return false;
        }

        /* -----------------------------
         4️⃣ Postcode area (case-insensitive, partial match)
        ------------------------------ */
        if (
            criteria.postcodeArea &&
            !property.postcodeArea
                .toLowerCase()
                .includes(criteria.postcodeArea.toLowerCase())
        ) {
            return false;
        }

        /* -----------------------------
         5️⃣ Date added range
        ------------------------------ */
        if (criteria.dateFrom || criteria.dateTo) {
            const propertyDate = new Date(property.added?.isoDate);

            if (
                criteria.dateFrom &&
                propertyDate < new Date(criteria.dateFrom)
            ) {
                return false;
            }

            if (
                criteria.dateTo &&
                propertyDate > new Date(criteria.dateTo)
            ) {
                return false;
            }
        }

        // ✅ Property passed all active filters
        return true;
    });
}
