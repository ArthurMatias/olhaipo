import { useState } from "react";
import { Header } from "./components/Header";
import { CategoryFilter } from "./components/CategoryFilter";
import { FilterBar } from "./components/FilterBar";
import { PropertyGrid } from "./components/PropertyGrid";
import { Footer } from "./components/Footer";
import { SignUp } from "./components/SignUp";
import { PropertyDetails } from "./components/PropertyDetails";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");

  const handlePropertyClick = (propertyId: string) => {
    setSelectedPropertyId(propertyId);
    setCurrentPage("property");
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    if (page === "home") {
      setSelectedPropertyId("");
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "signup":
        return <SignUp />;
      case "property":
        return (
          <PropertyDetails
            propertyId={selectedPropertyId}
            onBack={() => handleNavigation("home")}
          />
        );
      case "home":
      default:
        return (
          <>
            <CategoryFilter />
            <FilterBar />
            <PropertyGrid onPropertyClick={handlePropertyClick} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      {renderPage()}
      {currentPage !== "signup" && currentPage !== "property" && <Footer />}
    </div>
  );
}
