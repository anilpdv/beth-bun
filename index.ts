import {Elysia} from 'elysia'

const app  = new Elysia().get('/', () => "hello world").listen(3000)

