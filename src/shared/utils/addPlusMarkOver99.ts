const addPlusMarkOver99 = (target: string | number) => (Number(target) > 99 ? '99+' : target.toString());
export default addPlusMarkOver99;
