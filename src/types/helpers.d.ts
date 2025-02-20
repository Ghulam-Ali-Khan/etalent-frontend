export interface Option {
    [key: string]: any;
}

export interface OptionsMakerParams {
    optionsArray?: Option[];
    value?: string;
    label?: string;
    additionalKey?: string;
    additionalKey2?: string;
}