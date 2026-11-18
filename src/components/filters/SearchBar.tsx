interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="filter-group">
      <label htmlFor="search-input" className="filter-label">Buscar producto:</label>
      <input
        id="search-input"
        type="text"
        placeholder="Ej. iPhone, Mascara..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="filter-input"
      />
    </div>
  );
};