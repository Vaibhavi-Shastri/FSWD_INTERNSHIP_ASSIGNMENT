import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "iPhone 14",
    category: "Electronics",
    price: 800,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487259_sd.jpg",
  },
  {
    id: 3,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    img: "https://laptopmedia.com/wp-content/uploads/2022/10/c08280389.jpg",
  },
  {
    id: 4,
    name: "Shoes",
    category: "Clothing",
    price: 50,
    img: "https://facts.net/wp-content/uploads/2023/12/15-jordan-shoes-facts-1701771501.jpg",
  },
  {
    id: 5,
    name: "Watch",
    category: "Accessories",
    price: 150,
    img: "https://m.media-amazon.com/images/I/71SKOyjXoUL._AC_SL1500_.jpg",
  },
];

function ProductListing() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  let filtered = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #f4f6f9;
        }

        .container {
          padding: 20px;
        }

        h1 {
          text-align: center;
        }

        /* Top Bar */
        .top-bar {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
          flex-wrap: wrap;
          gap: 10px;
        }

        .search {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #ccc;
        }

        .filter-btn {
          padding: 10px 15px;
          border-radius: 10px;
          border: none;
          background: #333;
          color: white;
          cursor: pointer;
        }

        /* Filter Panel */
        .filter-panel {
          background: white;
          padding: 15px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }

        select {
          margin: 10px;
          padding: 8px;
          border-radius: 8px;
        }

        /* Grid */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          background: white;
          border-radius: 15px;
          padding: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
        }

        .card img {
          width: 100%;
          border-radius: 10px;
        }

        .card h3 {
          margin: 10px 0 5px;
        }

        .price {
          color: green;
          font-weight: bold;
        }

        .category {
          font-size: 13px;
          color: #777;
        }
      `}</style>

      <div className="container">
        <h1>🛍 Product Store</h1>

        {/* Top Bar */}
        <div className="top-bar">
          <input
            className="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="filter-btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            ⚙️ Filter
          </button>
        </div>

        {/* Filter Panel */}
        {showFilter && (
          <div className="filter-panel">
            <label>Category:</label>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option>All</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Accessories</option>
            </select>

            <label>Sort by Price:</label>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="">None</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        )}

        {/* Products */}
        <div className="grid">
          {filtered.map((p) => (
            <div key={p.id} className="card">
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="category">{p.category}</p>
              <p className="price">₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductListing;
