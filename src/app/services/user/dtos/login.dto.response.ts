import { User } from "../../../models/user";

export interface LoginDtoResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}