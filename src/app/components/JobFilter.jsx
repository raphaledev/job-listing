function JobFilter({ filters, selectedFilters, onFilterChange, onRemoveFilter, onClearFilters }) {
    return (
        <div className="flex flex-col lg:flex-row rounded-md w-5/6 mx-auto transform -translate-y-1/2 bg-white justify-between p-4 font-bold">
            <select className="mx-auto font-normal lg:mx-0" onChange={onFilterChange} value="">
            <option value="" disabled>Select a filter...</option>
            {filters.map(filter => (
                !selectedFilters.includes(filter) && <option key={filter} value={filter}>{filter}</option>
            ))}
            </select>
    
            <div className="flex flex-wrap gap-4 mt-4">
            {selectedFilters.map(filter => (
                <p key={filter} className="flex gap-2 text-desaturated-cyan bg-light-cyan-background rounded-lg items-center">
                    <span className="pl-2">{filter}</span>
                    <button className="text-white bg-desaturated-cyan p-2 rounded-r-lg" onClick={() => onRemoveFilter(filter)}>
                      x
                    </button>
                </p>
            ))}
            </div>
    
            {selectedFilters.length > 0 && 
            <button className="mt-2 text-dark-cyan" onClick={onClearFilters}>
                Clear
            </button>
            }
        </div>
    );
}

export default JobFilter;
