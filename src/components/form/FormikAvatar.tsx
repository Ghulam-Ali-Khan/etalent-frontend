import React, { useState, useEffect } from "react";
import { Avatar, FormHelperText } from "@mui/material";
import { useField, useFormikContext } from "formik";

interface FormikAvatarProps {
    name: string;
    label?: string;
    isRequired?: boolean;
    is64base?: boolean; // New prop to determine if value is a base64 string
}

const FormikAvatar: React.FC<FormikAvatarProps> = ({ name, label, isRequired = false, is64base = false }) => {
    const { setFieldValue, setFieldError } = useFormikContext();
    const [field, meta] = useField(name);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (is64base && typeof field.value === "string") {
            setPreview(field.value); // Directly use the base64 string
        } else if (field.value instanceof File) {
            const imageUrl = URL.createObjectURL(field.value);
            setPreview(imageUrl);

            return () => URL.revokeObjectURL(imageUrl); // Cleanup
        }
    }, [field.value, is64base]);

    // Handle image selection
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            if (!file.type.startsWith("image/")) {
                setFieldError(name, "Only image files are allowed.");
                return;
            }

            // Convert file to base64 if is64base is true
            if (is64base) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFieldValue(name, reader.result); // Set base64 string
                };
                reader.readAsDataURL(file);
            } else {
                setFieldValue(name, file); // Set file object
            }
        }
    };

    const handleAvatarClick = () => {
        document.getElementById(`avatarInput-${name}`)?.click();
    };

    return (
        <div>
            {label && (
                <label>
                    {label} {isRequired && <span style={{ color: "red" }}>*</span>}
                </label>
            )}
            <Avatar
                src={preview || ""}
                sx={{ width: 100, height: 100, cursor: "pointer" }}
                onClick={handleAvatarClick}
            />
            <input
                id={`avatarInput-${name}`}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
            />
            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
        </div>
    );
};

export default FormikAvatar;