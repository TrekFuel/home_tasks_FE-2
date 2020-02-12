async function start() {
  // eslint-disable-next-line no-return-await
  return 'async is working';
}

start().then(console.log);

class Util {
    static id = Date.now()
}

console.log('Util Id:', Util.id);
