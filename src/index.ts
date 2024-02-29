import start from './cli'
import { onError } from './error'

start().catch(onError)
