// src/pages/PropertyPage.jsx
import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";
import PropertyGallery from "../components/PropertyGallery";
import PropertyTabs from "../components/PropertyTabs";
import { MapPin, Home, Heart, Share2, ArrowLeft } from "lucide-react";

export default function PropertyPage() {
    const { id } = useParams();

    const property = propertiesData.properties.find((p) => p.id === id);

    if (!property) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-6">
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-12 text-center max-w-md">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Home className="w-10 h-10 text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Property Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        We couldn't find the property you're looking for.
                    </p>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto p-4 md:p-8">
                {/* Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:shadow-sm transition-all"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Search
                </button>

                {/* Header Section */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8 mb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div className="flex-1 min-w-0">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                                {property.descriptionShort}
                            </h1>

                            <div className="flex items-center gap-2 text-gray-600 mb-4">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                <p className="text-lg">{property.location}</p>
                            </div>

                            {/* Price */}
                            <div className="inline-flex items-baseline gap-2 px-5 py-3 bg-blue-600 rounded-lg">
                <span className="text-3xl font-bold text-white">
                  £{property.price.toLocaleString()}
                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-300 transition-colors">
                                <Share2 className="w-5 h-5 text-gray-700" />
                            </button>
                            <button className="p-3 bg-gray-50 hover:bg-red-50 rounded-lg border border-gray-300 hover:border-red-300 transition-colors group">
                                <Heart className="w-5 h-5 text-gray-700 group-hover:text-red-500" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mb-6">
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 md:p-6 overflow-hidden">
                        <PropertyGallery images={property.images} />
                    </div>
                </div>

                {/* Tabs (Details, Features, etc.) */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8">
                    <PropertyTabs property={property} />
                </div>

                {/* Call to Action */}
                <div className="mt-6 bg-blue-600 rounded-lg shadow-md p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Interested in this property?
                    </h2>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Get in touch with us today to schedule a viewing or learn more about this property.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                            Schedule Viewing
                        </button>
                        <button className="px-6 py-3 bg-blue-700 text-white border-2 border-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                            Contact Agent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}