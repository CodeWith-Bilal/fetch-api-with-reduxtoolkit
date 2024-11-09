import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const BooksPage: React.FC = () => {
  return (
    <div>
      <h2>Books</h2>
      <div style={{ marginTop: 12 }}>
        <BookForm />
      </div>
      <div style={{ marginTop: 12 }}>
        <BookList />
      </div>
    </div>
  );
};

export default BooksPage;
