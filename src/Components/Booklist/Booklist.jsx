import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import BookListItem from './BookListItem'
import fetchAllBooks from '../../store/reducers/BookCreator';

const BookList = () => {
  const { books, booksLoading, booksError } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchAllBooks())
  }, [])

  if (booksError) {
    return <div>{booksError}</div>
  }

  return (
    <ul>
      {booksLoading? 'loading':
      books?.map((book) => (
        <BookListItem key={`book-item-${book.id}`} book={book}/>
      ))}
    </ul>
  );
};

export default BookList;