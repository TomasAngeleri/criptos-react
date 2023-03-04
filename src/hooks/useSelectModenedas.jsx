import React from 'react';

const useSelectModenedas = () => {

  const selectMonedas = () => {
    console.log('Desde select modenas');
  }
  return {selectMonedas};
}

export default useSelectModenedas