/* eslint import/prefer-default-export: off */
import { _spawn } from '../util';

export function debugging() {
  _spawn('socat', 'tcp-listen:9234,fork tcp:localhost:9233');
}
