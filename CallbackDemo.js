var greetMe = function (name)
{
    return "happy new year" +name
}

var wishMe = function (greet , year)
{
    console.log(greet("ganesh ") + "year"+year);
}
wishMe(greetMe,2002)