import english from "./en.json";
import arabic from "./ar.json";
import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

i18next.use{initReactI18next}.init({
    lng:'en',
    resource:{
        en:english,
        ar:arabic
    },
    react:{
        useSuspense: false,
    },
});

export default i18next;