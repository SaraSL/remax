import { Options } from '@alipay/remix-types';
import UNSAFE_wechatTemplateDepth from './UNSAFE_wechatTemplateDepth';

export function getDefaultOptions(): Options {
  return {
    turboPages: [],
    pxToRpx: true,
    cwd: process.cwd(),
    progress: true,
    output: 'dist',
    rootDir: 'src',
    compressTemplate: process.env.NODE_ENV === 'production',
    UNSAFE_wechatTemplateDepth,
    plugins: [],
    notify: false,
  };
}