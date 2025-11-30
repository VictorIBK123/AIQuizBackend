import { Document } from "mongoose";
export interface categoriesType extends Document {
    categories: categoriesDoc;
}
export type categoriesDoc = {
    'Science': {
        'Physics': string[];
        'Chemistry': string[];
        'Biology': string[];
        'Astronomy': string[];
        'Earth Science': string[];
        'Mathematics': string[];
        'Engineering': string[];
        'Medicine': string[];
        'Computer Science': string[];
        'Environmental Science': string[];
        'Physics Applications': string[];
        'Science': string[];
    };
    'Natural Languages': {
        'English (British)': string[];
        'English (American)': string[];
        'Spanish': string[];
        'French': string[];
        'Mandarin Chinese': string[];
        'Portuguese': string[];
        'Maori': string[];
        'Tagalog': string[];
        'Tamil': string[];
        'Italian': string[];
        'Bengali': string[];
        'German': string[];
        'Swahili': string[];
        'Arabic': string[];
        'Hindi': string[];
        'Japanese': string[];
        'Russian': string[];
        'Zulu': string[];
        'Korean': string[];
    };
    'History': {
        'Ancient History': string[];
        'Medieval History': string[];
        'Modern History': string[];
        'Renaissance': string[];
        'Military History': string[];
        'Political History': string[];
        'Cultural History': string[];
        'Economic History': string[];
        'Religious History': string[];
        'Social History': string[];
        'Art History': string[];
        'History': string[];
    };
    'Technology': {
        'Programming': string[];
        'Artificial Intelligence': string[];
        'Cybersecurity': string[];
        'Web Development': string[];
        'Data Science': string[];
        'Networking': string[];
        'Blockchain': string[];
        'Mobile Development': string[];
        'Cloud Computing': string[];
        'Game Development': string[];
        'Mobile App Development': string[];
        'Technology': string[];
    };
    'Entertainment': {
        'Movies': string[];
        'Music': string[];
        'Television': string[];
        'Theater': string[];
        'Video Games': string[];
        'Books': string[];
        'Comedy': string[];
        'Dance': string[];
        'Magic & Illusion': string[];
        'Events': string[];
        'Entertainment': string[];
    };
    'Religion': {
        'Christianity': string[];
        'Islam': string[];
        'Hinduism': string[];
        'Buddhism': string[];
        'Judaism': string[];
        'Sikhism': string[];
        'Taoism': string[];
        'Confucianism': string[];
        'Shinto': string[];
        'Zoroastrianism': string[];
        'Indigenous Religions': string[];
        'Religion': string[];
    };
    'Economics': {
        'Microeconomics': string[];
        'Macroeconomics': string[];
        'International Economics': string[];
        'Development Economics': string[];
        'Financial Economics': string[];
        'Public Economics': string[];
        'Labor Economics': string[];
        'Environmental Economics': string[];
        'Health Economics': string[];
        'Behavioral Economics': string[];
        'Economics': string[];
    };
    'Sports': {
        'Football': string[];
        'Basketball': string[];
        'Olympics': string[];
        'Tennis': string[];
        'Cricket': string[];
        'Golf': string[];
        'Baseball': string[];
        'Ice Hockey': string[];
        'American Football': string[];
        'Motorsports': string[];
        'Cycling': string[];
        'Swimming': string[];
        'Track and Field': string[];
        'Sports': string[];
    };
};
//# sourceMappingURL=categories.d.ts.map