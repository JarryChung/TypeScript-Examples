import { Middleware } from 'midway';
import { logger } from '../../utils';

interface ICORSOptions {
  methods: string[];
  origin: string[];
}

const cors = ({ methods, origin }: ICORSOptions): Middleware => {
  return async (ctx, next) => {
    logger(`===== CORS Middlware Invoked, Allowed: ${methods} ${origin} =====`);

    ctx.set('Access-Control-Allow-Origin', origin);
    ctx.set('Access-Control-Allow-Methods', methods);
    ctx.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Content-Length, Authorization, Accept, X-Requested-With'
    );

    ctx.method.toUpperCase() === 'OPTIONS' ? (ctx.body = 200) : await next();
  };
};

export default cors;
