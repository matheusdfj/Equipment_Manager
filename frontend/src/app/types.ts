export interface Equipment{
  name:string,
  type:string,
  id:string,
  description:string,
  quantity:number,
  price:number
}

export interface Obs{
  createdon:string,
  content:string,
  equipment: Equipment
}