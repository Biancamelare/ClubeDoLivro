function Avaliar(estrela) 
{


 var s1 = document.getElementById("s1").src;
 var s2 = document.getElementById("s2").src;
 var s3 = document.getElementById("s3").src;
 var s4 = document.getElementById("s4").src;
 var s5 = document.getElementById("s5").src;
 var avaliacao = 0;

if (estrela == 5)
{ 
 document.getElementById("s1"). src="/img/logos/star1.png";
 document.getElementById("s2").src = "/img/logos/star1.png";
 document.getElementById("s3").src = "/img/logos/star1.png";
 document.getElementById("s4").src = "/img/logos/star1.png";
 document.getElementById("s5").src = "/img/logos/star1.png";
 avaliacao = 5;
}

if (estrela == 4){
 document.getElementById("s1").src = "/img/logos/star1.png";
 document.getElementById("s2").src = "/img/logos/star1.png";
 document.getElementById("s3").src = "/img/logos/star1.png";
 document.getElementById("s4").src = "/img/logos/star1.png";
 document.getElementById("s5").src = "/img/logos/star0.png";
 avaliacao = 4;
}
if (estrela == 3)
{ 
 document.getElementById("s1").src = "/img/logos/star1.png";
 document.getElementById("s2").src = "/img/logos/star1.png";
 document.getElementById("s3").src = "/img/logos/star1.png";
 document.getElementById("s4").src = "/img/logos/star0.png";
 document.getElementById("s5").src = "/img/logos/star0.png";
 avaliacao = 3;
 } 
 if (estrela == 2)
 {
 document.getElementById("s1").src = "/img/logos/star1.png";
 document.getElementById("s2").src = "/img/logos/star1.png";
 document.getElementById("s3").src = "/img/logos/star0.png";
 document.getElementById("s4").src = "/img/logos/star0.png";
 document.getElementById("s5").src = "/img/logos/star0.png";
 avaliacao = 2;
}

if (estrela == 1)
{
document.getElementById("s1").src = "/img/logos/star1.png";
document.getElementById("s2").src = "/img/logos/star0.png";
document.getElementById("s3").src = "/img/logos/star0.png";
document.getElementById("s4").src = "/img/logos/star0.png";
document.getElementById("s5").src = "/img/logos/star0.png";
avaliacao = 1;
}
 document.getElementById('rating').innerHTML = avaliacao;
 
}
