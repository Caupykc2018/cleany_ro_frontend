import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux';
import { SET_LANGUAGE } from '@/constants/actions';
import { languageSelector } from '@/constants/selectors';

const useLanguage = (local: any) => {
  const language = useAppSelector(languageSelector);
  const dispatch = useAppDispatch();

  const getTranslateText = useCallback(
    (prop: string) => {
      return local?.[language][prop] || '';
    },
    [language, dispatch]
  );

  const setLanguage = useCallback((language) => {
    dispatch({ type: SET_LANGUAGE, payload: { language } });
  }, []);

  return {
    language,
    getTranslateText,
    setLanguage,
  };
};

export default useLanguage;
