class Form{
    constructor(){

    }
    display(){
        
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(230,0);

        var input = createInput("name");
        input.position(230,160);

        var button = createButton("Play");
        button.position(350,200);

        var greeting = createElement('h3');

        button.mousePressed(function(data){
            
            input.hide();
            button.hide();

            var name = input.value();
            
            PlayerCount+=1;
            player.update(name);
            player.updateCount(PlayerCount);

            greeting.html("Hello " + name);
            greeting.position(230,160);
        });
    }
}