import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng); // Change the language
  };

  return (
    <div className='flex gap-2'>
      <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
      <button onClick={() => changeLanguage('fr')}>🇫🇷 Français</button>
    </div>
  );
};

export default LanguageSwitcher;
