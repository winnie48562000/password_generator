// define sample function to randomly return an item in an array
  function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }


// define generatePassword function
function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // // define dummy data
  // const options = { 
  //   length: '3',
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40'
  // }
  // console.log('options', options)
  
  // creat a collection to store things user pick up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat([...lowerCaseLetters])
  }
    
  if (options.uppercase === 'on') {
    collection = collection.concat([...upperCaseLetters])
  }

  if (options.numbers === 'on') {
  collection = collection.concat([...numbers])
}

  if (options.symbols === 'on') {
    collection = collection.concat([...symbols])
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(character => 
      !options.excludeCharacters.includes(character)
    )
  }

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  // start generate password
  let password = ''
  for (let i = 1; i <= options.length; i++) {
    password += sample(collection)
  }

  // return generate password
  return password
}

// export generatePassword funtion for other files to use
module.exports = generatePassword