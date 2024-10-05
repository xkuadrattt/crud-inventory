import React from "react";

export type LinkType = {
  children: React.ReactNode;
  href: string;
  style?: string;
};

export type HeadingOne = {
  children: React.ReactNode;
  style?: string;
};

export type HeadingSub = {
  children: React.ReactNode;
  style?: string;
};

export type ButtonUI = {
  children: React.ReactNode;
  style?: string;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "bordersecondary"
    | "borderprimary"
    | "borderwarning"
    | "borderdanger";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ParagraphUI = {
  children: React.ReactNode;
  style?: string;
};

export type LabelUI = {
  children: React.ReactNode;
  style?: string;
  htmlFor: string;
};

export type CardCategoryType = {
  id: number;
  name: string;
  description?: string;
};

export type DashboardLayoutType = {
  children: React.ReactNode;
  style?: string;
};

export type InputUI = {
  type: string;
  pattern?: string;
  id?: string;
  placeholder?: string;
  style?: string;
  name?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type AvatarProfileUi = {
  user: string;
  role: string;
};

export type CardStaffType = {
  user: string;
  status: string;
  role: string;
};

export type SidebarSlice = {
  toggleMenu: boolean;
};

export type HeroSectionProps = {
  children: React.ReactNode;
};

export type CardFooterProps = {
  title: string;
  content: string;
};
