import { OptionsMakerParams } from "@/types/helpers";
import { countries } from "./data";

export const optionsMaker = ({
    optionsArray = [],
    value = "id",
    label = "name",
    additionalKey,
    additionalKey2,
}: OptionsMakerParams): { value: any; label: any;[key: string]: any }[] =>
    optionsArray?.length > 0
        ? optionsArray.map(option => ({
            value: option?.[value],
            label: option?.[label],
            ...(additionalKey ? { [additionalKey]: option?.[additionalKey] } : {}),
            ...(additionalKey2 ? { [additionalKey2]: option?.[additionalKey2] } : {})
        }))
        : [];

export const countriesOptions = optionsMaker({ optionsArray: countries, label: 'label', value: 'label' });

export const isEmptyObject = (obj: unknown): boolean => {
    return !!obj && typeof obj === "object" && Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const saveLocalStorage = ({ label, data = {} }: { label: string, data: any }) => {
    localStorage.setItem(label, JSON.stringify(data));
}

export const getDataLocalStorage = ({ label }: { label: string }) => {
    const data = localStorage.getItem(label);
    return data ? JSON.parse(data) : null; // or return an empty object `{}`
};


export const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result as string;
            resolve(base64String);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
};