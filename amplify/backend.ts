import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { sayHelloFunc } from './function/say-hello/resource';

defineBackend({
  data,
  auth,
  storage,
  sayHelloFunc,
});