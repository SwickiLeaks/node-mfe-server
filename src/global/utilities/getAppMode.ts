/**
 * Copyright 2025
 */
export enum Mode {
  PROD = 'prod',
  DEV = 'dev',
  DEBUG = 'debug',
}

export const Modes: ReadonlyArray<string> = [Mode.PROD, Mode.DEV, Mode.DEBUG];

/**
 * Returns Application MODE = DEBUG, DEV or PROD
 * based on argv = "--mode"
 * @returns
 */
export function getAppMode(): Mode {
  return process.argv
    .filter((arg) => arg.startsWith('--mode'))
    .map((arg) => arg.substring('--mode='.length))
    .map((arg) => arg.trim().toLowerCase())
    .filter((arg) => Modes.includes(arg))
    .pop() as Mode;
}
