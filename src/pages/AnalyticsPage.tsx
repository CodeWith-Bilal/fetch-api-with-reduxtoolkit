import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";

const AnalyticsPage: React.FC = () => {
  const books = useSelector((s: RootState) => (s as any).books.items as any[]);
  const totalBooks = books.reduce((sum, b) => sum + b.quantity, 0);
  const inventoryValue = books.reduce(
    (sum, b) => sum + b.price * b.quantity,
    0
  );

  return (
    <div>
      <h2>Analytics</h2>
      <p>Total distinct titles: {books.length}</p>
      <p>Total copies in stock: {totalBooks}</p>
      <p>Total inventory value: ${inventoryValue.toFixed(2)}</p>
    </div>
  );
};

export default AnalyticsPage;
