


export class Pokemon {
  /**
   * @param {{ 
   * name: string; 
   * nickName: string; 
   * img: string; 
   * backImg: string; 
   * weight: string; 
   * height: string; 
   * health: number; 
   * defense: number; 
   * attack: number; 
   * speed: number; 
   * types: [{}]; 
   * creatorId: string;
   * creator: {}
   * id: string; }} data
   */
  constructor(data) {
    this.name = data.name

  }

  get listHTMLTemplate() {
    return /*html */ `
      <div class="btn text-start" role="button" onclick="app.wildPokemonController.getActivePokemon('${this.name}')">${this.name}</div>
      `
  }
}

export class FullPokemon extends Pokemon {
  constructor(data) {
    super(data)
    this.nickName = data.nickName ?? ''
    this.img = data.img ?? data.sprites.front_default
    this.backImg = data.backImg ? data.backImg : data.sprites.back_default
    this.weight = data.weight
    this.height = data.height
    this.health = data.health || data.stats[0].base_stat
    this.attack = data.attack || data.stats[1].base_stat
    this.defense = data.defense || data.stats[2].base_stat
    this.speed = data.speed || data.stats[5].base_stat
    this.types = data.types
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.id = data.id
  }



  get getTypes() {
    let pokemonTypes = []
    this.types.forEach(pokemonType => pokemonTypes.push(pokemonType.type.name))
    // debugger
    return pokemonTypes

  }

  get activeHTMLTemplate() {

    return `
    <h2 class="text-capitalize">${this.name}</h2>
    <p class="text-capitalize">Type(s): ${this.getTypes}</p>
    <p>Base Stats: HP: ${this.health} Atk: ${this.attack} Def: ${this.defense} Spd: ${this.speed}</p> 
    <img src="${this.img}" alt="Image of front of pokemon">
    <img src="${this.backImg}" alt="Image of back of pokemon">
    `
  }
}
// this.nickName = data.nickName
//     this.img = data.img
//     this.backImg = data.backImg
//     this.weight = data.weight
//     this.height = data.height
//     this.health = data.health
//     this.defense = data.defense
//     this.attack = data.attack
//     this.speed = data.speed
//     this.types = data.types
//     this.creatorId = data.creatorId
//     this.creator = data.creator
//     this.id = data.id

// name - String
// nickName - String
// img - String
// backImg - String
// weight - String
// height - String
// health - Number
// defense - Number
// attack - Number
// speed - Number
// types - object Array [
// Object {} ]
// creatorId - String (SchemaObjectId)
// id - String (SchemaObjectId)
