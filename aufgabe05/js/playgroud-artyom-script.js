window.addEventListener("load", function () {
    var artyom = new Artyom();

  
    artyom.addCommands({
        indexes: ["Guten Morgen VUI, wann habe ich heute meine erste Vorlesung"],
        action: function(i){
            if(i == 0){
                artyom.say("Du hast heute keine Vorlesung");
            }else if(i == 1){
                artyom.say(" Um 9.45 Uhr hast du Marketing");

            }  
        }
    });

    artyom.addCommands({
        indexes: ["Habe ich neue E-Mails"],
        action: function(i){
            if(i == 0){
                artyom.say("Nein du hast keine neuen E-Mails");
            }else if(i == 1){
                artyom.say("Du hast 2 neue E-Mails");
            
            }  
        }
    });

    artyom.addCommands({
        indexes: ["Les mir die Abgaben für diese Woche vor"],
        action: function(i){
            if(i == 0){
                artyom.say("Du hast keine Abgaben");
            }else if(i == 1){
                artyom.say("Am Mittwoch musst du Interface abgeben. Am Donnerstag hast du einen Englisch Test");
            
            }  
        }
    });
    
    artyom.addCommands({
        indexes: ["Stelle mir ein Wecker vor Marketing"],
        action: function(i){
            if(i == 0){
                artyom.say("Ein Wecker ist für 9.30 Uhr gestellt ");
            }else if(i == 1){
                artyom.say("Ein Wecker ist für 9.30 Uhr gestellt ");
            } 
        }
    });
 
    
    artyom.addCommands({
        indexes: ["Was habe ich heute noch für Abgaben"],
        action: function(i){
            if(i == 0){
                artyom.say("Du hast heute keine Abgaben ");
            }else if(i == 1){
                artyom.say("Du musst heute in Zeichnen deine Aufgabe abgeben ");
            } 
        }
    });

    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
