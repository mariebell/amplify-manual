import { defineBackend } from '@aws-amplify/backend';
import { storage } from './storage/resource';
import { sayHelloFunc } from './function/say-hello/resource';

defineBackend({
  storage,
  sayHelloFunc,
});