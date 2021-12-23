class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Escribe tu nombre aquí...");
    this.input2 = createInput("EEscribe el número de opción correcto...");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("Juego MiQuiz");
    this.title.position(350, 0);
// Depura la sintaxis siguiente para mostrar la pregunta
     this.html("Pregunta: ¿Qué comienza y termina con la letra 'E', pero sólo tiene una letra?" );
    
    this.question.position(150, 80);
    this.option1.html("1: Everyone" );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate" );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
   
// Corrige la sintaxis siguiente para mostrar el mensaje de agradecimiento y la posición
      this.Message.html("Gracias, tu respuesta ha sido enviada.");
      this.message.position();

      

    });
  }
}
