import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

vi.mock('../../hooks/useAppInit', () => ({
  useAppInit: () => ({
    session: { user: { id: 'u1' } },
    userProfile: { id: 'u1', profile: {} },
    refreshUserProfile: vi.fn(),
    globalLoading: false,
    loadingStep: '',
    isRecoveryMode: false,
  }),
}));
vi.mock('../../context/OfflineStatusContext', () => ({
  useOfflineStatus: () => ({ isOnline: true, hasCachedData: true }),
}));
vi.mock('../../hooks/useCorrectionCheck', () => ({
  useCorrectionCheck: () => ({
    pendingCorrections: [], adminQueue: [],
    respondToCorrection: vi.fn(), markCorrected: vi.fn(),
  }),
}));
vi.mock('../../hooks/usePendingValidationsAlert', () => ({
  usePendingValidationsAlert: () => ({ pendingCount: 0, isVisible: false, dismiss: vi.fn() }),
}));
vi.mock('../../hooks/usePendingGrants', () => ({
  usePendingGrants: () => ({ pendingGrants: [], setPendingGrants: vi.fn() }),
}));
vi.mock('../../AppRouter', () => ({ default: () => null }));
vi.mock('../../components/BackgroundDecor', () => ({ default: () => null }));
vi.mock('../../components/Telegraphe', () => ({ default: () => null }));
vi.mock('../../components/DiceRoller', () => ({ default: () => null }));
vi.mock('../../components/forge/WidgetAnomalie', () => ({ default: () => null }));
vi.mock('../../components/SystemeModales', () => ({
  InAppNotification: () => null,
  PWAPrompt: () => null,
  DisclaimerModal: () => null,
}));
vi.mock('../../components/Auth', () => ({ default: () => null }));
vi.mock('../../components/AdminCorrectionWidget', () => ({ default: () => null }));
vi.mock('../../components/CorrectionRequestModal', () => ({ default: () => null }));
vi.mock('../../components/ResetPasswordForm', () => ({ default: () => null }));
vi.mock('../../components/OfflineBanner', () => ({ default: () => null }));
vi.mock('../../components/PendingValidationsAlert', () => ({ default: () => null }));
vi.mock('../../components/PendingGrantsAlert', () => ({ default: () => null }));
vi.mock('../../components/GrantAcceptanceModal', () => ({ default: () => null }));
vi.mock('../../utils/SystemeServices', () => ({ showInAppNotification: vi.fn() }));

import App from '../../App';

describe('AppHeader', () => {
  it('affiche le logo officiel Les Héritiers', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const logo = screen.getByRole('img', { name: /les héritiers/i });
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute('src')).toContain('logo-heritiers');
  });
});
