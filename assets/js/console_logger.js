import { Socket } from 'phoenix';

let socket = new Socket('/socket', { params: { token: window.userToken } });
socket.connect();

export default function () {
  let channel = socket.channel('console:log', {});
  channel
    .join()
    .receive('ok', () => {
      // Adds toJSON method on Error so errors don't get sent as empty maps
      if (!('toJSON' in Error.prototype))
        Object.defineProperty(Error.prototype, 'toJSON', {
          value: function () {
            var alt = {};

            Object.getOwnPropertyNames(this).forEach(function (key) {
              alt[key] = this[key];
            }, this);

            return alt;
          },
          configurable: true,
          writable: true,
        });
      
      // Override console to send channel messages in addition to base behavior
      const console = (function (cons) {
        return {
          ...cons,
          log: function (...args) {
            cons.log.apply(...args);
            channel.push('log', args);
          },
          info: function (...args) {
            cons.info.apply(...args);
            channel.push('info', args);
          },
          warn: function (...args) {
            cons.warn.apply(...args);
            channel.push('warn', args);
          },
          error: function (...args) {
            cons.error.apply(...args);
            channel.push('error', args);
          },
        };
      })(window.console);

      // Override the window console
      window.console = console;
    })
    .receive('error', (resp) => {
      console.log('Unable to join', resp);
    });
}
