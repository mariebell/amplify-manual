import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { sayHelloFunc } from './function/say-hello/resource';

defineBackend({
  data,
  storage,
  sayHelloFunc,
});