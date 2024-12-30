export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Menu[]) => {
  return items.reduce((accumilator, correntItem) => {
    return (accumilator += correntItem.preco)
  }, 0)
}
