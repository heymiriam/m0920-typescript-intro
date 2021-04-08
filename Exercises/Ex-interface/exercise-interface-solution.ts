interface City {
  name: string
}
// [/do not edit]

interface Coords {
  longitude: number
  latitude: number
}

// By Extending
//   interface Place extends City{
//       coords: Coords
//   }

//By Merging
interface City {
  coords: Coords
}

const montreal = {
  coords: {
    latitude: 42.332,
    longitude: -73.324,
  },
  name: 'Montréal',
}

const tampa = {
  coords: {
    latitude: 27.9478,
    longitude: -82.4584,
  },
  name: 'Tampa',
}

function getCityInfo(city: City) {
  const coords = `(${city.coords.latitude.toFixed(
    3
  )}, ${city.coords.longitude.toFixed(3)})`
  return `${city.name.toUpperCase()} is located at ${coords}.`
}

console.log(
  '[Exercise 2.3]',
  `${getCityInfo(montreal)} \n\n ${getCityInfo(tampa)}`
)
