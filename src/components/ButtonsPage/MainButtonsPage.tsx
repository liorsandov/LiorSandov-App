import React from 'react';
import Button from './Button/Button';
import GlassContainer from '../GlassContainer/GlassContainer';

export default function MainButtonsPage(): JSX.Element {
  return (
    <GlassContainer>
      <Button name='Acceptable' color='Blue'/>
      <Button name='Acceptable' color='Red'/>
      <Button name='Acceptable' color='Green'/>
      <Button name='Acceptable' />
    </GlassContainer>
  );
}

