const db = require('../db')
const {Type , Item} = require('../models/plant')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const type1 = await new Type(
      {
        type:'Tables' ,
        description: 'A versatile collection of tables, perfect for dining, working, or displaying décor. Crafted from high-quality materials to suit any home style, from modern to traditional. Available in various sizes and finishes to complement your space effortlessly.',
    })
    type1.save()

    const type2 = await new Type(
        {
          type:'Bedframes' ,
          description: 'Durable and stylish bedframes designed to support your mattress and enhance your bedroom’s aesthetic. Choose from a wide range of sizes and styles, from minimalist metal frames to elegant wooden designs, combining comfort and stability.',
      })
      type2.save()

      const type3 = await new Type(
        {
          type: 'Chairs' ,
          description: 'Ergonomically designed chairs for your dining room, office, or outdoor setting. Available in various styles, from classic wooden chairs to sleek, modern designs, offering comfortable seating for any occasion.',
      })
      type3.save()

      const type4 = await new Type(
        {
          type:'Lights' ,
          description: "Illuminate your space with our collection of modern and elegant lights. From chandeliers to floor lamps, find the perfect lighting solution to enhance your home's atmosphere while adding a touch of sophistication.",
      })
      type4.save()

      const type5 = await new Type(
        {
          type: 'Dressers',
          description: 'Spacious and stylish dressers, perfect for organizing clothes, accessories, and more. Crafted from premium materials, these dressers blend functionality and design, providing ample storage space while enhancing any bedroom décor.',
      })
      type5.save()

      const items = [
        {
            name: 'Oak Dining Table',
            type: type1._id, 
            image: 'images/oak dining table.webp',
            priceUSD: 399,
            dimensions: {   
                height: '30"',
                width: '36"',
                length: '72"'
            },
            material: 'Solid Oak',
            isInStock: true,
            stock: 15
        },

        {
            name: 'Glass Coffee Table',
            type: type1._id, 
            image: 'images/glass coffee table.webp',
            priceUSD: 199,
            dimensions: {   
                height: '18"',
                width: '24"',
                length: '48"'
            },
            material: 'Glass and Steel',
            isInStock: true,
            stock: 20
        },
        {
            name: 'Rustic Farmhouse Table',
            type: type1._id, 
            image: 'images/farmhouse table.jpg',
            priceUSD: 549,
            dimensions: {   
                height: '31"',
                width: '40"',
                length: '84"'
            },
            material: 'Reclaimed Wood',
            isInStock: false,
            stock: 0
        },
        {
            name: 'Modern Round Dining Table',
            type: type1._id, 
            image: 'images/round dining table.jpg',
            priceUSD: 299,
            dimensions: {   
                height: '30"',
                diameter: '48"'
            },
            material: 'MDF with Veneer',
            isInStock: true,
            stock: 10
        },

        {
            name: 'Compact Folding Table',
            type: type1._id, 
            image: 'images/folding table.jpg',
            priceUSD: 99,
            dimensions: {   
                height: '28"',
                width: '30"',
                length: '60"'
            },
            material: 'Aluminum and Plastic',
            isInStock: true,
            stock: 50
        },

        {
            name: 'Queen Platform Bed',
            type: type2._id, 
            image: 'images/queen wood bed.webp',
            priceUSD: 599,
            dimensions: {   
                height: '14"',
                width: '60"',
                length: '80"',
                headboardHeight: '48"'
            },
            material: 'Soild Wood',
            isInStock: true,
            stock: 8
        },

        {
            name: 'King Upholster Bed',
            type: type2._id, 
            image: 'images/king upholstered.jpg',
            priceUSD: 799,
            dimensions: {   
                height: '16"',
                width: '76"',
                length: '80"',
                headboardHeight: '54"'
            },
            material: 'Fabric and Wood',
            isInStock: true,
            stock: 5
        },

        {
            name: 'Twin Metal Bed Frame',
            type: type2._id, 
            image: 'images/twin bed.jpg',
            priceUSD: 249,
            dimensions: {   
                height: '12"',
                width: '39"',
                length: '75"',
                headboardHeight: '42"'
            },
            material: 'Metal',
            isInStock: true,
            stock: 25
        },

        {
            name: 'Full Storage Bed',
            type: type2._id, 
            image: 'images/full bed.jpg',
            priceUSD: 699,
            dimensions: {   
                height: '15"',
                width: '54"',
                length: '75"',
                headboardHeight: '50"'
            },
            material: 'Wood with Drawers',
            isInStock: false,
            stock: 0
        },

        {
            name: 'Sleigh Bed',
            type: type2._id, 
            image: 'images/sleigh bed.jpg',
            priceUSD: 899,
            dimensions: {   
                height: '14"',
                width: '60"',
                length: '80"',
                headboardHeight: '52"'
            },
            material: 'Soild Cherry Wood',
            isInStock: true,
            stock: 3
        },

        {
            name: 'Leather Office Chair',
            type: type3._id, 
            image: 'images/leather chair.jpg',
            priceUSD: 229,
            dimensions: {   
                height: '36"',
                width: '20"',
                depth:'18"' ,
                seatHeight: '18"'
            },
            material: 'Leather and Metal',
            isInStock: true,
            stock: 40
        },

        {
            name: 'Modern Dining Chair',
            type: type3._id, 
            image: 'images/dining chair.webp',
            priceUSD: 149,
            dimensions: {   
                height: '34"',
                width: '18"',
                depth:'17"' ,
                seatHeight: '17"'
            },
            material: 'Fabric and Wood',
            isInStock: true,
            stock: 25
        },

        {
            name: 'Outdoor Patio Chair',
            type: type3._id, 
            image: 'images/patio chair.jpg',
            priceUSD: 89,
            dimensions: {   
                height: '32"',
                width: '22"',
                depth:'20"' ,
                seatHeight: '16"'
            },
            material: 'Wicker Aluminum',
            isInStock: true,
            stock: 50
        },

        {
            name: 'Vintage Wooden Rocking Chair',
            type: type3._id,
            image: 'images/rocking chair.jpg',
            priceUSD: 299,
            dimensions: {
                height: '38"',
                width: '24"',
                depth: '22"',
                seatHeight: '18"',
            },
            material: 'Solid Oak',
            isInStock: false,
            stock: 0
        },
        {
            name: 'Ergonomic Mesh Chair',
            type: type3._id,
            image: 'images/mesh chair.jpg',
            priceUSD: 199,
            dimensions: {
                height: '40"',
                width: '19"',
                depth: '18"',
                seatHeight: '18"',
            },
            material: 'Mesh and Plastic',
            isInStock: true,
            stock: 30
        },

        // Lights
        {
            name: 'Industrial Pendant Light',
            type: type4._id,
            image: 'images/pendant light.jpg',
            priceUSD: 149,
            dimensions: {
                height: '10"',
                diameter: '12"',
            },
            material: 'Metal',
            isInStock: true,
            stock: 35
        },
        {
            name: 'Modern Floor Lamp',
            type: type4._id,
            image: 'images/floor lamp.jpg',
            priceUSD: 199,
            dimensions: {
                height: '60"',
            },
            material: 'Steel and Fabric',
            isInStock: true,
            stock: 20
        },
        {
            name: 'Crystal Chandelier',
            type: type4._id,
            image: 'images/chandelier.jpg',
            priceUSD: 599,
            dimensions: {
                height: '24"',
                diameter: '28"',
            },
            material: 'Crystal and Metal',
            isInStock: false,
            stock: 0
        },
        {
            name: 'LED Desk Lamp',
            type: type4._id,
            image: 'images/led lamp.webp',
            priceUSD: 49,
            dimensions: {
                height: '18"',
            },
            material: 'Plastic',
            isInStock: true,
            stock: 100
        },
        {
            name: 'Wall Sconce Light',
            type: type4._id,
            image: 'images/wall light.jpg',
            priceUSD: 99,
            dimensions: {
                height: '12"',
                width: '6"',
            },
            material: 'Metal and Glass',
            isInStock: true,
            stock: 50
        },

        // Dressers
        {
            name: '6-Drawer Wooden Dresser',
            type: type5._id,
            image: 'images/wooden dresser.jpg',
            priceUSD: 599,
            dimensions: {
                height: '34"',
                width: '60"',
                depth: '18"',
            },
            material: 'Solid Wood',
            isInStock: true,
            stock: 10
        },
        {
            name: '3-Drawer Modern Dresser',
            type: type5._id,
            image: 'images/3 drawer dresser.avif',
            priceUSD: 299,
            dimensions: {
                height: '30"',
                width: '36"',
                depth: '16"',
            },
            material: 'MDF with Veneer',
            isInStock: true,
            stock: 15
        },
        {
            name: 'Vintage Oak Dresser',
            type: type5._id,
            image: 'images/vintage dresser.webp',
            priceUSD: 699,
            dimensions: {
                height: '38"',
                width: '54"',
                depth: '20"',
            },
            material: 'Solid Oak',
            isInStock: true,
            stock: 5
        },
        {
            name: 'Highboy 5-Drawer Dresser',
            type: type5._id,
            image: 'images/highboy.jpg',
            priceUSD: 499,
            dimensions: {
                height: '48"',
                width: '30"',
                depth: '18"',
            },
            material: 'Pine Wood',
            isInStock: true,
            stock: 8
        },
        {
            name: 'Scandinavian 4-Drawer Dresser',
            type: type5._id,
            image: 'images/4 drawer.webp',
            priceUSD: 549,
            dimensions: {
                height: '36"',
                width: '40"',
                depth: '18"',
            },
            material: 'MDF with Ash Veneer',
            isInStock: false,
            stock: 0
        },


      ]
    

    await Item.insertMany(items)
    console.log("Created some items!")
}
const run = async () => {
    await main()
    db.close()
}

run()