import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
    {
        name: 'IV Solutions & Drugs',
        description: 'All large‐volume parenterals, injectables, or irrigation solutions',
        count: '300+ Products'
    },
    {
        name: 'Sutures & Staplers',
        description: 'Absorbable, nonabsorbable, staplers, etc.',
        count: '150+ Products'
    },
    {
        name: 'Wound Care & Dressings',
        description: 'Foams, hydrocolloids, gauze pads, bandages, tapes',
        count: '200+ Products'
    },
    {
        name: 'Gloves & Hand-Hygiene',
        description: 'Sterile surgical gloves, exam gloves, hand disinfectants, scrubs',
        count: '100+ Products'
    },
    {
        name: 'Respiratory & Airway',
        description: 'Endotracheal tubes, tracheostomy tubes, circuits, masks, filters, etc.',
        count: '180+ Products'
    },
    {
        name: 'Catheters & Urology',
        description: 'Foley catheters, ureteric catheters, stents, drainage bags',
        count: '120+ Products'
    },
    {
        name: 'Orthotics & Supports',
        description: 'Lumbar belts, abdominal corsets, knee braces, cervical collars',
        count: '150+ Products'
    },
    {
        name: 'Diagnostic Strips & Sampling',
        description: 'Glucometer test strips, lancets, ABG syringes, vacutainers',
        count: '80+ Products'
    },
    {
        name: 'General Disposables & Packs',
        description: 'Drapes, gowns, procedure kits, suction devices, syringes, needles',
        count: '400+ Products'
    },
    {
        name: 'Ostomy & Stoma Care',
        description: 'One‐piece/Two‐piece ostomy systems, stoma powders/pastes, belts',
        count: '90+ Products'
    },
    {
        name: 'Sterilization & Disinfection',
        description: 'Chemical indicators, wraps, disinfectant solutions, sterilant cartridges',
        count: '120+ Products'
    }
];

const Categories = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const categoriesPerPage = 6;
    const totalPages = Math.ceil(categories.length / categoriesPerPage);
    const navigate = useNavigate();

    const visibleCategories = categories.slice(
        currentPage * categoriesPerPage,
        (currentPage + 1) * categoriesPerPage
    );

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));
    };

    const handleCategoryClick = (selectedCategory) => {
        // Instead of adding the category to the URL, pass it as state.
        navigate('/collection', { state: { category: selectedCategory } });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Browse Categories</h3>
                {categories.length > categoriesPerPage && (
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={prevPage}
                            aria-label="Previous page"
                            className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextPage}
                            aria-label="Next page"
                            className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                )}
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleCategories.map((cat) => (
                    <div
                        key={cat.name}
                        onClick={() => handleCategoryClick(cat.name)}
                        className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{cat.name}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{cat.count}</p>
                                </div>
                                <ChevronRight className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                            </div>
                            <p className="text-sm text-gray-600 border-t pt-2 mt-2">
                                {cat.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;