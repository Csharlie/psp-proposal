
import { ClientConfig } from './types';
import { peldaKftConfig } from './pelda-kft/config';
import { startupXyzConfig } from './startup-xyz/config';
import { autozenoConfig } from './autozeno/config';
import { bellatorConfig } from './bellator/config';
import { benettcarConfig } from './benettcar/config';
import { anettpappConfig } from './anettpapp/config';

export const availableConfigs: Record<string, ClientConfig> = {
  'pelda-kft': peldaKftConfig,
  'startup-xyz': startupXyzConfig,
  'autozeno': autozenoConfig,
  'bellator': bellatorConfig,
  'benettcar': benettcarConfig,
  'anettpapp': anettpappConfig,
};

export function getConfig(key: string): ClientConfig {
  const config = availableConfigs[key];
  if (!config) {
    throw new Error(`Config not found: ${key}`);
  }
  return config;
}

export function getConfigKeys(): string[] {
  return Object.keys(availableConfigs);
}
