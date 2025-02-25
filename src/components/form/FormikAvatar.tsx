import React, { useState, useEffect } from "react";
import { Avatar, FormHelperText } from "@mui/material";
import { useField, useFormikContext } from "formik";

interface FormikAvatarProps {
    name: string;
    label?: string;
    isRequired?: boolean;
    isURL?: boolean; // New prop to determine if value is a URL
}

const FormikAvatar: React.FC<FormikAvatarProps> = ({ name, label, isRequired = false, isURL = false }) => {
    const { setFieldValue, setFieldError } = useFormikContext();
    const [field, meta] = useField(name);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (isURL && typeof field.value === "string") {
            setPreview(field.value); // Directly use the URL
        } else if (field.value instanceof File) {
            const imageUrl = URL.createObjectURL(field.value);
            setPreview(imageUrl);

            return () => URL.revokeObjectURL(imageUrl); // Cleanup
        }
    }, [field.value, isURL]);

    // Handle image selection
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            if (!file.type.startsWith("image/")) {
                setFieldError(name, "Only image files are allowed.");
                return;
            }
            setFieldValue(name, file);
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
