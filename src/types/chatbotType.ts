export interface Message {
  sender: "user" | "bot";
  text: string;
  component?: React.ReactNode;
}

export interface ChatbotResponse extends chatbotAnswerType {
  translated_answer: string;
  translated_sub_questions: string[] | centerDataType | null;
}

export interface chatbotAnswerType {
  answer: string;
  sub_questions: string[] | null | centerDataType;
}

export interface centerDataType {
  center_name: string;
  address: string;
  telephone: string;
}

export interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
