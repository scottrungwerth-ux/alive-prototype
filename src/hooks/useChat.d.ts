import type { Lesson } from '@types/index';
export declare function useChat(lesson?: Lesson): {
    history: ChatTurn[];
    input: string;
    setInput: import("react").Dispatch<import("react").SetStateAction<string>>;
    typing: boolean;
    send: (text: string) => void;
};
