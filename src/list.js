import { message } from 'antd';

export const list = [
  'React',
  'Redux-toolkit',
  'TRK-query',
  'Redux-persist',
  'React-router-dom',
  'JSON Server',
  'AntDesign',
  'Tailwind CSS',
  'JavaScript',
];

export const errorMessageLogin = () => {
  message.error('Войдите в профиль', [1]);
};
export const successAddInBasket = () => {
  message.success('Товар успешно добавлен в корзину', [1]);
};
export const alreadyInBasket = () => {
  message.error('Товар уже есть в корзине', [1]);
};
export const successAddCategories = () => {
  message.success('Категория добавлена!', [1]);
};
export const errorAddCategories = () => {
  message.error('Заполните все данные!', [1]);
};
export const successAddGoods = () => {
  message.success('Товар добавлен!', [1]);
};
export const errorAddGoods = () => {
  message.error('Заполните все данные!', [1]);
};
