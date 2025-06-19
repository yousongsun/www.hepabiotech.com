import type React from 'react';

const products = [
  {
    id: 1,
    name: '产品一',
    description: '这是产品一的描述信息。',
    price: '¥100',
    image: 'https://placehold.co/200/png?text=Product',
  },
  {
    id: 2,
    name: '产品二',
    description: '这是产品二的描述信息。',
    price: '¥200',
    image: 'https://placehold.co/200/png?text=Product',
  },
  {
    id: 3,
    name: '产品三',
    description: '这是产品三的描述信息。',
    price: '¥300',
    image: 'https://placehold.co/200/png?text=Product',
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">产品列表</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4 text-center">
              {product.description}
            </p>
            <span className="text-lg font-bold text-green-600">
              {product.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
