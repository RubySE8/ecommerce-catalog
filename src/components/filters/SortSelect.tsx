// src/components/filters/SortSelect.tsx
import type { SortOption } from '../../hooks/useProductFilters';

interface SortSelectProps {
  sortOrder: SortOption;
  onSortChange: (value: SortOption) => void;
}

export const SortSelect = ({ sortOrder, onSortChange }: SortSelectProps) => {
  return (
    <div className="filter-group">
      <label htmlFor="sort-select" className="filter-label">Ordenar por:</label>
      <select
        id="sort-select"
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="filter-select"
      >
        <option value="none">Sin ordenar</option>
        <option value="price-asc">Precio: Menor a Mayor</option>
        <option value="price-desc">Precio: Mayor a Menor</option>
      </select>
    </div>
  );
};