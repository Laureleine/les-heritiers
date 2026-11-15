import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { vi } from 'vitest';
import SousSocleConfirmHost from '../SousSocleConfirmHost';
import { requestSousSocleConfirm } from '../../utils/sousSocle';

describe('SousSocleConfirmHost', () => {
  it("affiche la demande et n'applique qu'après confirmation", () => {
    const onConfirm = vi.fn();
    render(<SousSocleConfirmHost />);
    act(() => requestSousSocleConfirm({ title: 'Ruine véritable', message: 'Descendre ?', onConfirm }));
    expect(screen.getByText('Ruine véritable')).toBeInTheDocument();
    expect(onConfirm).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText('Oui, je confirme'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Ruine véritable')).toBeNull();
  });

  it("n'applique rien si on annule", () => {
    const onConfirm = vi.fn();
    render(<SousSocleConfirmHost />);
    act(() => requestSousSocleConfirm({ message: 'x', onConfirm }));
    fireEvent.click(screen.getByText('Annuler'));
    expect(onConfirm).not.toHaveBeenCalled();
  });
});
