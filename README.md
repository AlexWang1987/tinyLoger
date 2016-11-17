# tinyLoger

a small and tiny loger util. easy to understand and use.

```javascript
import Loger from 'tinyLoger';

// set output level(optional)
Loger.setLogLevel(Loger.ERROR);

// set output prefix(optional)
let loger = Loger.getLoger('login process: ');

// enjoy.

loger.info('login successfull.');

loger.error('login fails.');

loger.warn('usename is required.');

```
