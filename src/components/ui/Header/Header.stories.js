import Header from './Header.svelte';

export default { title: 'Header' }

const logo = "https://fakeimg.pl/300x200";

export const HeaderDefault = () => ({
  Component: Header,
  props: {
    logo
  },
}); 