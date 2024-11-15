class Food {
  title: string
  category: string
  star: string
  description: string
  infos: string[]
  image: string
  id: number
  plus: string

  constructor(
    id: number,
    title: string,
    category: string,
    star: string,
    description: string,
    infos: string[],
    image: string,
    plus: string
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.star = star
    this.description = description
    this.infos = infos
    this.image = image
    this.plus = plus
  }
}

export default Food
