var liste = document.querySelector("ul");
var input = document.querySelector("#task"); 
var ekle = document.querySelector("#liveToastBtn");

createButtonElement();
checkedElement();
ekle.addEventListener("onclick", newElement); //ekle butonuna basılınca çalışacak fonksiyonu veriyoruz.
function newElement(){
  
  // createElement ile yeni bir listItem (li) oluşturuyoruz
  
  // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
  input.value= input.value.trim();
  if(input.value.length!=0)
  {
    
    var li=document.createElement("li"); 
    li.textContent=input.value; 
  
    // appendChild ile oluşturduğumuz elementi liste isimli değişkenimizin içerisine ekliyoruz.
    liste.appendChild(li);
     console.log(liste)         
    // Veri inputu içerisindeki metni siliyoruz.
    input.value = "";

    let toastSuccess = document.querySelector('.success'); //başarılı bildirimini verebilmek için toast objesi oluşturuyoruz.
    let toastAdd = new bootstrap.Toast(toastSuccess);
    toastAdd.show();
  } else {
    // Toast bildirimleri
    let toastFail= document.querySelector('.error');  //başarısız  bildirimini verebilmek için toast objesi oluşturuyoruz.
    let toastNotAdd = new bootstrap.Toast(toastFail);
    toastNotAdd.show();
  }

  createButtonElement(); //yeni eklenen liste elemanları için x butonu oluşturuyoruz.
}

function createButtonElement() { //liste elemanlarını silmek için buton elementi oluşturuyoruz.

 var a = document.getElementsByTagName("li");
 
 for(var v=0; v<=a.length;v++)
  {

    
    var span = document.createElement("SPAN");  //önce span elementi oluşturduk.
    var txt = document.createTextNode("\u00D7"); // x işareti
   
    span.className="close"; 
    span.appendChild(txt); //span elementine x işaretini child olarak verdik.
    a[v].appendChild(span); //her bir liste elemenına butonu child olarak verdik.
    span.addEventListener("click",removeElement); //span elementine(x butonu) tıklayınca çalışacak fonksiyonu veriyoruz.
    
  }  
}


function removeElement()
{
  var closeBtn=document.getElementsByClassName("close"); //silme butonunu classı aracılığı ile alıyoruz.
  for(let i=0;i<closeBtn.length;i++)
  {
    if(closeBtn[i].click)
    {
      var div = this.parentElement;
      div.style.display = "none"; //butona basılan liste elemanı siliniyor.
    }
  }  
  

}

function checkedElement()
{
  var a=document.querySelector("ul"); //listeyi alıyoruz
  a.addEventListener("click",function (checkedelement) //liste elemanlarına tıklandığı zaman çalışacak fonksiyonu atıyoruz.
  {
    if(checkedelement.target.tagName==="LI")// tıklanan liste elemanı ise
    {
      checkedelement.target.classList.toggle('checked'); //css kodundaki checked kodlarını aktifleştiriyoruz.
    }
  });
}

