export type BottomTabsParams = {
  Home: undefined;
  Advice: undefined;
  History: undefined;
  TrainingPlan: undefined;
};

export type AuthStackParams = {
  PreAuth: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PersonalInfo: {
    email: string;
    fullName: string;
    password: string;
  };
};

export type RootStackParams = {
  PersonalInfo: {
    email: string;
    fullName: string;
    password: string;
  };
  TabNav: undefined;
  Auth: undefined;
  UpdateBMR: undefined;
  Run: undefined;
  PracticeScreen: {
    content: string;
  };
  Setting: undefined;
  DrinkingCalendar: undefined;
  Notification: undefined;
  HowToRun: undefined;
  HowToWarmUp: undefined;
  Article1: undefined;
  Article2: undefined;
  Article3: undefined;
  Article4: undefined;
  Article5: undefined;
  Article6: undefined;
  Article7: undefined;
  Article8: undefined;
  Article9: undefined;
  Advice1: undefined;
  Advice2: undefined;
};
