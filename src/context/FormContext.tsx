import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type FormType = "barn" | "vän" | null;

interface FormData {
  namn: string;
  ålder: string;
  hårfärg: string;
  ögonfärg: string;
  snutte: string;
  förmåga: string;
  tillhör?: string; // endast för vän
}

interface FormContextType {
  activeForm: FormType;
  setActiveForm: React.Dispatch<React.SetStateAction<FormType>>;
  formData: Record<Exclude<FormType, null>, FormData>; // ❗️ta bort null som key
  updateField: (type: Exclude<FormType, null>, field: keyof FormData, value: string) => void;
  resetForm: (type: Exclude<FormType, null>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  // endast 'barn' och 'vän' som keys
  const [formData, setFormData] = useState<Record<Exclude<FormType, null>, FormData>>({
    barn: {
      namn: "",
      ålder: "",
      hårfärg: "",
      ögonfärg: "",
      snutte: "",
      förmåga: "",
    },
    vän: {
      namn: "",
      ålder: "",
      hårfärg: "",
      ögonfärg: "",
      snutte: "",
      förmåga: "",
      tillhör: "",
    },
  });

  const updateField = (type: Exclude<FormType, null>, field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [type]: { ...prev[type], [field]: value },
    }));
  };

  const resetForm = (type: Exclude<FormType, null>) => {
    setFormData((prev) => ({
      ...prev,
      [type]: {
        namn: "",
        ålder: "",
        hårfärg: "",
        ögonfärg: "",
        snutte: "",
        förmåga: "",
        tillhör: "",
      },
    }));
  };

  return (
    <FormContext.Provider
      value={{ activeForm, setActiveForm, formData, updateField, resetForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used within FormProvider");
  return ctx;
};
