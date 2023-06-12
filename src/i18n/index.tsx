import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./locales";

export function i18nInit(){
    i18n.use(initReactI18next).init({
        resources,
        lng: localStorage.getItem('lang') || "ru"
    });
}