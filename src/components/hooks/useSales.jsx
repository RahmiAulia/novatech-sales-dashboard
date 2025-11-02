import { useState, useEffect } from 'react';

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function useSales() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        const salesData = data.products.map(p => ({
          id: p.id,
          product: p.title,
          stock: p.stock,
          price: p.price,
          category: p.category,
          rating: p.rating,
          date: randomDate(new Date(2023, 0, 1), new Date())
        }));
        setSales(salesData);
        setLoading(false);
      });
  }, []);

  return { sales, loading };
}
