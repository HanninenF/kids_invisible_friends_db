//FormatContext type
import React from 'react';

export type FormType = 'barn' | 'vän' | null;

export interface FormData {
  namn: string;
  ålder: string;
  hårfärg: string;
  ögonfärg: string;
  snutte: string;
  förmåga: string;
  tillhör?: string; // endast för vän
}

export interface FormContextType {
  activeForm: FormType;
  setActiveForm: React.Dispatch<React.SetStateAction<FormType>>;
  formData: Record<Exclude<FormType, null>, FormData>; // ❗️ta bort null som key
  updateField: (type: Exclude<FormType, null>, field: keyof FormData, value: string) => void;
  resetForm: (type: Exclude<FormType, null>) => void;
}

// Mockdata type
export interface Barn {
  namn: string;
  ålder: string;
  hårfärg: string;
  ögonfärg: string;
  snutte: string;
  förmåga: string;
}

export interface Van extends Barn {
  tillhör?: string;
}

export interface MockDataType {
  barn: Barn[];
  vänner: Van[];
}

// Modal type
export interface ModalProps {
  onAddBarn?: (barn: Barn) => void;
  onAddVan?: (vän: Van) => void;
  barnLista?: Barn[];
}

export interface SidebarProps {
  onAddBarn?: (barn: Barn) => void;
  onAddVan?: (vän: Van) => void;
  barnLista?: Barn[];
}
