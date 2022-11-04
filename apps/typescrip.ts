class persona
{
  public nombre: string;
  private edad: number;

  constructor (un_Nom: string){
    this.nombre = un_Nom;
    this.miedad(21);
  }

  private miedad(años: number){
    this.edad = años;
    console.log("Tengo "+ this.edad + "Años")
  }
}

let martin = new persona("martin");


