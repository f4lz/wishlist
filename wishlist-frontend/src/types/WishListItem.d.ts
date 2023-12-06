/** Элемент списка пожеланий */
export type ListItem = {
  /** Название */
  title: string;
  /** Ссылка */
  link?: string;
  /** `ID` */
  id?: string | number;
}