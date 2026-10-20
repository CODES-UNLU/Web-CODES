/**
 * Utilidades para resolución de rutas respetando `base` (ej. /Web-CODES/).
 * Garantiza enlaces correctos tanto en desarrollo local como en GitHub Pages.
 */

export function withBase(path: string = '/'): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') {
    return base ? `${base}/` : '/';
  }
  return `${base}${cleanPath}`;
}

export function isActivePath(currentPathname: string, targetPath: string): boolean {
  const normalizedCurrent = currentPathname.replace(/\/$/, '') || '/';
  const targetWithBase = withBase(targetPath).replace(/\/$/, '') || '/';

  if (targetPath === '/' || targetPath === '') {
    return normalizedCurrent === targetWithBase;
  }

  return normalizedCurrent === targetWithBase || normalizedCurrent.startsWith(`${targetWithBase}/`);
}
