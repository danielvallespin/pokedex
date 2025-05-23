class Pokemon{

    #id
    constructor(id, nombre, tipo, imgPrincipal, spriteFontal, spriteReverso, listaStats){
        this.#id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.imgPrincipal = imgPrincipal;
        this.spriteFontal = spriteFontal;
        this.spriteReverso = spriteReverso;
        this.listaStats = listaStats;
    }

    getId(){
        return this.#id;
    }

}

export default Pokemon;