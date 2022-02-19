import React from 'react';
import { Input, Checkbox, Button } from 'common/components';

import './signin.module.scss'

const Signin: React.FC = () => {
  return (
    <section className='signin' >
      <form>
        <Input label="E-mail" placeholder="user@email.com" />
        <Input label="Password" placeholder="secret" />
        <Checkbox label="Lembrar-me" />
        <Button>Acessar Plataforma</Button>
      </form>
    </section>
  );
}

export default Signin;