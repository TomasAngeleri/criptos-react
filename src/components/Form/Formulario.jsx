import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import useSelectOptions from '../../hooks/useSelectModenedas';
import monedas from '../../utils/moneda';
import Error from '../Error';

const InputSubmit = styled.input`
  background-color: #6f73f7;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #4d50dc;
    cursor: pointer;
  }
`;

const Formulario = ({ setDatosSubmit }) => {

  const [criptomonedas, setCriptomonedas] = useState([]);
  const [error, setError] = useState(false);
  const [monedaElegida, SelectMonedas] = useSelectOptions('Elige tu moneda', monedas);
  const [criptoElegida, SelectCriptos] = useSelectOptions('Elige tu criptomeneda', criptomonedas);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD";
      const respuesta = await fetch(url);
      const result = await respuesta.json();
      const dataCripto = result.Data;

      const arrayCripto = dataCripto.map((cripto) => {

        const objCripto = {
          id: cripto.CoinInfo.Name,
          description: cripto.CoinInfo.FullName,
        };

        return objCripto;
      });

      setCriptomonedas(arrayCripto);
    };
    consultarAPI();
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if ([monedaElegida, criptoElegida].includes('')) {
      setError(true);
      return
    }
    setDatosSubmit({ monedaElegida, criptoElegida });
    setError(false);
  }

  return (
    <>
      {error &&
        <Error>
          <p>Todos los campos son obligatorios</p>
        </Error>
      }
      <form onSubmit={handleOnSubmit}>
        <SelectMonedas />
        <SelectCriptos />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>

  )
}
Formulario.propTypes = {
  setDatosSubmit: PropTypes.func.isRequired
}
export default Formulario;