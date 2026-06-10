import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Compatibilité Jest : les tests qui utilisent jest.mock() fonctionnent avec vi
global.jest = vi;
