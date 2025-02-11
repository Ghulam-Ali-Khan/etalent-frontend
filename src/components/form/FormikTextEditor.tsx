import React from 'react';
import { useField } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormHelperText, Grid2, Typography } from '@mui/material';

interface FormikTextEditorProps {
  name: string;
  onChange?: (value: string) => void;
  onBlur?: (name: string, value: string) => void;
  disabled?: boolean;
  isRequired?: boolean;
  isRow?: boolean;
  label?: string;
  labelMarginBottom?: string;
}

const FormikTextEditor: React.FC<FormikTextEditorProps> = ({
  name,
  onChange,
  onBlur,
  disabled = false,
  isRequired = false,
  isRow = false,
  label,
  labelMarginBottom = '8px',
}) => {
  const [{ value: fieldValue }, { touched, error }, { setValue }] = useField<string>(name);

  const handleChange = (_event: Event, editor: any) => {
    const data = editor.getData();
    if (onChange) onChange(data);
  };

  const handleBlur = (_event: Event, editor: any) => {
    const data = editor.getData();
    setValue(data);
    if (onBlur) onBlur(name, data);
  };

  return (
    <Grid2 className="space-y-2" spacing={1} container>
      <Grid2
        className="flex items-center"
        size={{ xl: isRow ? 3 : 12, lg: isRow ? 3 : 12, md: isRow ? 4 : 12, sm: 12 }}
      >
        {label && (
          <Typography
            className={isRequired ? 'text-red-500' : ''}
            variant="body2"
            sx={{ mb: `${labelMarginBottom} !important` }}
          >
            {label}
          </Typography>
        )}
      </Grid2>
      <Grid2 size={{ xl: isRow ? 9 : 12, lg: isRow ? 9 : 12, md: isRow ? 8 : 12, sm: 12 }}>
        <CKEditor
          editor={ClassicEditor}
          data={fieldValue || ''}
          onChange={disabled ? undefined : handleChange}
          onBlur={handleBlur}
        />
        {touched && error && <FormHelperText className="text-red-500 text-sm">{error}</FormHelperText>}
      </Grid2>
    </Grid2>
  );
};

export default FormikTextEditor;
