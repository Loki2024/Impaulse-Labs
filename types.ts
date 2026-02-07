export enum View {
  ONBOARDING_GOALS = 'ONBOARDING_GOALS',
  ONBOARDING_INCOME = 'ONBOARDING_INCOME',
  HOME = 'HOME',
  ENVELOPES = 'ENVELOPES',
  ADD_PURCHASE = 'ADD_PURCHASE',
  SETTINGS = 'SETTINGS',
}

export interface UserSettings {
  currency: string;
  hourlyMode: boolean;
  hourlyRate: number;
  yearlySalary: number;
  investmentReturnRate: number;
  retirementAge: number;
  birthday: string;
  incomeMode: 'salary' | 'hourly';
}

export interface Goal {
  id: string;
  title: string;
  icon: string; // Emoji or icon name
  selected: boolean;
}

export interface SavingsStat {
  moneySaved: number;
  workTimeSaved: string; // e.g., "1 hour, 7 minutes"
  investmentPotential: number;
}
