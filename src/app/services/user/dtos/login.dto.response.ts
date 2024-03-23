export interface LoginDtoResponse {
    token: string;
    user: {
        id: number;
        primeiro_nome: string;
        ultimo_nome: string;
        email: string;
        data_nascimento: string;
        tipo_usuario: string;
        empresa: string;
        cpf: string;
        imagem: string;
        telefone: string;
    };
}