export interface TransactionProps {
    id: number;
    title: string;
    subtitle: string;
    amount: string;
    date: string;
    art: {
        icon: string;
        background: string;
    };
}

export interface TranscationSectionProps {
    data: Array<TransactionProps>;
}

export interface TransactionAviProps {
    icon: any;
    background: string;
}
