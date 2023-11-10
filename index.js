const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
  }
  
  console.log(findMatching(drivers, 'Bobby'))

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
      return driver.startsWith(letters);
    });
  }
  console.log(fuzzyMatch(drivers, "Sa"))

  function matchName(){
return drivers.filter(function(drivers){
 return drivers.name==='Bobby'
})
  }