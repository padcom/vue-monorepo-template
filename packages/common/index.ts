import './main.css'

import { example } from './lib/example'

export function sayHello(name: string) {
  console.log('Hello,', name, '!', example())
}

export * from './components'
