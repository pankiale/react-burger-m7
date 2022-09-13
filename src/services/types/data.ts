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

export type TRegistration = TUser & { password: string };


export type TConfig = {
  readonly url: string;
};

export  type TLogin = Omit<TRegistration, "name">;

export  type TForgotPassword = Omit<TUser, "name">;

export type TResetPassword = {
  password: string;
  token: string;
}

export type TOrders = {
  readonly _id: string;
  readonly ingredients: Array<string>;
  readonly status: string;
  readonly name: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly number: number;
};

export type TOrderIngredientsObject = {
  [key: string]: TOrderIngredients;
}


export type TOrderIngredients = {
  id: string,
  name: string
  link: string,
  price: number,
  counter: number
};