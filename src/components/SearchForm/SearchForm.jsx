import { AiOutlineSearch } from 'react-icons/ai';
import {
  SearchFormStyled,
  SearchFormWrap,
  SearchFormBtn,
  SearchFormInput,
} from './SearchForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyInit } from 'components/App.styled';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notify.info('Please, enter your request', notifyInit);
      return;
    }

    setSearchParams({ query: query.trim() });

    setQuery('');
    // setSearchParams({}); //* If URL to be cleared

    onSubmit(query);
  };

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
    setSearchParams({ query: value.trim() });
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <SearchFormWrap>
        <SearchFormBtn type="submit">
          <AiOutlineSearch />
        </SearchFormBtn>
        <SearchFormInput
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={query}
        />
      </SearchFormWrap>
    </SearchFormStyled>
  );
};
