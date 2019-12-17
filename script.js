// Je déclare que ma fonction start et initialize doivent être appelés après le chargement du DOM.
document.addEventListener("DOMContentLoaded", () => {
  initialize();
  start();
});

// Ici j'attache des fonctions à mes liens de changement de langue.
function initialize() {
  let links = document.querySelectorAll('.langues a');
  for (let link of links) {
    link.addEventListener("click", function(){
      let langue = link.innerText;
      console.log('le lien %s a été cliqué', langue);
      setLanguage(langue);
    });
  }
}

/// Ma fonction start appelée au chargement de la page, et rappelée lors du changement de langue.
function start() {
  load('personnages');
}

/// Ici on charge les données json, puis on appelle la fonction pour remplacer le contenu.
function load(personage) {
  // j'utilise la fonction fetch plus simple que xmlhttprequest.
  fetch('/' + personage + '.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let contenu = document.getElementById('contenu');
    
    replace(contenu, 'fiche-perso', data);
  })
} 

/// Remplace le contenu d'un élément par le template templateId en utilisant les données data.
function replace(element, templateId, data) {
  
  // le template
  let template = getTemplate(templateId);
  console.assert(template, 'template %s introuvable', templateId);
  
  // la langue est inscrite dans les données pour Mustache.
  for (let perso in data) {
    data[perso].name = data[perso].name[langue]
    data[perso].titre = data[perso].titre[langue]
    data[perso].titre2 = data[perso].titre2[langue]
    data[perso].info1 = data[perso].info1[langue]
    data[perso].info2 = data[perso].info2[langue]
    data[perso].audio = data[perso].audio[langue]
    data[perso].image = data[perso].image[langue]
    data[perso].chemin = data[perso].chemin[langue]
    data[perso].carte = data[perso].carte[langue]
    data[perso].icone = data[perso].icone[langue]
    data[perso].date = data[perso].date[langue]
    data[perso].intitulelecteur = data[perso].intitulelecteur[langue]
    data[perso].bouton = data[perso].bouton[langue]
    data[perso].img1 = data[perso].img1[langue]
    data[perso].imgicone1 = data[perso].imgicone1[langue]
    data[perso].imgicone2 = data[perso].imgicone2[langue]
    data[perso].imgicone3 = data[perso].imgicone3[langue]
    data[perso].imgicone4 = data[perso].imgicone4[langue]
    data[perso].imgicone5 = data[perso].imgicone5[langue]
    data[perso].description = data[perso].description[langue]
    data[perso].description2 = data[perso].description2[langue]
    data[perso].imgtexte = data[perso].imgtexte[langue]
  }

  // Je demande à mustache de faire du html à partir du template et des données.
  let rendered = Mustache.render(template, data);
  
  // Hop je met le html de mustache dans l'élément.
  element.innerHTML = rendered;
}

/// Le contenu du gabarit par id.
function getTemplate(id) {
  return document.getElementById(id).innerText;
}

/// la langue par défaut
var langue = 'fr'; 

/// la fonction pour changer la langue.
function setLanguage(lang) {
  langue = lang;
  start();
}

// lecteur d'images
var bauto = 0;
var a = 0;
var numero = 1;

function objet() {
  this.length = objet.arguments.length
  for (var i = 0; i < this.length; i++) {
    this[i+1] = objet.arguments[i];
  }
}
var nom = new objet ();

// Alfonso
function alfonso() {
  document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG04b_ILL01b.png";
  document.image.width = "200";
  document.image.height = "400";
}
function alfonso2() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG05b_ILL02b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG05b_ILL02b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG05b_ILL02b_GB.png";
  }
  
  document.image.width = "250";
  document.image.height = "400";
}
function alfonso3() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG06b_ILL03b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG06b_ILL03b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG06b_ILL03b_GB.png";
  }
  
  document.image.width = "250";
  document.image.height = "400";
}
function alfonso4() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG07b_ILL04b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG07b_ILL04b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Alfonso/15IMG07b_ILL04b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "130";            
}
function carteAlfonso(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=820, height=620');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='/img/ICONOGRAPHIE/Alfonso/15IMG03b_MAP01.png' width='800' height='600'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
}    

// Angel
function angel() {
  document.image.src = "/img/ICONOGRAPHIE/Angel/16IMG05b_ILL02b.png";
  document.image.width = "200";
  document.image.height = "400";            
}
function angel2() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Angel/16IMG06b_ILL03b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Angel/16IMG06b_ILL03b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Angel/16IMG06b_ILL03b_GB.png";
  }

  document.image.width = "250";
  document.image.height = "400";            
}
function angel3() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Angel/16IMG08b_ILL05b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Angel/16IMG08b_ILL05b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Angel/16IMG08b_ILL05b_GB.png";
  }

  document.image.width = "300";
  document.image.height = "400";            
}
function carteAngel(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=820, height=620');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='/img/ICONOGRAPHIE/Angel/16IMG03b_MAP01b.png' width='800' height='600'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
}    

