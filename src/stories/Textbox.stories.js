/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Textbox from '../components/Textbox';

storiesOf('Textbox', module)
  .add('empty', () => <Textbox />)
  .add('with label props', () => <Textbox label="Login" />)
  .add('password', () => <Textbox label="Password" type="password" />)
  .add('invalid', () => <Textbox label="Login" invalid />);
