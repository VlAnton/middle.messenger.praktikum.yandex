export type AuthApiData = {
  login: string;
  password: string;
};

export type SignUpAPIData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type CreateChatsApi = Record<string, string>;

export type DeleteChatsApi = {
  chatId: number;
};

export type UsersAPI = {
  chatId: number;
  users: Array<Record<string, number>>;
};

export type UserAPIData = {
  first_name: string;
  second_name: string;
  login: string;
  display_name: string;
  email: string;
  phone: string;
};

export type UserPasswordAPIData = {
  oldPassword: string;
  newPassword: string;
};

export type UserSearchAPIData = {
  login: string;
};
