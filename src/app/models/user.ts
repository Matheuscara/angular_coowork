export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    role: string;
    password: string | null;
    passwordConfirmation: string | null;
    cpf: string;
    image: string;
    phoneNumber: string;
    enabled: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    authorities: Authority[];
    username: string;
}

export interface Authority {
    authority: string;
}