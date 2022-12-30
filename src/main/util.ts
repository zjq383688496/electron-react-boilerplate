/* eslint import/prefer-default-export: off */
import { spawn } from 'child_process';
import { URL } from 'url';
import path from 'path';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export function _spawn(cmd: string, args: string = '', options = {}) {
  const cfg: string[] = args.split(/\s+/);
  console.log('执行命令: ', cmd, args);
  const ls = spawn(cmd, cfg, options);
  ls.stdout.on('data', (data) => {
    console.log(data);
  });
  // ls.stderr.on('data', (err) => {
  // });
  ls.on('close', () => {
    resolve(null);
  });
  return ls;

}
