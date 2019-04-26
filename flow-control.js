
function basicTeenager()
{
  var age = 13
  if( 13 <= age <= 19 )
  {
    return "You are a teenager!"
  }
}

function teenager(age)
{
  if( 13 <= age <= 19 )
  {
    return "You are a teenager!"
  }
  else
  {
      return "You are not a teenager"
  }
}

teenager(20)


function ageChecker(age)
{
if( 13 <= age <= 19 )
{
  return "You are a teenager!"
}
else if ( age <= 12 )
{
return "You are a kid"
}
else
{
return "You are grownup"
}
}
ageChecker(30)

function ternaryTeenager(age)
{
  var age
return 13<=age<=19 ?  "You are a teenager!" : "You are not a teenager"
}
 ternaryTeenager(60)
/*function switchAge(age) {

}*/
