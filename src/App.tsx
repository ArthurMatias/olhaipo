import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { FilterBar } from './components/FilterBar';
import { PropertyGrid } from './components/PropertyGrid';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CategoryFilter />
      <FilterBar />
      <PropertyGrid />
      <Footer />
    </div>
  );
}