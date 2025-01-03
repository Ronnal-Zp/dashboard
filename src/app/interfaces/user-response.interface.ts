export interface UsersResponse {
  page:       number;
  perPage:    number;
  total:      number;
  totalPages: number;
  data:       User[];
  support:    Support;
}

export interface UserResponse {
  data: User;
}

export interface User {
  id:        number;
  email:     string;
  first_name: string;
  last_name:  string;
  avatar:    string;
}

export interface Support {
  url:  string;
  text: string;
}
