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

export type TItem = TIngredients & { key: string };

export type TMoveElement = {
  dragIndex: number;
  hoverIndex: number;
};

export type TIDs = {
 ingredients: string
}
export type TUser = {
  readonly name: string;
  readonly email: string;
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
};