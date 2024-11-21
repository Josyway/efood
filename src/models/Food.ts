class Food {
  title: string[]
  description: string
  image: string
  add: string
  id: number

  constructor(
    id: number,
    title: string[],
    description: string,
    image: string,
    add: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.add = add
  }
}

export default Food
