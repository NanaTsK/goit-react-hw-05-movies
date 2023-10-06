import {
  SearchFormStyled,
  SearchFormWrap,
  SearchFormBtn,
  SearchFormInput,
} from './SearchForm.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Notify } from 'notiflix';
import { notifyInit } from 'components/App.styled';

export const SearchForm = ({ onSubmit, query, setQuery }) => {
  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notify.info('Please, enter your request', notifyInit);
      return;
    }

    onSubmit(query);
  };

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
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
//* =============
// // import { useSearchParams } from 'react-router-dom';
// import {
//   SearchFormStyled,
//   SearchFormWrap,
//   SearchFormBtn,
//   SearchFormInput,
// } from './SearchForm.styled';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // import { Notify } from 'notiflix';
// import { notifyInit } from 'components/App.styled';

// export const SearchForm = ({ setSearchedMovies, query }) => {
//   // const [search, setSearch] = useSearchParams();
//   // const query = search.get('query') ?? '';

//   //   const handleSubmit = e => {
//   //     e.preventDefault();
//   //     setSearch({ query: query.trim() });
//   //     setSearchedMovies(query);
//   //   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (query === '') {
//       Notify.info('Please, enter your request', notifyInit);
//       return;
//     }
//     // setSearch({ query: query.trim() });
//     setSearchedMovies(query);
//   };

//   const handleChange = ({ target: { value } }) => {
//     setSearchedMovies(value);
//   };

//   return (
//     <SearchFormStyled onSubmit={handleSubmit}>
//       <SearchFormWrap>
//         <SearchFormBtn type="submit">
//           <AiOutlineSearch />
//         </SearchFormBtn>
//         <SearchFormInput
//           type="text"
//           name="searchQuery"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movies"
//           onChange={handleChange}
//           value={query}
//         />
//       </SearchFormWrap>
//     </SearchFormStyled>
//   );
// };

//*=============================
// import { useSearchParams } from 'react-router-dom';
// import {
//   SearchFormStyled,
//   SearchFormWrap,
//   SearchFormBtn,
//   SearchFormInput,
// } from './SearchForm.styled';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // import { Notify } from 'notiflix';
// import { notifyInit } from 'components/App.styled';

// export const SearchForm = ({ setSearchedMovies }) => {
//   const [search, setSearch] = useSearchParams();
//   const query = search.get('query') ?? '';

//   //   const handleSubmit = e => {
//   //     e.preventDefault();
//   //     setSearch({ query: query.trim() });
//   //     setSearchedMovies(query);
//   //   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (query === '') {
//       Notify.info('Please, enter your request', notifyInit);
//       return;
//     }
//     setSearch({ query: query.trim() });
//     setSearchedMovies(query);
//   };

//   const handleChange = ({ target: { value } }) => {
//     setSearch(value.trim() ? { query: value } : {});
//   };

//   return (
//     <SearchFormStyled onSubmit={handleSubmit}>
//       <SearchFormWrap>
//         <SearchFormBtn type="submit">
//           <AiOutlineSearch />
//         </SearchFormBtn>
//         <SearchFormInput
//           type="text"
//           name="searchQuery"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movies"
//           onChange={handleChange}
//           value={query}
//         />
//       </SearchFormWrap>
//     </SearchFormStyled>
//   );
// };
