import { Document } from "mongoose";
export interface UserType extends Document {
    token: string;
    email: string;
    overallPerformance?: number;
    quizHistory?: string;
    appData: appData;
}
export type appData = {
    overallPerformance: number;
    background: 'white' | '#1c1c45';
    myColor: '#1c1c45' | 'white';
    allTotalQuestions: number;
    allQuestionType: 'multichoice' | 'true&false' | 'theory';
    allDifficultyLevel: 'easy' | 'normal' | 'difficult';
    allDurationMin: number;
    allDurationHr: number;
    quizId: number;
    answerValidation: 'each' | 'all';
};
//# sourceMappingURL=users.d.ts.map