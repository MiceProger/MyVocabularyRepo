import { User } from "./User";

export interface VocabularyWord{
    id: number;
    word: string;
    translation: string;
    comments: string;
    formattedDate: string;
    status: string;
    special: boolean;
    user:User;
}