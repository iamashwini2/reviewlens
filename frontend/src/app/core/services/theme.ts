import { Injectable, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'reviewlens-theme';

  theme = signal<AppTheme>('dark');

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey) as AppTheme | null;

    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.setTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia?.(
      '(prefers-color-scheme: dark)'
    ).matches;

    this.setTheme(prefersDark ? 'dark' : 'light');
  }

  setTheme(theme: AppTheme): void {
    this.theme.set(theme);

    document.documentElement.setAttribute(
      'data-theme',
      theme
    );

    localStorage.setItem(this.storageKey, theme);
  }

  toggleTheme(): void {
    this.setTheme(
      this.theme() === 'dark' ? 'light' : 'dark'
    );
  }
}