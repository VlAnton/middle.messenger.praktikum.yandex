export type User = {
  avatar: string | null;
  display_name: string | null;
  first_name: string;
  id: number;
  login: string;
  second_name: string;
};

export type Chat = {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: Indexed;
  title: string;
  unread_count: number;
};
