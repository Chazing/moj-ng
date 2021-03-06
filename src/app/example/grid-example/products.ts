﻿export const sampleProducts = [
    {
        "ID": 1,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": true,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 8, 20)
    },
    {
        "ID": 2,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": -3,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "FirstOrderedOn": new Date(1996, 7, 12)
    },
    {
        "ID": 3,
        "ProductName": "Aniseed Syrup",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "UnitPrice": 10,
        "UnitsInStock": 13,
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 8, 26)
    },
    {
        "ID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 7, 17)
    },
    {
        "ID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 9, 19)
    },
    {
        "ID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "UnitPrice": 30,
        "UnitsInStock": 15,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        },
        "FirstOrderedOn": new Date(1996, 7, 22)
    },
    {
        "ID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "UnitPrice": 40,
        "UnitsInStock": 6,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "FirstOrderedOn": new Date(1996, 11, 1)
    },
    {
        "ID": 9,
        "ProductName": "Mishi Kobe Niku",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        },
        "FirstOrderedOn": new Date(1997, 1, 21)
    },
    {
        "ID": 10,
        "ProductName": "Ikura",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        },
        "FirstOrderedOn": new Date(1996, 8, 5)
    }
];

export const products = [{
    "ID": 1,
    "ProductName": ' דכעגכגכעדגךכלעחגףךכעחל דגכדגיכךל מכונת כב"יסה',
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "10 boxes x 20 bags",
    "UnitPrice": 0,
    "UnitsInStock": 39,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"doc",
    "Categories": [{
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    },
    {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }],
}, {
    "ID": 2,
    "ProductName": "מכונת ייבוש",
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": -3,
    "UnitsInStock": 17,
    "UnitsOnOrder": 40,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"pdf",
    "Categories": [{
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }]
}, {
    "ID": 3,
    "ProductName": "רובוט",
    "SupplierID": 1,
    "CategoryID": 2,
    "QuantityPerUnit": "12 - 550 ml bottles",
    "UnitPrice": 10.0000,
    "UnitsInStock": 13,
    "UnitsOnOrder": 70,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"tif",
    "Categories": [{
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }]
}, {
    "ID": 4,
    "ProductName": "Chef Anton's Cajun Seasoning",
    "SupplierID": 2,
    "CategoryID": 2,
    "QuantityPerUnit": "48 - 6 oz jars",
    "UnitPrice": 22.0000,
    "UnitsInStock": 53,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"doc"
}, {
    "ID": 5,
    "ProductName": "Chef Anton's Gumbo Mix",
    "SupplierID": 2,
    "CategoryID": 2,
    "QuantityPerUnit": "36 boxes",
    "UnitPrice": 21.3500,
    "UnitsInStock": 0,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"xlsx"
}, {
    "ID": 6,
    "ProductName": "Grandma's Boysenberry Spread",
    "SupplierID": 3,
    "CategoryID": 2,
    "QuantityPerUnit": "12 - 8 oz jars",
    "UnitPrice": 25.0000,
    "UnitsInStock": 120,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"doc",
    "Categories": [{
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }]
}, {
    "ID": 7,
    "ProductName": "Uncle Bob's Organic Dried Pears",
    "SupplierID": 3,
    "CategoryID": 7,
    "QuantityPerUnit": "12 - 1 lb pkgs.",
    "UnitPrice": 30.0000,
    "UnitsInStock": 15,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"pnj"
}, {
    "ID": 8,
    "ProductName": "Northwoods Cranberry Sauce",
    "SupplierID": 3,
    "CategoryID": 2,
    "QuantityPerUnit": "12 - 12 oz jars",
    "UnitPrice": 40.0000,
    "UnitsInStock": 6,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"jpg"
}, {
    "ID": 9,
    "ProductName": "Mishi Kobe Niku",
    "SupplierID": 4,
    "CategoryID": 6,
    "QuantityPerUnit": "18 - 500 g pkgs.",
    "UnitPrice": 97.0000,
    "UnitsInStock": 29,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"xlsx"
}, {
    "ID": 10,
    "ProductName": "Ikura",
    "SupplierID": 4,
    "CategoryID": 8,
    "QuantityPerUnit": "12 - 200 ml jars",
    "UnitPrice": 31.0000,
    "UnitsInStock": 31,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"msg"
}, {
    "ID": 11,
    "ProductName": "Queso Cabrales",
    "SupplierID": 5,
    "CategoryID": 4,
    "QuantityPerUnit": "1 kg pkg.",
    "UnitPrice": 21.0000,
    "UnitsInStock": 22,
    "UnitsOnOrder": 30,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"xml"
}, {
    "ID": 12,
    "ProductName": "Queso Manchego La Pastora",
    "SupplierID": 5,
    "CategoryID": 4,
    "QuantityPerUnit": "10 - 500 g pkgs.",
    "UnitPrice": 38.0000,
    "UnitsInStock": 86,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    },
    "FirstOrderedOn": new Date(1996, 7, 12),
    "Format":"html"
}, {
    "ID": 13,
    "ProductName": "Konbu",
    "SupplierID": 6,
    "CategoryID": 8,
    "QuantityPerUnit": "2 kg box",
    "UnitPrice": 60000,
    "UnitsInStock": 24,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 14,
    "ProductName": "Tofu",
    "SupplierID": 6,
    "CategoryID": 7,
    "QuantityPerUnit": "40 - 100 g pkgs.",
    "UnitPrice": 23.2500,
    "UnitsInStock": 35,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    },
    "Format":'folder',
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 15,
    "ProductName": "Genen Shouyu",
    "SupplierID": 6,
    "CategoryID": 2,
    "QuantityPerUnit": "24 - 250 ml bottles",
    "UnitPrice": 15.5000,
    "UnitsInStock": 39,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 16,
    "ProductName": "Pavlova",
    "SupplierID": 7,
    "CategoryID": 3,
    "QuantityPerUnit": "32 - 500 g boxes",
    "UnitPrice": 17.4500,
    "UnitsInStock": 29,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 17,
    "ProductName": "Alice Mutton",
    "SupplierID": 7,
    "CategoryID": 6,
    "QuantityPerUnit": "20 - 1 kg tins",
    "UnitPrice": 39.0000,
    "UnitsInStock": 0,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 18,
    "ProductName": "Carnarvon Tigers",
    "SupplierID": 7,
    "CategoryID": 8,
    "QuantityPerUnit": "16 kg pkg.",
    "UnitPrice": 62.5000,
    "UnitsInStock": 42,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 19,
    "ProductName": "Teatime Chocolate Biscuits",
    "SupplierID": 8,
    "CategoryID": 3,
    "QuantityPerUnit": "10 boxes x 12 pieces",
    "UnitPrice": 9.2000,
    "UnitsInStock": 25,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 20,
    "ProductName": "Sir Rodney's Marmalade",
    "SupplierID": 8,
    "CategoryID": 3,
    "QuantityPerUnit": "30 gift boxes",
    "UnitPrice": 81.0000,
    "UnitsInStock": 40,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 21,
    "ProductName": "Sir Rodney's Scones",
    "SupplierID": 8,
    "CategoryID": 3,
    "QuantityPerUnit": "24 pkgs. x 4 pieces",
    "UnitPrice": 10.0000,
    "UnitsInStock": 3,
    "UnitsOnOrder": 40,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 22,
    "ProductName": "Gustaf's Knäckebröd",
    "SupplierID": 9,
    "CategoryID": 5,
    "QuantityPerUnit": "24 - 500 g pkgs.",
    "UnitPrice": 21.0000,
    "UnitsInStock": 104,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 23,
    "ProductName": "Tunnbröd",
    "SupplierID": 9,
    "CategoryID": 5,
    "QuantityPerUnit": "12 - 250 g pkgs.",
    "UnitPrice": 9.0000,
    "UnitsInStock": 61,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 24,
    "ProductName": "Guaraná Fantástica",
    "SupplierID": 10,
    "CategoryID": 1,
    "QuantityPerUnit": "12 - 355 ml cans",
    "UnitPrice": 4.5000,
    "UnitsInStock": 20,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 25,
    "ProductName": "NuNuCa Nuß-Nougat-Creme",
    "SupplierID": 11,
    "CategoryID": 3,
    "QuantityPerUnit": "20 - 450 g glasses",
    "UnitPrice": 14.0000,
    "UnitsInStock": 76,
    "UnitsOnOrder": 0,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 26,
    "ProductName": "Gumbär Gummibärchen",
    "SupplierID": 11,
    "CategoryID": 3,
    "QuantityPerUnit": "100 - 250 g bags",
    "UnitPrice": 31.2300,
    "UnitsInStock": 15,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 27,
    "ProductName": "Schoggi Schokolade",
    "SupplierID": 11,
    "CategoryID": 3,
    "QuantityPerUnit": "100 - 100 g pieces",
    "UnitPrice": 43.9000,
    "UnitsInStock": 49,
    "UnitsOnOrder": 0,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 28,
    "ProductName": "Rössle Sauerkraut",
    "SupplierID": 12,
    "CategoryID": 7,
    "QuantityPerUnit": "25 - 825 g cans",
    "UnitPrice": 45.6000,
    "UnitsInStock": 26,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 29,
    "ProductName": "Thüringer Rostbratwurst",
    "SupplierID": 12,
    "CategoryID": 6,
    "QuantityPerUnit": "50 bags x 30 sausgs.",
    "UnitPrice": 123.7900,
    "UnitsInStock": 0,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 30,
    "ProductName": "Nord-Ost Matjeshering",
    "SupplierID": 13,
    "CategoryID": 8,
    "QuantityPerUnit": "10 - 200 g glasses",
    "UnitPrice": 25.8900,
    "UnitsInStock": 10,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 31,
    "ProductName": "Gorgonzola Telino",
    "SupplierID": 14,
    "CategoryID": 4,
    "QuantityPerUnit": "12 - 100 g pkgs",
    "UnitPrice": 12.5000,
    "UnitsInStock": 0,
    "UnitsOnOrder": 70,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 32,
    "ProductName": "Mascarpone Fabioli",
    "SupplierID": 14,
    "CategoryID": 4,
    "QuantityPerUnit": "24 - 200 g pkgs.",
    "UnitPrice": 32.0000,
    "UnitsInStock": 9,
    "UnitsOnOrder": 40,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 33,
    "ProductName": "Geitost",
    "SupplierID": 15,
    "CategoryID": 4,
    "QuantityPerUnit": "500 g",
    "UnitPrice": 2.5000,
    "UnitsInStock": 112,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 34,
    "ProductName": "Sasquatch Ale",
    "SupplierID": 16,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": 14.0000,
    "UnitsInStock": 111,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 35,
    "ProductName": "Steeleye Stout",
    "SupplierID": 16,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": 18.0000,
    "UnitsInStock": 20,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 36,
    "ProductName": "Inlagd Sill",
    "SupplierID": 17,
    "CategoryID": 8,
    "QuantityPerUnit": "24 - 250 g  jars",
    "UnitPrice": 19.0000,
    "UnitsInStock": 112,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
}, {
    "ID": 37,
    "ProductName": "Gravad lax",
    "SupplierID": 17,
    "CategoryID": 8,
    "QuantityPerUnit": "12 - 500 g pkgs.",
    "UnitPrice": 26.0000,
    "UnitsInStock": 11,
    "UnitsOnOrder": 50,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ID": 38,
    "ProductName": "Côte de Blaye",
    "SupplierID": 18,
    "CategoryID": 1,
    "QuantityPerUnit": "12 - 75 cl bottles",
    "UnitPrice": 263.5000,
    "UnitsInStock": 17,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ID": 39,
    "ProductName": "Chartreuse verte",
    "SupplierID": 18,
    "CategoryID": 1,
    "QuantityPerUnit": "750 cc per bottle",
    "UnitPrice": 18.0000,
    "UnitsInStock": 69,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ID": 40,
    "ProductName": "Boston Crab Meat",
    "SupplierID": 19,
    "CategoryID": 8,
    "QuantityPerUnit": "24 - 4 oz tins",
    "UnitPrice": 18.4000,
    "UnitsInStock": 123,
    "UnitsOnOrder": 0,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ID": 41,
    "ProductName": "Jack's New England Clam Chowder",
    "SupplierID": 19,
    "CategoryID": 8,
    "QuantityPerUnit": "12 - 12 oz cans",
    "UnitPrice": 9.6500,
    "UnitsInStock": 85,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ID": 42,
    "ProductName": "Singaporean Hokkien Fried Mee",
    "SupplierID": 20,
    "CategoryID": 5,
    "QuantityPerUnit": "32 - 1 kg pkgs.",
    "UnitPrice": 14.0000,
    "UnitsInStock": 26,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ID": 43,
    "ProductName": "Ipoh Coffee",
    "SupplierID": 20,
    "CategoryID": 1,
    "QuantityPerUnit": "16 - 500 g tins",
    "UnitPrice": 46.0000,
    "UnitsInStock": 17,
    "UnitsOnOrder": 10,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ID": 44,
    "ProductName": "Gula Malacca",
    "SupplierID": 20,
    "CategoryID": 2,
    "QuantityPerUnit": "20 - 2 kg bags",
    "UnitPrice": 19.4500,
    "UnitsInStock": 27,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ID": 45,
    "ProductName": "Rogede sild",
    "SupplierID": 21,
    "CategoryID": 8,
    "QuantityPerUnit": "1k pkg.",
    "UnitPrice": 9.5000,
    "UnitsInStock": 5,
    "UnitsOnOrder": 70,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ID": 46,
    "ProductName": "Spegesild",
    "SupplierID": 21,
    "CategoryID": 8,
    "QuantityPerUnit": "4 - 450 g glasses",
    "UnitPrice": 12.0000,
    "UnitsInStock": 95,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ID": 47,
    "ProductName": "Zaanse koeken",
    "SupplierID": 22,
    "CategoryID": 3,
    "QuantityPerUnit": "10 - 4 oz boxes",
    "UnitPrice": 9.5000,
    "UnitsInStock": 36,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ID": 48,
    "ProductName": "Chocolade",
    "SupplierID": 22,
    "CategoryID": 3,
    "QuantityPerUnit": "10 pkgs.",
    "UnitPrice": 12.7500,
    "UnitsInStock": 15,
    "UnitsOnOrder": 70,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ID": 49,
    "ProductName": "Maxilaku",
    "SupplierID": 23,
    "CategoryID": 3,
    "QuantityPerUnit": "24 - 50 g pkgs.",
    "UnitPrice": 20.0000,
    "UnitsInStock": 10,
    "UnitsOnOrder": 60,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ID": 50,
    "ProductName": "Valkoinen suklaa",
    "SupplierID": 23,
    "CategoryID": 3,
    "QuantityPerUnit": "12 - 100 g bars",
    "UnitPrice": 16.2500,
    "UnitsInStock": 65,
    "UnitsOnOrder": 0,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ID": 51,
    "ProductName": "Manjimup Dried Apples",
    "SupplierID": 24,
    "CategoryID": 7,
    "QuantityPerUnit": "50 - 300 g pkgs.",
    "UnitPrice": 53.0000,
    "UnitsInStock": 20,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    }
}, {
    "ID": 52,
    "ProductName": "Filo Mix",
    "SupplierID": 24,
    "CategoryID": 5,
    "QuantityPerUnit": "16 - 2 kg boxes",
    "UnitPrice": 7.0000,
    "UnitsInStock": 38,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ID": 53,
    "ProductName": "Perth Pasties",
    "SupplierID": 24,
    "CategoryID": 6,
    "QuantityPerUnit": "48 pieces",
    "UnitPrice": 32.8000,
    "UnitsInStock": 0,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": true,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    }
}, {
    "ID": 54,
    "ProductName": "Tourtière",
    "SupplierID": 25,
    "CategoryID": 6,
    "QuantityPerUnit": "16 pies",
    "UnitPrice": 7.4500,
    "UnitsInStock": 21,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    }
}, {
    "ID": 55,
    "ProductName": "Pâté chinois",
    "SupplierID": 25,
    "CategoryID": 6,
    "QuantityPerUnit": "24 boxes x 2 pies",
    "UnitPrice": 24.0000,
    "UnitsInStock": 115,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 6,
        "CategoryName": "Meat/Poultry",
        "Description": "Prepared meats"
    }
}, {
    "ID": 56,
    "ProductName": "Gnocchi di nonna Alice",
    "SupplierID": 26,
    "CategoryID": 5,
    "QuantityPerUnit": "24 - 250 g pkgs.",
    "UnitPrice": 38.0000,
    "UnitsInStock": 21,
    "UnitsOnOrder": 10,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ID": 57,
    "ProductName": "Ravioli Angelo",
    "SupplierID": 26,
    "CategoryID": 5,
    "QuantityPerUnit": "24 - 250 g pkgs.",
    "UnitPrice": 19.5000,
    "UnitsInStock": 36,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ID": 58,
    "ProductName": "Escargots de Bourgogne",
    "SupplierID": 27,
    "CategoryID": 8,
    "QuantityPerUnit": "24 pieces",
    "UnitPrice": 13.2500,
    "UnitsInStock": 62,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ID": 59,
    "ProductName": "Raclette Courdavault",
    "SupplierID": 28,
    "CategoryID": 4,
    "QuantityPerUnit": "5 kg pkg.",
    "UnitPrice": 55.0000,
    "UnitsInStock": 79,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ID": 60,
    "ProductName": "Camembert Pierrot",
    "SupplierID": 28,
    "CategoryID": 4,
    "QuantityPerUnit": "15 - 300 g rounds",
    "UnitPrice": 34.0000,
    "UnitsInStock": 19,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ID": 61,
    "ProductName": "Sirop d'érable",
    "SupplierID": 29,
    "CategoryID": 2,
    "QuantityPerUnit": "24 - 500 ml bottles",
    "UnitPrice": 28.5000,
    "UnitsInStock": 113,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ID": 62,
    "ProductName": "Tarte au sucre",
    "SupplierID": 29,
    "CategoryID": 3,
    "QuantityPerUnit": "48 pies",
    "UnitPrice": 49.3000,
    "UnitsInStock": 17,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ID": 63,
    "ProductName": "Vegie-spread",
    "SupplierID": 7,
    "CategoryID": 2,
    "QuantityPerUnit": "15 - 625 g jars",
    "UnitPrice": 43.9000,
    "UnitsInStock": 24,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ID": 64,
    "ProductName": "Wimmers gute Semmelknödel",
    "SupplierID": 12,
    "CategoryID": 5,
    "QuantityPerUnit": "20 bags x 4 pieces",
    "UnitPrice": 33.2500,
    "UnitsInStock": 22,
    "UnitsOnOrder": 80,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 5,
        "CategoryName": "Grains/Cereals",
        "Description": "Breads, crackers, pasta, and cereal"
    }
}, {
    "ID": 65,
    "ProductName": "Louisiana Fiery Hot Pepper Sauce",
    "SupplierID": 2,
    "CategoryID": 2,
    "QuantityPerUnit": "32 - 8 oz bottles",
    "UnitPrice": 21.0500,
    "UnitsInStock": 76,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ID": 66,
    "ProductName": "Louisiana Hot Spiced Okra",
    "SupplierID": 2,
    "CategoryID": 2,
    "QuantityPerUnit": "24 - 8 oz jars",
    "UnitPrice": 17.0000,
    "UnitsInStock": 4,
    "UnitsOnOrder": 100,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    "ID": 67,
    "ProductName": "Laughing Lumberjack Lager",
    "SupplierID": 16,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": 14.0000,
    "UnitsInStock": 52,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ID": 68,
    "ProductName": "Scottish Longbreads",
    "SupplierID": 8,
    "CategoryID": 3,
    "QuantityPerUnit": "10 boxes x 8 pieces",
    "UnitPrice": 12.5000,
    "UnitsInStock": 6,
    "UnitsOnOrder": 10,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 3,
        "CategoryName": "Confections",
        "Description": "Desserts, candies, and sweet breads"
    }
}, {
    "ID": 69,
    "ProductName": "Gudbrandsdalsost",
    "SupplierID": 15,
    "CategoryID": 4,
    "QuantityPerUnit": "10 kg pkg.",
    "UnitPrice": 36.0000,
    "UnitsInStock": 26,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ID": 70,
    "ProductName": "Outback Lager",
    "SupplierID": 7,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 355 ml bottles",
    "UnitPrice": 15.0000,
    "UnitsInStock": 15,
    "UnitsOnOrder": 10,
    "ReorderLevel": 30,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ID": 71,
    "ProductName": "Flotemysost",
    "SupplierID": 15,
    "CategoryID": 4,
    "QuantityPerUnit": "10 - 500 g pkgs.",
    "UnitPrice": 21.5000,
    "UnitsInStock": 26,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ID": 72,
    "ProductName": "Mozzarella di Giovanni",
    "SupplierID": 14,
    "CategoryID": 4,
    "QuantityPerUnit": "24 - 200 g pkgs.",
    "UnitPrice": 34.8000,
    "UnitsInStock": 14,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
        "CategoryID": 4,
        "CategoryName": "Dairy Products",
        "Description": "Cheeses"
    }
}, {
    "ID": 73,
    "ProductName": "Röd Kaviar",
    "SupplierID": 17,
    "CategoryID": 8,
    "QuantityPerUnit": "24 - 150 g jars",
    "UnitPrice": 15.0000,
    "UnitsInStock": 101,
    "UnitsOnOrder": 0,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
    }
}, {
    "ID": 74,
    "ProductName": "Longlife Tofu",
    "SupplierID": 4,
    "CategoryID": 7,
    "QuantityPerUnit": "5 kg pkg.",
    "UnitPrice": 10.0000,
    "UnitsInStock": 4,
    "UnitsOnOrder": 20,
    "ReorderLevel": 5,
    "Discontinued": false,
    "Category": {
        "CategoryID": 7,
        "CategoryName": "Produce",
        "Description": "Dried fruit and bean curd"
    }
}, {
    "ID": 75,
    "ProductName": "Rhönbräu Klosterbier",
    "SupplierID": 12,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 0.5 l bottles",
    "UnitPrice": 7.7500,
    "UnitsInStock": 125,
    "UnitsOnOrder": 0,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ID": 76,
    "ProductName": "Lakkalikööri",
    "SupplierID": 23,
    "CategoryID": 1,
    "QuantityPerUnit": "500 ml",
    "UnitPrice": 18.0000,
    "UnitsInStock": 57,
    "UnitsOnOrder": 0,
    "ReorderLevel": 20,
    "Discontinued": false,
    "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    "ID": 77,
    "ProductName": "Original Frankfurter grüne Soße",
    "SupplierID": 12,
    "CategoryID": 2,
    "QuantityPerUnit": "12 boxes",
    "UnitPrice": 13.0000,
    "UnitsInStock": 32,
    "UnitsOnOrder": 0,
    "ReorderLevel": 15,
    "Discontinued": false,
    "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}];
