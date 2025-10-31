import { Link } from 'react-router-dom'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const CategoryTile = ({ to, imgSrc, title, className = '' }) => (
  <Link to={to}>
  <div className={`group relative overflow-hidden rounded-lg shadow-lg h-full ${className}`}>
    <img src={imgSrc} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm flex items-center">Shop now <TrendingFlatIcon className="ml-1" /></p>
    </div>
  </div>
  </Link>
);

const Categories = () => {
  const categories = [
    { to: "./products/1", imgSrc: "img/categories/cat1.webp", title: "Mixers & Grinders", className: "col-span-2 sm:col-span-1 row-span-1" },
    { to: "./products/2", imgSrc: "img/categories/cat2.jpg", title: "Breakfast Appliances", className: "col-span-2 sm:col-span-1 row-span-1" },
    { to: "./products/4", imgSrc: "img/categories/cat4.webp", title: "Personal Grooming", className: "col-span-2 sm:col-span-1 row-span-1" },
    { to: "./products/3", imgSrc: "img/categories/cat3.webp", title: "Heating Appliances", className: "col-span-2 sm:col-span-1 row-span-2" },
    { to: "./products/5", imgSrc: "img/categories/cat5.webp", title: "Fans", className: "col-span-2 sm:col-span-1 row-span-1" },
    { to: "./products/6", imgSrc: "img/categories/cat6.webp", title: "Vacuum Cleaners", className: "col-span-2 sm:col-span-2 row-span-1" },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map(category => (
          <div key={category.title} className={category.className}>
            <CategoryTile {...category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories