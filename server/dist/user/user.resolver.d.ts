export declare class UserResolver {
    getUsers(): Promise<{
        id: string;
        email: string;
        name: string;
    }[]>;
}
