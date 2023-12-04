
var odktrytekarty = 0;
var proby = 0;
let zgadywanaliczba = Math.floor(Math.random()*10);
function losujkarty()
{
    document.getElementById("menu").innerHTML = zgadywanaliczba;
    var nowakarta ="";
    for(i = 0;i < 25;i++)
    {
        let losowaliczba = Math.floor(Math.random()*10);
        nowakarta = nowakarta + "<div class='karta' id='"+i+"' onclick='odkryjkarte("+i+")' wartosckarty='"+losowaliczba+"'></div>";
        if((i+1) % 5 == 0) 
        {
            nowakarta = nowakarta + '<div style=clear:both;"></div>';
           
        }     
    }
    document.getElementById("gamearea").innerHTML = nowakarta;
}
function zrobkarty()
{
    losujkarty();
    var wszystkieKarty = document.querySelectorAll('[wartosckarty="'+zgadywanaliczba+'"]').length;
    while (wszystkieKarty != 2)
    {
        losujkarty();
        wszystkieKarty = document.querySelectorAll('[wartosckarty="'+zgadywanaliczba+'"]').length;
    }                          
}
function ukryjkarty()
{
    let kartydoukrycia =document.querySelectorAll('.karta');
    for(i=0;i < kartydoukrycia.length;i++)
    {
   kartydoukrycia[i].innerHTML = null;
   kartydoukrycia[i].style.backgroundColor = 'red';
    }
}
function odkryjkarte(id)
{
    var dobrakarta = 0;
    if(odktrytekarty == 2)
    {
        let kartydoukrycia =document.querySelectorAll('.karta');
        
        for(i=0;i < kartydoukrycia.length;i++)
        {
            if(kartydoukrycia[i].textContent == zgadywanaliczba)
            {
              dobrakarta++;
              if(dobrakarta == 2)
              {
                  alert("wygrales");
              }
               
            }
        }
        dobrakarta = 0;
    }
   if(odktrytekarty >= 2 )
   {
    odktrytekarty = 0;
    ukryjkarty();
   }
    var karta = document.getElementById(id);
    karta.innerHTML = karta.getAttribute("wartosckarty");
    karta.style.backgroundColor = 'yellow';
    odktrytekarty++;
  
    
}
window.onload = zrobkarty;