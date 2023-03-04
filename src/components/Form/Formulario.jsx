import React from 'react'
import styled from '@emotion/styled';
import useSelectModenedas from '../../hooks/useSelectModenedas';

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
  &:hover {
    background-color: #4d50dc;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const { selectMonedas } = useSelectModenedas();
  selectMonedas();
  return (
    <form>
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario;