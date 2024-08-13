import React, { useEffect } from 'react';
import { HiSearch as SearchIcon } from 'react-icons/hi';
import PropTypes from 'prop-types';


// const SearchBar = () => {
 const SearchBar = ({ onSearch }) => {
  useEffect(() => {
    const form = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');

    const handleSubmit = (event) => {
      event.preventDefault();
      const searchTerm = searchInput.value;
      console.log('Search term:', searchTerm);
      if (typeof onSearch === 'function') {
        onSearch(searchTerm);
      } else {
        console.error('onSearch is not a function');
      }

      searchInput.value = '';
    };

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    if (searchIcon) {
      searchIcon.addEventListener('click', () => form.requestSubmit());
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
      if (searchIcon) {
        searchIcon.removeEventListener('click', () => form.requestSubmit());
      }
    };
//   }, );
  }, [onSearch]);

  return (
    <div
      className="bg-[#e9e9e9] p-2 px-3 gap-3 items-center rounded-full w-[70%] hidden md:flex h-10"
    >
      <SearchIcon
        id="search-icon"
        className="text-[20px] text-gray-500 cursor-pointer"
      />
      <form id='search-form' className="w-full">
        <input
          type="text"
          id="search-input"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-[15px]"
        />
      </form>
    </div>
  );
};

// SearchBar.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };

export default SearchBar;
