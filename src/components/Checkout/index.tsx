import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { InputMask } from '@react-input/mask'

import { usePurchaseMutation } from '../../services/Api'
import {
  closeCheck,
  open,
  closePayment,
  openCheck,
  openPayment,
  openProof,
  closeProof,
} from '../../store/reducers/Cart'
import { clear } from '../../store/reducers/Cart'
import type { RootReducer } from '../../store'

import * as S from './styles'
import Tag from '../Tag'

type FormValues = {
  fullName: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
  cardOwner: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}

const Checkout = () => {
  const dispatch = useDispatch()
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { checkOpen, payment, proof } = useSelector(
    (state: RootReducer) => state.cart,
  )

  const parseToBrl = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco!
    }, 0)
  }

  const closeCheckout = () => {
    dispatch(closeCheck())
  }

  const backToCart = () => {
    dispatch(closeCheck())
    dispatch(open())
  }

  const closePay = () => {
    dispatch(closePayment())
  }

  const backToCheck = () => {
    dispatch(closePayment())
    dispatch(openCheck())
  }

  const closeProofDocument = () => {
    dispatch(closeProof())
  }

  const form = useFormik<FormValues>({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(6, 'O endereço precisa ter pelo menos 6 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .length(9, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),

      cardOwner: Yup.string().when([], {
        is: () => payment,
        then: schema =>
          schema
            .min(5, 'O nome precisa ter pelo menos 5 caracteres')
            .required('O campo é obrigatório'),
        otherwise: schema => schema,
      }),

      cardNumber: Yup.string().when([], {
        is: () => payment,
        then: schema =>
          schema
            .length(19, 'O número do cartão precisa ter 19 caracteres')
            .required('O campo é obrigatório'),
        otherwise: schema => schema,
      }),

      cardCode: Yup.string().when([], {
        is: () => payment,
        then: schema =>
          schema
            .length(3, 'O CVV precisa ter 3 caracteres')
            .required('O campo é obrigatório'),
        otherwise: schema => schema,
      }),

      expiresMonth: Yup.string().when([], {
        is: () => payment,
        then: schema =>
          schema.length(2, 'Informe o mês').required('O campo é obrigatório'),
        otherwise: schema => schema,
      }),

      expiresYear: Yup.string().when([], {
        is: () => payment,
        then: schema =>
          schema.length(2, 'Informe o ano').required('O campo é obrigatório'),
        otherwise: schema => schema,
      }),
    }),
    onSubmit: values => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: Number(values.cep.replace('-', '')),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: Number(values.cardNumber.replace(/\s/g, '')),
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
        products: items.map(item => ({
          id: item.id,
          price: item.preco as number,
        })),
      })
    },
  })

  const checkInputHasError = (fieldName: keyof FormValues) => {
    const isTouched = !!form.touched[fieldName]
    const hasError = !!form.errors[fieldName]

    return isTouched && hasError
  }

  const handleContinueToPayment = async () => {
    form.setTouched({
      ...form.touched,
      fullName: true,
      address: true,
      city: true,
      cep: true,
      number: true,
      complement: true,
    })

    const errors = await form.validateForm()

    const hasDeliveryErrors =
      !!errors.fullName ||
      !!errors.address ||
      !!errors.city ||
      !!errors.cep ||
      !!errors.number

    if (!hasDeliveryErrors) {
      dispatch(closeCheck())
      dispatch(openPayment())
    }
  }

  const handleFinishPayment = async () => {
    form.setTouched({
      ...form.touched,
      cardOwner: true,
      cardNumber: true,
      cardCode: true,
      expiresMonth: true,
      expiresYear: true,
    })

    const errors = await form.validateForm()

    const hasPaymentErrors =
      !!errors.cardOwner ||
      !!errors.cardNumber ||
      !!errors.cardCode ||
      !!errors.expiresMonth ||
      !!errors.expiresYear

    if (!hasPaymentErrors) {
      dispatch(closePayment())
      form.handleSubmit()
    }
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(openProof())
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <>
      {checkOpen && (
        <S.CheckContainer className={checkOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCheckout} />
          <S.Sidebar>
            <S.Formulario>
              <h3>Entrega</h3>
              <S.Dados>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('fullName') ? 'error' : ''}
                />
              </S.Dados>
              <S.Dados>
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
              </S.Dados>
              <S.Dados>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </S.Dados>
              <S.Group>
                <S.Dados>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                    mask="_____-___"
                    replacement={{ _: /\d/ }}
                  />
                </S.Dados>
                <S.Dados>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </S.Dados>
              </S.Group>
              <S.Dados>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.Dados>
              <S.Buttons>
                <Tag fullWidth onClick={handleContinueToPayment}>
                  Continuar com o pagamento
                </Tag>
                <Tag fullWidth onClick={backToCart}>
                  Voltar para o carrinho
                </Tag>
              </S.Buttons>
            </S.Formulario>
          </S.Sidebar>
        </S.CheckContainer>
      )}

      {payment && (
        <S.CheckContainer className={payment ? 'is-open' : ''}>
          <S.Overlay onClick={closePay} />
          <S.Sidebar>
            <S.Formulario>
              <h3>
                Pagamento - Valor a pagar{' '}
                <span>{parseToBrl(getTotalPrice())}</span>
              </h3>
              <S.Dados>
                <label htmlFor="cardOwner">Nome no cartão</label>
                <input
                  type="text"
                  id="cardOwner"
                  name="cardOwner"
                  value={form.values.cardOwner}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardOwner') ? 'error' : ''}
                />
              </S.Dados>
              <S.Dados>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  mask="____ ____ ____ ____"
                  replacement={{ _: /\d/ }}
                />
              </S.Dados>
              <S.Dados>
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                  mask="___"
                  replacement={{ _: /\d/ }}
                />
              </S.Dados>
              <S.Group>
                <S.Dados>
                  <label htmlFor="expiresMonth">Mês do vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="__"
                    replacement={{ _: /\d/ }}
                  />
                </S.Dados>
                <S.Dados>
                  <label htmlFor="expiresYear">Ano do vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="__"
                    replacement={{ _: /\d/ }}
                  />
                </S.Dados>
              </S.Group>
              <S.Buttons>
                <Tag fullWidth onClick={handleFinishPayment}>
                  Finalizar pagamento
                </Tag>
                <Tag fullWidth onClick={backToCheck}>
                  Voltar para a edição de endereço
                </Tag>
              </S.Buttons>
            </S.Formulario>
          </S.Sidebar>
        </S.CheckContainer>
      )}

      {proof && data && (
        <S.CheckContainer className={proof ? 'is-open' : ''}>
          <S.Overlay onClick={closeProofDocument} />
          <S.Sidebar>
            <h3>
              Pedido realizado - <span>{data.orderId}</span>
            </h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="margin-bot">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Tag fullWidth onClick={closeProofDocument}>
              Concluir
            </Tag>
          </S.Sidebar>
        </S.CheckContainer>
      )}
    </>
  )
}
export default Checkout
