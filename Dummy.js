db.products.insert(
    {
        _id:2,
        name:"Pencil",
        price:1.20,
        stock:32,
        reviews: [
            {
                authorName: "Saldina",
                rating:5,
                review:"Best Pencil ever."
            },
            {
                authorName: "John",
                rating:4,
                review:"Nice product!"
            }
        ]
    }
)