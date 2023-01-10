// let color = '#'

function randHexColor()
{
  let color = '#'
  for (i = 0; i<6; i++)
    {
      let values = '0123456789ABCDEF'
      color += values[(Math.floor(Math.random() *16))]
    }
  return color
}

// count = 0
// while(color != '#4A412A')
//   {
//     randHexColor()
//     count ++
//   }
// return count



// var startTime = performance.now()

console.log(randHexColor())
    
// var endTime = performance.now()

// console.log(`Call to randHexColor took ${endTime - startTime} milliseconds`)