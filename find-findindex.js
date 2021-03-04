/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) 
{
  let user = usersArray.find(function (users)
  {
    if (users.username === username) return true;
  })
  return user;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

// function removeUser(usersArray, username) 
// {
//   let foundIndex = usersArray.findIndex(function(user){
//     return user.username === username;
//   })
//   if(foundIndex === -1) return;

//   return usersArray.splice(foundIndex,1)[0];
// }
function removeUser(usersArray, username) 
{

  let foundIndex = usersArray.findIndex(function (user) 
  {
    if (user.username === username) return true;
  });
  
  if (foundIndex > -1) 
  {
    let removedUsers = usersArray[foundIndex];

    for (let i = foundIndex; i < usersArray.length - 1; i++) 
    {
      usersArray[i] = usersArray[i + 1];
    }
    usersArray.shift();

    return removedUsers;
  }
}