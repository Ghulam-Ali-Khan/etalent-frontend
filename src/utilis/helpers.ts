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

export const saveLocalStorage = ({ label, data }: { label: string, data: any }) => {
    localStorage.setItem(label, JSON.stringify(data));
}

export const getDataLocalStorage = ({ label }: { label: string }) => {
    const data = JSON.parse(localStorage.getItem(label));

    return data;
}
