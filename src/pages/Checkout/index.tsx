import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import Button from '../../components/Button'
import Card from '../../components/Card'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'

import * as S from './styles'
import { open, clear } from '../../store/reducers/cart'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const goToCart = () => dispatch(open())

  const goToHome = () => {
    navigate('/')
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYeas: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa ter no minimo 3 caracteres')
        .required('O campo é obrigatorio'),
      address: Yup.string()
        .min(5, 'Preencha o endereço corretamente')
        .required('O campo é obrigatorio'),
      city: Yup.string().required('O campo é obrigatorio'),
      cep: Yup.string()
        .min(8, 'CEP invelido')
        .max(10, '')
        .required('O campo é obrigatorio'),
      number: Yup.string()
        .min(2, 'O número precisa ter no minimo 2 caracteres')
        .required('O campo é obrigatorio'),
      complement: Yup.string(),

      cardOwner: Yup.string()
        .min(5, 'Preencha o endereço corretamente')
        .when((value, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cardNumber: Yup.string()
        .min(12, 'Preencha o endereço corretamente')
        .when((value, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      cardCode: Yup.string()
        .min(3, 'Preencha o endereço corretamente')
        .when((value, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      expiresMonth: Yup.string()
        .min(2, 'Preencha o endereço corretamente')
        .when((value, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        ),
      expiresYeas: Yup.string()
        .min(4, 'Preencha o endereço corretamente')
        .when((value, schema) =>
          payWithCard ? schema.required('O campo é obrigatorio') : schema
        )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.cardOwner,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.cardNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYeas)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fildName: string) => {
    const isTouched = fildName in form.touched
    const isInvalid = fildName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <>
      {isSuccess && data ? (
        <Card title="">
          <>
            <h2>Pedido realizado - {data.orderId}</h2>
            <S.Paragrafo>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </S.Paragrafo>
            <S.Paragrafo>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extraS.
            </S.Paragrafo>
            <S.Paragrafo>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </S.Paragrafo>
            <S.Paragrafo>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.Paragrafo>
            <Button type="button" title="concluir compra" onClick={goToHome}>
              Concluir
            </Button>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {payWithCard ? (
            <Card title="Pagamento - Valor a pagar R$ 190,90">
              <>
                <S.InputGroup>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    id="cardOwner"
                    type="text"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="90px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYeas">Ano de vencimento</label>
                    <InputMask
                      id="number"
                      type="text"
                      name="expiresYeas"
                      value={form.values.expiresYeas}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYeas') ? 'error' : ''
                      }
                      mask="9999"
                    />
                  </S.InputGroup>
                </S.Row>
                <div>
                  <Button
                    title="Continuar com a entrega"
                    type="submit"
                    onClick={form.handleSubmit}
                  >
                    {isLoading
                      ? 'Finalizando pagamento'
                      : 'Finalizar pagamento'}
                  </Button>
                  <Button
                    onClick={() => setPayWithCard(false)}
                    title="Voltar para cadastro de endereço"
                    type="button"
                  >
                    Voltar para a edição de endereço
                  </Button>
                </div>
              </>
            </Card>
          ) : (
            <Card title="Entrega">
              <>
                <S.InputGroup>
                  <label htmlFor="receiver">Nome recebedor</label>
                  <input
                    id="receiver"
                    type="text"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('receiver') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      id="cep"
                      type="text"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cep') ? 'error' : ''}
                      mask="99.999-999"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      id="number"
                      type="text"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input id="complement" type="text" />
                </S.InputGroup>
                <div>
                  <Button
                    onClick={() => setPayWithCard(true)}
                    title="Continuar com a entrega"
                    type="submit"
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    title="Continuar com a entrega"
                    type="button"
                    onClick={goToCart}
                  >
                    Voltar para o carrinho
                  </Button>
                </div>
              </>
            </Card>
          )}
        </form>
      )}
    </>
  )
}

export default Checkout
