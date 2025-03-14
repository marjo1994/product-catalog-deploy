
/*export const getProducts = async ({
    pageParam,
    filters,
  }: {
    pageParam: number;
    filters: { brand: string[]; category: string[] };
  }) => {
    let url = `http://localhost:4000/products?_page=${pageParam}&_per_page=8`;
  
    if (filters.brand.length > 0) {
      url += `&brandValue=${filters.brand.join(',')}`;
    }
  
    if (filters.category.length > 0) {
      url += `&categoryValue=${filters.category.join(',')}`;
    }
  
    const res = await fetch(url);
    const data = await res.json();
    return data;
};*/

export const getProducts = async ({pageParam} : {pageParam : number}) => {
    const url = `https://legendary-amber-lion.glitch.me/products?_page=${pageParam}&_per_page=8`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export const getProductbySku = async (sku: string) => {
    const url = `https://legendary-amber-lion.glitch.me/products?sku=${sku}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.items[0];
};