// Juan
function juan() {
  document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG04b_ILL01b.png";
  document.image.width = "170";
  document.image.height = "400";
}
function juan2() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG05b_ILL02b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG05b_ILL02b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG05b_ILL02b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "330";
}
function juan3() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG06b_ILL03b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG06b_ILL03b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG06b_ILL03b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "400";
}
function juan4() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG07b_ILL04b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG07b_ILL04b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Juan/17IMG07b_ILL04b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "200";            
}
function carteJuan(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=820, height=620');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='/img/ICONOGRAPHIE/Juan/17IMG03b_MAP01b.png' width='800' height='600'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
}    

// Clara et Alejandra
function carteCetA(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=820, height=620');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='/img/ICONOGRAPHIE/Clara-Alej/18IMG03b_MAP01b.png' width='800' height='600'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
} 

// Suzanne
function suzanne() {
  document.image.src = "/img/ICONOGRAPHIE/Suzanne/19IMG04b_ILL01b.png";
  document.image.width = "170";
  document.image.height = "400";            
}
function suzanne2() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Suzanne/19IMG05b_ILL02b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Suzanne/19IMG05b_ILL02b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Suzanne/19IMG05b_ILL02b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "250";            
}
function suzanne3() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Suzanne/19IMG06b_ILL03b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Suzanne/19IMG06b_ILL03b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Suzanne/19IMG06b_ILL03b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "500";            
}
// pop-up pour agrandir la carte
function carteSuzanne(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=820, height=620');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='/img/ICONOGRAPHIE/Suzanne/19IMG03b_MAP01b.png' width='800' height='600'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
}    

// Duval
function duval() {
  document.image.src = "/img/ICONOGRAPHIE/Duval/20IMG04b_ILL01b.png";
  document.image.width = "200";
  document.image.height = "400";            
}
function duval2() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Duval/20IMG05b_ILL02b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Duval/20IMG05b_ILL02b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Duval/20IMG05b_ILL02b_GB.png";
  }
  
  document.image.width = "250";
  document.image.height = "200";            
}
function duval3() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Duval/20IMG06b_ILL03b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Duval/20IMG06b_ILL03b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Duval/20IMG06b_ILL03b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "300";            
}
// pop-up pour agrandir la carte
function carteDuval(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=820, height=620');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='/img/ICONOGRAPHIE/Duval/20IMG03b_MAP01b.png' width='800' height='600'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
}    

// Sophia
function sophia() {
  document.image.src = "/img/ICONOGRAPHIE/Sophia/21IMG04b_ILL01b.png";
  document.image.width = "200";
  document.image.height = "400";            
}
function sophia2() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Sophia/21IMG05b_ILL02b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Sophia/21IMG05b_ILL02b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Sophia/21IMG05b_ILL02b_GB.png";
  }
 
  document.image.width = "250";
  document.image.height = "400";            
}
function sophia3() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Sophia/21IMG06b_ILL03b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Sophia/21IMG06b_ILL03b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Sophia/21IMG06b_ILL03b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "400";          
}
// pop-up pour agrandir la carte
function carteSophia(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=820, height=620');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='/img/ICONOGRAPHIE/Sophia/21IMG03b_MAP01b.png' width='800' height='600'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
}       

// Jacob
function jacob() {
  console.log(langue);
  document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG04b_ILL01b.png";
  document.image.width = "160";
  document.image.height = "400";            
}
function jacob2() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG05b_ILL02b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG05b_ILL02b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG05b_ILL02b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "400";            
}
function jacob3() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG06b_ILL03b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG06b_ILL03b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG06b_ILL03b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "350";          
}
function jacob4() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG07b_ILL04b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG07b_ILL04b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG07b_ILL04b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "400";          
}
function jacob5() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG08b_ILL05b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG08b_ILL05b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Jacob/22IMG08b_ILL05b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "400";          
}
// pop-up pour agrandir la carte
function carteJacob(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=820, height=620');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='/img/ICONOGRAPHIE/Jacob/22IMG03b_MAP01b.png' width='800' height='600'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
}                             

// Maks
function maks() {
  document.image.src = "/img/ICONOGRAPHIE/Maks/23IMG04b_ILL01b.png";
  document.image.width = "170";
  document.image.height = "400";            
}
function maks2() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Maks/23IMG05b_ILL02b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Maks/23IMG05b_ILL02b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Maks/23IMG05b_ILL02b_GB.png";
  }
 
  document.image.width = "250";
  document.image.height = "400";            
}
function maks3() {
  if(langue == "fr"){
    document.image.src = "/img/ICONOGRAPHIE/Maks/23IMG06b_ILL03b_FR.png";
  } else if(langue == "es") {
    document.image.src = "/img/ICONOGRAPHIE/Maks/23IMG06b_ILL03b_ES.png";
  } else if(langue == "en"){
    document.image.src = "/img/ICONOGRAPHIE/Maks/23IMG06b_ILL03b_GB.png";
  }
  
  document.image.width = "300";
  document.image.height = "400";          
}
// pop-up pour agrandir la carte
function carteMaks(img) {
  w=open("",'image','weigth=toolbar=no,scrollbars=no,resizable=yes, width=820, height=620');	
  w.document.write("<HTML><BODY onblur=\"window.close();\"><IMG src='/img/ICONOGRAPHIE/Maks/23IMG03b_MAP01b.png' width='800' height='600'>");
  w.document.write("</BODY></HTML>");
  w.document.close();
}

