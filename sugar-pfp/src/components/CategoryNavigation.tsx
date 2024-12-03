import React from 'react';

interface CategoryNavigationProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ categories, onSelectCategory }) => {
  return (
    <nav className="category-navigation">
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryNavigation;
