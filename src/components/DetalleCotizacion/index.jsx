import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const Detalle = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap:1rem;
  margin-top:30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight:700;
  }
`;

const TextoPrecio = styled.p`
  font-size: 24px;
  span {
    font-weight:700;
  }
`;

const DetalleCotizacion = ({ resultCotizacion }) => {
  console.log('DetalleCotizacion', resultCotizacion);
  const { PRICE, LOWDAY, HIGHDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultCotizacion;
  return (
    <Detalle>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Criptomoneda" />
      <div>
        <TextoPrecio>El precio es de: <span>{PRICE}</span> </TextoPrecio>
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span> </Texto>
        <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span> </Texto>
        <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span> </Texto>
        <Texto>Ultima actualizacion realiza: <span>{LASTUPDATE}</span> </Texto>
      </div>
    </Detalle>
  );
}

DetalleCotizacion.propTypes = {
  resultCotizacion: PropTypes.shape({
    PRICE: PropTypes.string,
    LOWDAY: PropTypes.string,
    HIGHDAY: PropTypes.string,
    CHANGEPCT24HOUR: PropTypes.string,
    IMAGEURL: PropTypes.string,
    LASTUPDATE: PropTypes.string,
  })
}
export default DetalleCotizacion;