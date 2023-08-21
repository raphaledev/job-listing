"use client"
import { useState } from 'react';
import JobFilter from './components/JobFilter';
import JobOffer from './components/JobOffer';
import jobListings from '/public/data.json';

export default function Home() {
  const allLanguages = [];
  const allRoles = [];

  jobListings.forEach(listing => {
    allLanguages.push(...listing.languages);
    allRoles.push(listing.role);
  });

  // Get unique languages and roles
  const uniqueLanguages = [...new Set(allLanguages)];
  const uniqueRoles = [...new Set(allRoles)];

  const filters = [...uniqueLanguages, ...uniqueRoles];
  
  const [selectedFilters, setSelectedFilters] = useState([]);

  const onFilterChange = (event) => {
    const { value } = event.target;
    if (value && !selectedFilters.includes(value)) {
      setSelectedFilters([...selectedFilters, value]);
    }
  };

  const onRemoveFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter(item => item !== filter));
  };

  const onClearFilters = () => {
    setSelectedFilters([]);
  };

  const filteredListings = jobListings.filter(listing => {
    const allItems = [...listing.languages, listing.role];
    return selectedFilters.every(filter => allItems.includes(filter));
  });

  return (
    <>
      <header className='bg-desaturated-cyan'>
        <svg className='w-full lg:hidden' xmlns="http://www.w3.org/2000/svg" width="375" height="156"><g fill="#5CA5A5"><path fill="#63BABA" fill-rule="evenodd" d="M-86.732 487.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L309.926-95.424c51.441-51.434 134.836-51.434 186.277 0C547.634-44 547.64 39.38 496.216 90.813c-.005.004-.01.008-.013.013L99.543 487.429c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013L-134.766-23.6C-83.325-75.034.07-75.034 51.511-23.6c51.431 51.424 51.437 134.805.013 186.237l-.013.013-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0z"/></g></svg>
        <svg className='w-full hidden lg:block'width="1440" height="156"><defs><path id="a" d="M0 0h1440v156H0z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use xlinkHref="#a"/><g mask="url(#b)" fill="#63BABA"><path d="M495.73 ... 196.373 0Z"/></g></g></svg>
      </header>
      <main>
        <JobFilter
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterChange={onFilterChange}
        onRemoveFilter={onRemoveFilter}
        onClearFilters={onClearFilters}
        />

        <div className='flex flex-col gap-8'>
          {filteredListings.map(listing => (
            <JobOffer key={listing.id} job={listing} />
          ))}
        </div>
      </main>
    </>
  )
}
