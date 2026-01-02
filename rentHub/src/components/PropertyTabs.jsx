// src/components/PropertyTabs.jsx
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function PropertyTabs({ property }) {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
      <Tabs>
        {/* Tab headers */}
        <TabList className="flex border-b border-gray-200 bg-gray-50">
          <Tab className="flex-1 text-center py-3 cursor-pointer text-gray-600 font-medium hover:bg-gray-100 selected:!bg-blue-600 selected:!text-white transition-colors duration-200">
            Description
          </Tab>
          <Tab className="flex-1 text-center py-3 cursor-pointer text-gray-600 font-medium hover:bg-gray-100 selected:!bg-blue-600 selected:!text-white transition-colors duration-200">
            Floor Plan
          </Tab>
          <Tab className="flex-1 text-center py-3 cursor-pointer text-gray-600 font-medium hover:bg-gray-100 selected:!bg-blue-600 selected:!text-white transition-colors duration-200">
            Map
          </Tab>
        </TabList>

        {/* Tab panels */}
        <TabPanel className="p-4 text-gray-700 text-sm md:text-base">
          <p>{property.descriptionLong}</p>
        </TabPanel>

        <TabPanel className="p-4 flex justify-center">
          <img
            src={property.floorPlan}
            alt="Floor plan"
            className="max-w-full h-auto rounded shadow-sm"
          />
        </TabPanel>

        <TabPanel className="p-4">
          <iframe
            title="map"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow-sm"
            src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&output=embed`}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
}
