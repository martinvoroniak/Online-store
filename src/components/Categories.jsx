import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ items, onClickCategory }) {
    return (
        <div>
            <ul>
                <li onClick={() => onClickCategory(null)}>Всі</li>
                {items &&
                    items.map((name, index) => (
                        <li
                            onClick={() => onClickCategory(index)}
                            key={`${name}_${index}`}
                        >
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { items: [] };

export default Categories;
