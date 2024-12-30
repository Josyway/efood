declare type Menu = {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
}

declare type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Menu[]
}

declare type PurchaseResponse = {
  orderId: string
}

declare type product = {
  id: number
  price: number
}

declare type PurchasePayload = {
  products: product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name?: string
      number?: string
      code?: number
      expires?: {
        month: number
        year: number
      }
    }
  }
}
