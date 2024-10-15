const db = require('../db')
const {Type , Item} = require('../models/plant')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const type1 = await new Type(
      {
        type:'Table' ,
        description: '',
    })
    type1.save()

    const type2 = await new Type(
        {
          type:'Bed' ,
          description: '',
      })
      type2.save()

      const type3 = await new Type(
        {
          type: 'Chairs' ,
          description: '',
      })
      type3.save()

      const type4 = await new Type(
        {
          type:'Lights' ,
          description: '',
      })
      type4.save()

      const type5 = await new Type(
        {
          type: 'Dresser',
          description: '',
      })
      type5.save()
    

    await Item.insertMany(items)
    console.log("Created some items!")
}
const run = async () => {
    await main()
    db.close()
}

run()