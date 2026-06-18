class Comida {
  title: string
  description: string
  image: string
  infos: string[]
  nota: number
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string[],
    nota: number,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.nota = nota
  }
}

export default Comida
