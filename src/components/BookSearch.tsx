import React from 'react';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const BookSearch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: 12 }}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by title or author..."
        style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ddd' }}
      />
    </div>
  );
};

export default BookSearch;
