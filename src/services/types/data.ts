export type TIngredients = {
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
  readonly counter: number;
};

export type TRawUser = Omit<TIngredients, 'id'> & { _id: number };

export type TPrize = {
  readonly year: string;
  readonly category: string;
  readonly share: string;
  readonly motivation: string;
  readonly affiliations: ReadonlyArray<TAffiliations>;
};

export type TAffiliations = {
  readonly name: string;
  readonly city: string;
  readonly country: string;
};

export type TCountry = {
  readonly name: string;
  readonly code: string;
};

export type TLaureate = {
  readonly id: string;
  readonly firstname: string;
  readonly surname: string;
  readonly born: string;
  readonly died: string;
  readonly bornCountry: string;
  readonly bornCountryCode: string;
  readonly bornCity: string;
  readonly diedCountry: string;
  readonly diedCountryCode: string;
  readonly diedCity: string;
  readonly gender: string;
  readonly prizes: ReadonlyArray<TPrize>;
};