import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { TextInput } from './components/TextInput';
import { Text } from './components/Text';

import './styles/global.css';
import { Envelope, Key } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App(){
  return (
      <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
        <header className='flex flex-col items-center'>
          <Logo />

          <Heading size="lg" className='mt-4'>
            Ignite Lab
          </Heading>

          <Text size="lg" className="text-gray-400 mt-1">
             Faça login e começe a usar!
          </Text>
        </header>

        <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
          <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço e e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope/>  
              </TextInput.Icon>

              <TextInput.Input placeholder='Digite seu e-mail'/>  
            </TextInput.Root>   
          </label>

          <label htmlFor="password" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço e e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Key />  
              </TextInput.Icon>

              <TextInput.Input placeholder='********'/>  
            </TextInput.Root>   
          </label>

          <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id='remember'/>
            <Text size='sm'>Lembrar de mim por 30 dias</Text>
          </label>

          <Button type='submit' className='mt-4'>
            Entrar na plataforma
          </Button>
        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueçeu sua senha?</a>
          </Text>
          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>Não tem conta? Crie uma já!</a>
          </Text>
        </footer>
      </div>
    )
}