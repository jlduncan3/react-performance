import {matchSorter} from 'match-sorter'
import {mockComponent} from 'react-dom/test-utils'
import cities from './us-cities.json'

const allItems = cities.map((city, index) => ({
  ...city,
  id: String(index),
}))

// for some reason workerize doesn't like export {getItems}
// but it's fine with inline exports like this so that's what we're doing.
export function getItems(filter) {
  console.log(new Date(), 'starting getItems')

  if (!filter) {
    console.log(new Date(), 'finished getItems')
    return allItems
  }
  const returnValue = matchSorter(allItems, filter, {
    keys: ['name'],
  })
  console.log(new Date(), 'finished getItems')
  return returnValue
}
