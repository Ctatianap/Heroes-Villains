export let saveInfo = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
export let getInfo = (key) => {
    const info = localStorage.getItem(key);
    return info ? JSON.parse(info) : undefined;
};